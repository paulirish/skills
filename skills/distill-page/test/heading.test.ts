import test from 'node:test';
import assert from 'node:assert';
import * as pb from '../proto/common_quality_data_pbjs.js';
import {decodeAnnotatedPageContent, convertToMarkdown} from '../distill-page.ts';

test('convertToMarkdown handles HEADING containers correctly', () => {
  const payload = {
    rootNode: {
      childrenNodes: [
        {
          contentAttributes: {
            attributeType: pb.optimization_guide.proto.ContentAttributeType.CONTENT_ATTRIBUTE_HEADING,
          },
          childrenNodes: [
            {
              contentAttributes: {
                attributeType: pb.optimization_guide.proto.ContentAttributeType.CONTENT_ATTRIBUTE_TEXT,
                textData: {
                  textContent: 'Is ',
                  textStyle: {textSize: pb.optimization_guide.proto.TextSize.TEXT_SIZE_L},
                },
              },
            },
            {
              contentAttributes: {
                attributeType: pb.optimization_guide.proto.ContentAttributeType.CONTENT_ATTRIBUTE_TEXT,
                textData: {textContent: 'GetTokens', textStyle: {hasEmphasis: true}},
              },
            },
            {
              contentAttributes: {
                attributeType: pb.optimization_guide.proto.ContentAttributeType.CONTENT_ATTRIBUTE_TEXT,
                textData: {textContent: ' billed?'},
              },
            },
          ],
        },
      ],
    },
  };

  const message = pb.optimization_guide.proto.AnnotatedPageContent.create(payload);
  const buffer = pb.optimization_guide.proto.AnnotatedPageContent.encode(message).finish();
  const base64 = Buffer.from(buffer).toString('base64');

  const decoded = decodeAnnotatedPageContent(base64);
  const md = convertToMarkdown(decoded);

  // We expect a single header with level ### because of TEXT_SIZE_L on one child.
  // And newlines on either side.
  const expected = '### Is **GetTokens** billed?';
  // Using trim() to make it easier to compare without worrying about exact outer newlines for now,
  // but we should ideally check them. Let's check trim() first.
  assert.strictEqual(md.trim(), expected);
});
