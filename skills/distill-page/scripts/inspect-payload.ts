import fs from 'node:fs';

const data = JSON.parse(fs.readFileSync('../../test/fixtures/annotatedpagecontent_payload.json', 'utf8'));

function findNodeWithRole(node, targetRole) {
  const attrs = node.contentAttributes || {};
  if (attrs.annotatedRoles && attrs.annotatedRoles.includes(targetRole)) {
    return node;
  }
  
  if (node.childrenNodes) {
    for (const child of node.childrenNodes) {
      const found = findNodeWithRole(child, targetRole);
      if (found) return found;
    }
  }
  return null;
}

const articleNode = findNodeWithRole(data.rootNode, 'ANNOTATED_ROLE_ARTICLE') || findNodeWithRole(data.rootNode, 'ANNOTATED_ROLE_MAIN');

function printContent(node, depth = 0) {
  const attrs = node.contentAttributes || {};
  if (attrs.textData && attrs.textData.textContent) {
      console.log('  '.repeat(depth) + `TEXT [type=${attrs.attributeType} size=${attrs.textData.textSize || 'DEFAULT'}, weight=${attrs.textData.textWeight || 'DEFAULT'}, heading=${attrs.textData.isHeading}]: ${attrs.textData.textContent}`);
  }
  
  if (attrs.imageData && attrs.imageData.src) {
      console.log('  '.repeat(depth) + `IMAGE: ${attrs.imageData.src} [alt=${attrs.imageData.altText}]`);
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
