import fs from 'node:fs';

const data = JSON.parse(fs.readFileSync('../../test/fixtures/annotatedpagecontent_payload.json', 'utf8'));

export function findArticleRoot(node) {
  const attrs = node.contentAttributes || {};
  if (attrs.annotatedRoles && attrs.annotatedRoles.includes('ANNOTATED_ROLE_ARTICLE')) {
    return node;
  }
  
  if (node.childrenNodes) {
    for (const child of node.childrenNodes) {
      const found = findArticleRoot(child);
      if (found) return found;
    }
  }
  return null;
}

export function findMainRoot(node) {
  const attrs = node.contentAttributes || {};
  if (attrs.annotatedRoles && attrs.annotatedRoles.includes('ANNOTATED_ROLE_MAIN')) {
    return node;
  }
  
  if (node.childrenNodes) {
    for (const child of node.childrenNodes) {
      const found = findMainRoot(child);
      if (found) return found;
    }
  }
  return null;
}

export function toMarkdown(node) {
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
  }

  else if (attrs.attributeType === 'CONTENT_ATTRIBUTE_IMAGE' && attrs.imageData) {
     const src = attrs.imageData.src || '';
     const alt = attrs.imageData.altText || '';
     if (src) {
        md += `\n![${alt}](${src})\n`;
     }
  }
  
  else if (attrs.attributeType === 'CONTENT_ATTRIBUTE_ANCHOR' && attrs.anchorData) {
     const url = attrs.anchorData.url || '';
     let childText = '';
     if (node.childrenNodes) {
         for (const child of node.childrenNodes) {
             childText += toMarkdown(child);
         }
     }
     childText = childText.trim();
     if (childText && url) {
         md += `[${childText}](${url}) `;
     }
     // we've processed children manually
     return md;
  }
  
  // ignore unwanted sections if we hit them mid-stream (though hopefully not in ARTICLE)
  if (attrs.annotatedRoles && (attrs.annotatedRoles.includes('ANNOTATED_ROLE_NAV') || attrs.annotatedRoles.includes('ANNOTATED_ROLE_FOOTER'))) {
     return md; // Skip rendering kids of nav/footer
  }
  
  if (node.childrenNodes) {
    for (const child of node.childrenNodes) {
      md += toMarkdown(child);
    }
  }

  // add basic block spacing for container
  if (attrs.attributeType === 'CONTENT_ATTRIBUTE_CONTAINER') {
      md += '\n\n';
  }

  return md;
}

// Clean up newlines
export function cleanupMarkdown(md) {
  return md
    .replace(/\n{3,}/g, '\n\n')
    .replace(/ \n/g, '\n')
    .trim();
}

if (process.argv[1] && process.argv[1].endsWith('to-markdown.js')) {
    const root = findArticleRoot(data.rootNode) || findMainRoot(data.rootNode) || data.rootNode;
    const rawMd = toMarkdown(root);
    console.log(cleanupMarkdown(rawMd));
}
