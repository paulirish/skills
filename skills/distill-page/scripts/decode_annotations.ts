import { fromBinary } from "@bufbuild/protobuf";
import {
  AnnotatedPageContentSchema,
  AnnotatedRole,
  ContentAttributeType,
  TextSize,
  TableRowType
} from './proto/common_quality_data_pb.js';
import type { 
  ContentNode, 
  AnnotatedPageContent, 
  ContentAttributes,
  TextInfo,
  ImageInfo,
  AnchorData,
  TableData
} from './proto/common_quality_data_pb.js';

function normalizeWhitespace(text: string): string {
  return text.replace(/\s+/g, ' ').trim();
}

const {
  CONTENT_ATTRIBUTE_TEXT,
  CONTENT_ATTRIBUTE_IMAGE,
  CONTENT_ATTRIBUTE_ANCHOR,
  CONTENT_ATTRIBUTE_ORDERED_LIST,
  CONTENT_ATTRIBUTE_UNORDERED_LIST,
  CONTENT_ATTRIBUTE_TABLE,
  CONTENT_ATTRIBUTE_TABLE_ROW,
  CONTENT_ATTRIBUTE_HEADING,
  CONTENT_ATTRIBUTE_CONTAINER,
  CONTENT_ATTRIBUTE_PARAGRAPH
} = ContentAttributeType;

type AnyNode = ContentNode;
type IAnnotatedPageContent = AnnotatedPageContent;

// AST Types for Intermediate Representation, bridging with common_quality_data types
export interface ASTTextRun {
  type: 'text';
  text: string;
  style?: TextInfo['textStyle'];
}

export interface ASTImage {
  type: 'image';
  data: ImageInfo;
  isReference?: boolean;
  referenceId?: string;
}

export interface ASTLink {
  type: 'link';
  data: AnchorData;
  children: ASTInlineNode[];
}

export type ASTInlineNode = ASTTextRun | ASTLink | ASTImage;

export interface ASTParagraph {
  type: 'paragraph';
  children: ASTInlineNode[];
}

export interface ASTHeading {
  type: 'heading';
  level: number;
  children: ASTInlineNode[];
}

export interface ASTCodeBlock {
  type: 'codeblock';
  code: string;
  language?: string;
}

export interface ASTListItem {
  type: 'list-item';
  children: (ASTInlineNode | ASTBlockNode)[];
}

export interface ASTList {
  type: 'list';
  ordered: boolean;
  items: ASTListItem[];
}

export interface ASTTableCell {
  type: 'table-cell';
  header: boolean;
  children: ASTInlineNode[];
}

export interface ASTTableRow {
  type: 'table-row';
  cells: ASTTableCell[];
}

export interface ASTTable {
  type: 'table';
  data?: TableData;
  rows: ASTTableRow[];
}

export interface ASTCallout {
  type: 'callout';
  subtype: 'aside' | 'paid' | 'hidden';
  children: ASTBlockNode[];
}

export type ASTBlockNode = ASTParagraph | ASTHeading | ASTCodeBlock | ASTList | ASTTable | ASTCallout | ASTImage;

export interface ASTDocument {
  title?: string;
  children: ASTBlockNode[];
}

interface ParserState {
  imageCounter: { value: number };
  insideParagraph: boolean;
  insideHeading: boolean;
  insideAnchor: boolean;
  insideCodeBlock: boolean;
  currentUrl?: string | null;
}

export function decodeAnnotatedPageContent(base64String: string): IAnnotatedPageContent {
  const buffer = Buffer.from(base64String, 'base64');
  return fromBinary(AnnotatedPageContentSchema, buffer);
}

function findNodeByRoles(node: AnyNode, roles: AnnotatedRole[]): AnyNode | null {
  const attrs = node.contentAttributes;
  if (attrs?.annotatedRoles) {
    for (const r of roles) {
      if (attrs.annotatedRoles.includes(r)) {
        return node;
      }
    }
  }

  if (node.childrenNodes) {
    for (const child of node.childrenNodes) {
      const found = findNodeByRoles(child, roles);
      if (found) return found;
    }
  }
  return null;
}

function textSizeToHeadingLevel(size: number | undefined): number {
  if (size === TextSize.XL) return 2;
  if (size === TextSize.L) return 3;
  if (size === TextSize.M_DEFAULT) return 4;
  if (size === TextSize.S || size === TextSize.XS) return 5;
  return 2;
}

function isInlineNode(node: ASTBlockNode | ASTInlineNode): node is ASTInlineNode {
  return node.type === 'text' || node.type === 'link' || node.type === 'image';
}

function parseChildrenFlat(nodes: AnyNode[], state: ParserState): (ASTBlockNode | ASTInlineNode)[] {
  const result: (ASTBlockNode | ASTInlineNode)[] = [];
  for (const child of nodes) {
    result.push(...parseNode(child, state));
  }
  return result;
}

function parseInlineChildren(nodes: AnyNode[], state: ParserState): ASTInlineNode[] {
  const flat = parseChildrenFlat(nodes, state);
  const inlines: ASTInlineNode[] = [];
  for (const item of flat) {
    if (isInlineNode(item)) {
      inlines.push(item);
    }
  }
  return inlines;
}

function parseChildren(nodes: AnyNode[], state: ParserState): ASTBlockNode[] {
  const blocks: ASTBlockNode[] = [];
  let inlineAccumulator: ASTInlineNode[] = [];

  const flushInlines = () => {
    if (inlineAccumulator.length > 0) {
      blocks.push({
        type: 'paragraph',
        children: [...inlineAccumulator],
      });
      inlineAccumulator = [];
    }
  };

  let activeCodeBlock: ASTCodeBlock | null = null;

  for (const child of nodes) {
    const childAttrs = child.contentAttributes;
    let isFence = false;
    if (childAttrs?.contentData.case === 'textData') {
      const text = childAttrs.contentData.value.textContent || '';
      isFence = text.includes('```');
    }

    if (isFence) {
      state.insideCodeBlock = !state.insideCodeBlock;
      if (state.insideCodeBlock) {
        flushInlines();
        activeCodeBlock = { type: 'codeblock', code: '' };
      } else {
        if (activeCodeBlock) {
          blocks.push(activeCodeBlock);
          activeCodeBlock = null;
        }
      }
      continue;
    }

    if (state.insideCodeBlock && activeCodeBlock) {
      if (childAttrs?.contentData.case === 'textData') {
        const text = childAttrs.contentData.value.textContent || '';
        activeCodeBlock.code += text;
      }
      continue;
    }

    const nodeState = { ...state };
    const items = parseNode(child, nodeState);

    for (const item of items) {
      if (
        item.type === 'paragraph' ||
        item.type === 'heading' ||
        item.type === 'codeblock' ||
        item.type === 'list' ||
        item.type === 'table' ||
        item.type === 'callout' ||
        item.type === 'image'
      ) {
        flushInlines();
        blocks.push(item);
      } else {
        inlineAccumulator.push(item);
      }
    }
  }

  flushInlines();
  if (activeCodeBlock) {
    blocks.push(activeCodeBlock);
  }

  return blocks;
}

function hasCodeFenceChild(node: AnyNode): boolean {
  if (!node.childrenNodes) return false;
  for (const child of node.childrenNodes) {
    const attrs = child.contentAttributes;
    if (attrs?.contentData.case === 'textData') {
      const text = attrs.contentData.value.textContent || '';
      if (text.includes('```')) {
        return true;
      }
    }
  }
  return false;
}

function isPermalinkText(text: string): boolean {
  const cleaned = text.trim().toLowerCase();
  if (!cleaned) return true;
  if (/^[#¶§🔗\s]+$/.test(cleaned)) return true;
  return cleaned === 'permalink' || cleaned === 'link';
}

function parseNode(node: AnyNode, state: ParserState): (ASTBlockNode | ASTInlineNode)[] {
  const attrs = node.contentAttributes;
  if (!attrs) {
    if (node.childrenNodes) {
      if (hasCodeFenceChild(node)) {
        return parseChildren(node.childrenNodes, state);
      }
      return parseChildrenFlat(node.childrenNodes, state);
    }
    return [];
  }

  if (attrs.isAdRelated) {
    return [];
  }

  const roles = attrs.annotatedRoles || [];
  if (roles.includes(AnnotatedRole.NAV) || roles.includes(AnnotatedRole.FOOTER)) {
    return [];
  }

  const hasPaid = roles.includes(AnnotatedRole.PAID_CONTENT);
  const hasHidden = roles.includes(AnnotatedRole.CONTENT_HIDDEN);
  const hasAside = roles.includes(AnnotatedRole.ASIDE);

  if (hasPaid || hasHidden || hasAside) {
    const subtype = hasPaid ? 'paid' : hasHidden ? 'hidden' : 'aside';
    const childState = {
      ...state,
      insideParagraph: false,
      insideHeading: false,
    };
    const blockChildren = parseChildren(node.childrenNodes || [], childState);
    if (blockChildren.length > 0) {
      const callout: ASTCallout = {
        type: 'callout',
        subtype,
        children: blockChildren,
      };
      return [callout];
    }
    return [];
  }

  if (attrs.contentData.case === 'textData') {
    const textData = attrs.contentData.value;
    const text = textData.textContent || '';
    const isCodeFence = text.includes('```');

    if (isCodeFence) {
      state.insideCodeBlock = !state.insideCodeBlock;
      return [];
    }

    if (state.insideCodeBlock) {
      return [];
    }

    const trimmed = text.trim();
    if (!trimmed) {
      return [];
    }

    const bold = !!(textData.textStyle?.hasEmphasis && text !== '`' && !state.insideHeading);

    const size = textData.textStyle?.textSize;
    if ((size === TextSize.XL || size === TextSize.L) && !state.insideHeading && !state.insideParagraph) {
      const headingTextRun: ASTTextRun = { 
        type: 'text', 
        text: trimmed, 
        style: textData.textStyle ? { ...textData.textStyle, hasEmphasis: bold } : undefined,
      };
      const level = textSizeToHeadingLevel(size);
      const headingBlock: ASTHeading = {
        type: 'heading',
        level,
        children: [headingTextRun],
      };
      return [headingBlock];
    }

    const run: ASTTextRun = { 
      type: 'text', 
      text: trimmed, 
      style: textData.textStyle ? { ...textData.textStyle, hasEmphasis: bold } : undefined 
    };
    return [run];
  }

  if (attrs.contentData.case === 'imageData') {
    const imageData = attrs.contentData.value;
    let referenceId = undefined;
    let isReference = false;
    if (!imageData.url) {
      referenceId = `image${String(state.imageCounter.value++).padStart(2, '0')}`;
      isReference = true;
    }
    const img: ASTImage = {
      type: 'image',
      data: imageData,
      isReference,
      referenceId,
    };
    return [img];
  }

  if (attrs.contentData.case === 'anchorData') {
    const anchorData = attrs.contentData.value;
    const url = anchorData.url || '';
    let resolvedUrl = url;
    if (state.currentUrl && url.startsWith(state.currentUrl + '#')) {
      resolvedUrl = url.substring(state.currentUrl.length);
    }

    const childState = { ...state, insideAnchor: true };
    const inlineChildren = parseInlineChildren(node.childrenNodes || [], childState);
    if (inlineChildren.length > 0 && resolvedUrl) {
      if (state.insideHeading && resolvedUrl.startsWith('#')) {
        const combinedText = inlineChildren.map(c => c.type === 'text' ? c.text : '').join('');
        if (isPermalinkText(combinedText)) {
          return [];
        }
        return inlineChildren;
      }

      const link: ASTLink = {
        type: 'link',
        data: { ...anchorData, url: resolvedUrl },
        children: inlineChildren,
      };
      return [link];
    }
    return [];
  }

  if (attrs.attributeType === CONTENT_ATTRIBUTE_PARAGRAPH) {
    const childState = { ...state, insideParagraph: true };
    const inlineChildren = parseInlineChildren(node.childrenNodes || [], childState);
    if (inlineChildren.length > 0) {
      const p: ASTParagraph = {
        type: 'paragraph',
        children: inlineChildren,
      };
      return [p];
    }
    return [];
  }

  if (attrs.attributeType === CONTENT_ATTRIBUTE_HEADING) {
    const childState = { ...state, insideHeading: true };
    const inlineChildren = parseInlineChildren(node.childrenNodes || [], childState);
    if (inlineChildren.length > 0) {
      let maxTextSize = TextSize.M_DEFAULT;
      if (node.childrenNodes) {
        for (const child of node.childrenNodes) {
          const childAttrs = child.contentAttributes;
          if (childAttrs?.contentData.case === 'textData') {
            const sz = childAttrs.contentData.value.textStyle?.textSize;
            if (sz !== undefined && sz > maxTextSize) {
              maxTextSize = sz;
            }
          }
        }
      }
      const level = textSizeToHeadingLevel(maxTextSize);
      const h: ASTHeading = {
        type: 'heading',
        level,
        children: inlineChildren,
      };
      return [h];
    }
    return [];
  }

  if (attrs.attributeType === CONTENT_ATTRIBUTE_ORDERED_LIST || attrs.attributeType === CONTENT_ATTRIBUTE_UNORDERED_LIST) {
    const ordered = attrs.attributeType === CONTENT_ATTRIBUTE_ORDERED_LIST;
    const items: ASTListItem[] = [];
    if (node.childrenNodes) {
      for (const itemNode of node.childrenNodes) {
        const childState = { ...state, insideParagraph: false };
        const itemChildren = parseChildren(itemNode.childrenNodes || [itemNode], childState);
        if (itemChildren.length > 0) {
          items.push({
            type: 'list-item',
            children: itemChildren,
          });
        }
      }
    }
    if (items.length > 0) {
      const list: ASTList = {
        type: 'list',
        ordered,
        items,
      };
      return [list];
    }
    return [];
  }

  if (attrs.attributeType === CONTENT_ATTRIBUTE_TABLE) {
    const tableData = attrs.contentData.case === 'tableData' ? attrs.contentData.value : undefined;
    const rows: ASTTableRow[] = [];
    if (node.childrenNodes) {
      for (const rowNode of node.childrenNodes) {
        const rowAttrs = rowNode.contentAttributes;
        if (!rowAttrs || rowAttrs.attributeType !== CONTENT_ATTRIBUTE_TABLE_ROW) continue;

        const cells: ASTTableCell[] = [];
        if (rowNode.childrenNodes) {
          for (const cellNode of rowNode.childrenNodes) {
            const childState = { ...state, insideParagraph: true };
            const cellInlines = parseInlineChildren(cellNode.childrenNodes || [], childState);
            const rowType = rowAttrs.contentData.case === 'tableRowData' ? rowAttrs.contentData.value.type : undefined;
            const header = rowType === TableRowType.HEADER;
            cells.push({
              type: 'table-cell',
              header,
              children: cellInlines,
            });
          }
        }
        rows.push({
          type: 'table-row',
          cells,
        });
      }
    }
    if (rows.length > 0) {
      const table: ASTTable = {
        type: 'table',
        data: tableData,
        rows,
      };
      return [table];
    }
    return [];
  }

  if (node.childrenNodes) {
    if (hasCodeFenceChild(node)) {
      return parseChildren(node.childrenNodes, state);
    }
    return parseChildrenFlat(node.childrenNodes, state);
  }

  return [];
}

function serializeImage(node: ASTImage): string {
  const caption = node.data.imageCaption || 'image';
  if (node.isReference) {
    return `![${caption}][${node.referenceId}]`;
  }
  return `![${caption}](${node.data.url || ''})`;
}

function serializeInline(node: ASTInlineNode): string {
  if (node.type === 'text') {
    let text = node.text;
    if (node.style?.hasEmphasis) {
      text = `**${text}**`;
    }
    return text;
  }
  if (node.type === 'link') {
    const linkText = node.children.map(serializeInline).join('').trim();
    if (linkText && node.data.url) {
      return `[${linkText}](${node.data.url})`;
    }
    return linkText;
  }
  if (node.type === 'image') {
    return serializeImage(node);
  }
  return '';
}

function serializeInlineChildren(children: ASTInlineNode[]): string {
  let md = '';
  for (let i = 0; i < children.length; i++) {
    const child = children[i];
    const chunk = serializeInline(child);
    if (!chunk) continue;

    if (md.length > 0) {
      const startsWithPunc = /^[.,!?;:)]/.test(chunk) && !chunk.startsWith('![');
      const endsWithSkip = /[(\s]/.test(md[md.length - 1]);
      if (!startsWithPunc && !endsWithSkip) {
        md += ' ';
      }
    }
    md += chunk;
  }
  return md.trim();
}

function serializeBlock(node: ASTBlockNode): string {
  if (node.type === 'paragraph') {
    return serializeInlineChildren(node.children);
  }

  if (node.type === 'heading') {
    const levelHashes = '#'.repeat(node.level);
    const content = serializeInlineChildren(node.children);
    return `${levelHashes} ${content}`;
  }

  if (node.type === 'codeblock') {
    let code = node.code;
    if (!code.endsWith('\n')) {
      code += '\n';
    }
    return `\`\`\`\n${code}\`\`\``;
  }

  if (node.type === 'list') {
    let md = '';
    let index = 1;
    for (const item of node.items) {
      const content = item.children.map(child => {
        if (child.type === 'paragraph') {
          return serializeInlineChildren(child.children);
        }
        if (child.type === 'text' || child.type === 'link') {
          return serializeInline(child);
        }
        return serializeBlock(child as ASTBlockNode);
      }).join('\n').trim();

      const prefix = node.ordered ? `${index}. ` : '* ';
      const indentedContent = content.split('\n').map((line, i) => {
        if (i === 0) return line;
        return '  ' + line;
      }).join('\n');

      md += `${prefix}${indentedContent}\n`;
      index++;
    }
    return md;
  }

  if (node.type === 'table') {
    let md = '';
    if (node.data?.tableName) {
      md += `**Table: ${node.data.tableName}**\n\n`;
    }
    for (let r = 0; r < node.rows.length; r++) {
      const row = node.rows[r];
      let rowText = '|';
      let sepText = '|';
      for (const cell of row.cells) {
        const cellText = serializeInlineChildren(cell.children);
        rowText += ` ${cellText} |`;
        sepText += '---|';
      }
      md += rowText + '\n';
      if (r === 0) {
        md += sepText + '\n';
      }
    }
    return md;
  }

  if (node.type === 'image') {
    return serializeImage(node);
  }

  if (node.type === 'callout') {
    const childrenMd = node.children.map(serializeBlock).join('\n\n').trim();
    if (!childrenMd) return '';

    if (node.subtype === 'aside') {
      return `<aside>\n\n${childrenMd}\n</aside>`;
    }
    if (node.subtype === 'hidden') {
      return `<details><summary>Collapsed Content</summary>\n\n${childrenMd}\n</details>`;
    }
    if (node.subtype === 'paid') {
      return `> [!IMPORTANT]\n> **Paid Content**: The following section is behind a paywall.\n\n${childrenMd}`;
    }
  }

  return '';
}

export function serializeASTToMarkdown(ast: ASTDocument): string {
  let md = '';
  if (ast.title) {
    md += `# ${ast.title}\n\n`;
  }

  const blocksMd = ast.children.map(serializeBlock).filter(Boolean);
  md += blocksMd.join('\n\n');

  md = md
    .replace(/\n{3,}/g, '\n\n')
    .replace(/ \n/g, '\n')
    .replace(/`[ \t]*([^`\n]*?)[ \t]*`/g, '`$1`');

  return md.trim();
}

export function parseProtoToAST(decodedProto: IAnnotatedPageContent): ASTDocument {
  const root = decodedProto.rootNode;
  if (!root) return { children: [] };

  const contentRoot =
    findNodeByRoles(root, [AnnotatedRole.ARTICLE, AnnotatedRole.MAIN]) || root;

  const state: ParserState = {
    imageCounter: { value: 1 },
    insideParagraph: false,
    insideHeading: false,
    insideAnchor: false,
    insideCodeBlock: false,
    currentUrl: decodedProto.mainFrameData?.url,
  };

  const children = parseChildren([contentRoot], state);
  return {
    title: decodedProto.mainFrameData?.title || undefined,
    children,
  };
}

export function convertToMarkdown(decodedProto: IAnnotatedPageContent): string {
  const ast = parseProtoToAST(decodedProto);
  return serializeASTToMarkdown(ast);
}
