import * as pb from './proto/common_quality_data_pbjs.js';

export function decodeAnnotatedPageContent(base64String) {
  const buffer = Buffer.from(base64String, 'base64');
  const message = pb.optimization_guide.proto.AnnotatedPageContent.decode(buffer);
  return pb.optimization_guide.proto.AnnotatedPageContent.toObject(message, {
    longs: String,
    enums: String,
    defaults: true,
    arrays: true,
    objects: true,
  });
}

function findNodeByRoles(node, roles) {
  const attrs = node.contentAttributes || {};
  if (attrs.annotatedRoles && roles.some(r => attrs.annotatedRoles.includes(r))) {
    return node;
  }
  
  if (node.childrenNodes) {
    for (const child of node.childrenNodes) {
      const found = findNodeByRoles(child, roles);
      if (found) return found;
    }
  }
  return null;
}

function recursiveToMarkdown(node) {
  let md = '';
  const attrs = node.contentAttributes || {};
  
  if (attrs.attributeType === 'CONTENT_ATTRIBUTE_TEXT' && attrs.textData) {
     let text = attrs.textData.textContent || '';
     text = text.trim();
     if (text) {
         if (attrs.textData.textStyle && attrs.textData.textStyle.hasEmphasis) {
             text = `**${text}**`;
         }
         if (attrs.textData.textStyle && attrs.textData.textStyle.textSize) {
             const size = attrs.textData.textStyle.textSize;
             if (size === 'TEXT_SIZE_XL' || size === 'TEXT_SIZE_L') {
                 text = `\n## ${text}\n`;
             }
         }
         md += text + ' ';
     }
  } else if (attrs.attributeType === 'CONTENT_ATTRIBUTE_IMAGE' && attrs.imageData) {
     const src = attrs.imageData.src || '';
     const alt = attrs.imageData.altText || '';
     if (src) {
        md += `\n![${alt}](${src})\n`;
     }
  } else if (attrs.attributeType === 'CONTENT_ATTRIBUTE_ANCHOR' && attrs.anchorData) {
     const url = attrs.anchorData.url || '';
     let childText = '';
     if (node.childrenNodes) {
         for (const child of node.childrenNodes) {
             childText += recursiveToMarkdown(child);
         }
     }
     childText = childText.trim();
     if (childText && url) {
         return `[${childText}](${url}) `; // we've processed children manually
     }
  } else if (attrs.attributeType === 'CONTENT_ATTRIBUTE_ORDERED_LIST' || attrs.attributeType === 'CONTENT_ATTRIBUTE_UNORDERED_LIST') {
      let listMd = '\n\n';
      const isOrdered = attrs.attributeType === 'CONTENT_ATTRIBUTE_ORDERED_LIST';
      let index = 1;
      
      if (node.childrenNodes) {
          for (const item of node.childrenNodes) {
              const itemAttrs = item.contentAttributes || {};
              // Even if it isn't strictly CONTENT_ATTRIBUTE_LIST_ITEM, process it as a list child
              let itemText = '';
              if (item.childrenNodes) {
                  for (const content of item.childrenNodes) {
                      itemText += recursiveToMarkdown(content);
                  }
              }
              itemText = itemText.replace(/\s+/g, ' ').trim();
              if (itemText) {
                  const prefix = isOrdered ? `${index}. ` : '* ';
                  listMd += `${prefix}${itemText}\n`;
                  index++;
              }
          }
      }
      return listMd + '\n';
  } else if (attrs.attributeType === 'CONTENT_ATTRIBUTE_TABLE') {
      let tableMd = '\n\n';
      let isFirstRow = true;
      if (node.childrenNodes) {
          for (const row of node.childrenNodes) {
              const rowAttrs = row.contentAttributes || {};
              if (rowAttrs.attributeType !== 'CONTENT_ATTRIBUTE_TABLE_ROW') continue;
              
              let rowText = '|';
              let sepText = '|';
              if (row.childrenNodes) {
                  for (const cell of row.childrenNodes) {
                      let cellText = '';
                      if (cell.childrenNodes) {
                          for (const content of cell.childrenNodes) {
                              cellText += recursiveToMarkdown(content);
                          }
                      }
                      cellText = cellText.replace(/\s+/g, ' ').trim();
                      rowText += ` ${cellText} |`;
                      sepText += `---|`;
                  }
              }
              tableMd += rowText + '\n';
              if (isFirstRow || (rowAttrs.tableRowData && rowAttrs.tableRowData.type === 'TABLE_ROW_TYPE_HEADER')) {
                  if (isFirstRow) {
                      tableMd += sepText + '\n';
                  }
              }
              isFirstRow = false;
          }
      }
      return tableMd + '\n';
  }
  
  // ignore unwanted sections if we hit them in the tree stream
  if (attrs.annotatedRoles && (attrs.annotatedRoles.includes('ANNOTATED_ROLE_NAV') || attrs.annotatedRoles.includes('ANNOTATED_ROLE_FOOTER'))) {
     return ''; // Skip rendering kids of nav/footer
  }
  
  if (node.childrenNodes) {
    for (const child of node.childrenNodes) {
      md += recursiveToMarkdown(child);
    }
  }

  // add basic block spacing for container
  if (attrs.attributeType === 'CONTENT_ATTRIBUTE_CONTAINER') {
      md += '\n\n';
  }

  return md;
}

export function convertToMarkdown(decodedProto) {
  const root = decodedProto.rootNode;
  if (!root) return '';
  
  // Try to find the narrowest main content area to avoid outer shells
  const contentRoot = findNodeByRoles(root, ['ANNOTATED_ROLE_ARTICLE']) 
                   || findNodeByRoles(root, ['ANNOTATED_ROLE_MAIN']) 
                   || root;
                   
  let rawMd = recursiveToMarkdown(contentRoot);
  
  // Clean up formatting
  rawMd = rawMd
    .replace(/\n{3,}/g, '\n\n')
    .replace(/ \n/g, '\n')
    .replace(/^\s+|\s+$/g, '');
    
  return rawMd;
}
