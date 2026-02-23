import fs from 'node:fs';
import * as pb from './proto/common_quality_data_pbjs.js';

type AnyNode = pb.optimization_guide.proto.IContentNode;

const data = JSON.parse(fs.readFileSync('../../test/fixtures/annotatedpagecontent_payload.json', 'utf8'));

function findNodeWithRole(node: AnyNode, targetRole: string): AnyNode | null {
  const attrs = node.contentAttributes || {};
  if (attrs.annotatedRoles && (attrs.annotatedRoles as unknown as string[]).includes(targetRole)) {
    return node;
  }
  
  if (node.childrenNodes) {
    for (const child of node.childrenNodes || []) {
      const found = findNodeWithRole(child, targetRole);
      if (found) return found;
    }
  }
  return null;
}

const articleNode = findNodeWithRole(data.rootNode, 'ANNOTATED_ROLE_ARTICLE') || findNodeWithRole(data.rootNode, 'ANNOTATED_ROLE_MAIN');

function printContent(node: AnyNode, depth = 0) {
  const attrs = node.contentAttributes || {};
  if (attrs.textData && attrs.textData.textContent) {
      const td = attrs.textData as unknown as { textSize?: string, textWeight?: string, isHeading?: boolean };
      console.log('  '.repeat(depth) + `TEXT [type=${attrs.attributeType} size=${td.textSize || 'DEFAULT'}, weight=${td.textWeight || 'DEFAULT'}, heading=${td.isHeading}]: ${attrs.textData.textContent}`);
  }
  
  if (attrs.imageData && (attrs.imageData as unknown as { src?: string }).src) {
      const id = attrs.imageData as unknown as { src?: string, altText?: string };
      console.log('  '.repeat(depth) + `IMAGE: ${id.src} [alt=${id.altText}]`);
  }

  if (attrs.anchorData && attrs.anchorData.url) {
      console.log('  '.repeat(depth) + `LINK: ${attrs.anchorData.url}`);
  }
  
  // if (attrs.annotatedRoles && attrs.annotatedRoles.length > 0) {
  //    console.log('  '.repeat(depth) + `ROLE: ${attrs.annotatedRoles.join(', ')}`);
  // }

  if (node.childrenNodes) {
    for (const child of node.childrenNodes) {
      printContent(child, depth + 1);
    }
  }
}

if (articleNode) {
  console.log('Found Article/Main node. Showing content:');
  printContent(articleNode);
} else {
  console.log('No Article or Main node found.');
}
