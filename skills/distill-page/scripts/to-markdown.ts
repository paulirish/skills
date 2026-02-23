import fs from 'node:fs';
import * as pb from './proto/common_quality_data_pbjs.js';

type AnyNode = pb.optimization_guide.proto.IContentNode;

const data = JSON.parse(fs.readFileSync('../../test/fixtures/annotatedpagecontent_payload.json', 'utf8'));

export function findArticleRoot(node: AnyNode): AnyNode | null {
  const attrs = node.contentAttributes || {};
  if (attrs.annotatedRoles && (attrs.annotatedRoles || []).includes(pb.optimization_guide.proto.AnnotatedRole.ANNOTATED_ROLE_ARTICLE as any)) {
    return node;
  }
  
  if (node.childrenNodes) {
    for (const child of node.childrenNodes || []) {
      const found = findArticleRoot(child);
      if (found) return found;
    }
  }
  return null;
}

export function findMainRoot(node: AnyNode): AnyNode | null {
  const attrs = node.contentAttributes || {};
  if (attrs.annotatedRoles && (attrs.annotatedRoles || []).includes(pb.optimization_guide.proto.AnnotatedRole.ANNOTATED_ROLE_MAIN as any)) {
    return node;
  }
  
  if (node.childrenNodes) {
    for (const child of node.childrenNodes || []) {
      const found = findMainRoot(child);
      if (found) return found;
    }
  }
  return null;
}

let imageIndex = 1;

export function toMarkdown(node: AnyNode): string {
  let md = '';
  const attrs = node.contentAttributes || {};
  
  if (attrs.attributeType === pb.optimization_guide.proto.ContentAttributeType.CONTENT_ATTRIBUTE_TEXT && attrs.textData) {
     let text = attrs.textData.textContent || '';
     text = text.trim();
     if (text) {
         if (attrs.textData.textStyle && attrs.textData.textStyle.hasEmphasis) {
             text = `**${text}**`;
         }
         if (attrs.textData.textStyle && attrs.textData.textStyle.textSize) {
             const size = attrs.textData.textStyle.textSize;
             if (size === pb.optimization_guide.proto.TextSize.TEXT_SIZE_XL || size === pb.optimization_guide.proto.TextSize.TEXT_SIZE_L) {
                 text = `\n## ${text}\n`;
             }
         }
         md += text + ' ';
     }
  }

  else if (attrs.attributeType === pb.optimization_guide.proto.ContentAttributeType.CONTENT_ATTRIBUTE_IMAGE && attrs.imageData) {
     const caption = attrs.imageData.imageCaption || 'image';
     const ref = `image${String(imageIndex++).padStart(2, '0')}`;
     md += `\n![${caption}][${ref}]\n`;
  }
  
  else if (attrs.attributeType === pb.optimization_guide.proto.ContentAttributeType.CONTENT_ATTRIBUTE_ANCHOR && attrs.anchorData) {
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
  if (attrs.annotatedRoles && ((attrs.annotatedRoles || []).includes(pb.optimization_guide.proto.AnnotatedRole.ANNOTATED_ROLE_NAV) || (attrs.annotatedRoles || []).includes(pb.optimization_guide.proto.AnnotatedRole.ANNOTATED_ROLE_FOOTER))) {
     return md; // Skip rendering kids of nav/footer
  }
  
  if (node.childrenNodes) {
    for (const child of node.childrenNodes) {
      md += toMarkdown(child);
    }
  }

  // add basic block spacing for container
  if (attrs.attributeType === pb.optimization_guide.proto.ContentAttributeType.CONTENT_ATTRIBUTE_CONTAINER) {
      md += '\n\n';
  }

  return md;
}

// Clean up newlines
export function cleanupMarkdown(md: string): string {
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
