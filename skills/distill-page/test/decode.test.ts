import test from 'node:test';
import assert from 'node:assert';
import * as pb from '../proto/common_quality_data_pbjs.js';
import {decodeAnnotatedPageContent, convertToMarkdown} from '../distill-page.ts';

test('Decoding base64 string into AnnotatedPageContent object', () => {
  const payload = {
    version: 1,
    rootNode: {},
  };

  const errMsg = pb.optimization_guide.proto.AnnotatedPageContent.verify(payload);
  assert.ifError(errMsg);

  const message = pb.optimization_guide.proto.AnnotatedPageContent.create(payload);
  const buffer = pb.optimization_guide.proto.AnnotatedPageContent.encode(message).finish();
  const base64 = Buffer.from(buffer).toString('base64');

  const decoded = decodeAnnotatedPageContent(base64);

  assert.strictEqual(decoded.version, 1); // Note default decoded might be string
  assert.ok(decoded.rootNode !== undefined);
});

test('convertToMarkdown adds newlines around headlines', () => {
  const payload = {
    rootNode: {
      childrenNodes: [
        {
          contentAttributes: {
            attributeType: pb.optimization_guide.proto.ContentAttributeType.CONTENT_ATTRIBUTE_TEXT,
            textData: {textContent: 'Before headline'},
          },
        },
        {
          contentAttributes: {
            attributeType: pb.optimization_guide.proto.ContentAttributeType.CONTENT_ATTRIBUTE_TEXT,
            textData: {
              textContent: 'Headline Text',
              textStyle: {
                textSize: pb.optimization_guide.proto.TextSize.TEXT_SIZE_XL,
              },
            },
          },
        },
        {
          contentAttributes: {
            attributeType: pb.optimization_guide.proto.ContentAttributeType.CONTENT_ATTRIBUTE_TEXT,
            textData: {textContent: 'After headline'},
          },
        },
      ],
    },
  };

  const message = pb.optimization_guide.proto.AnnotatedPageContent.create(payload);
  const buffer = pb.optimization_guide.proto.AnnotatedPageContent.encode(message).finish();
  const base64 = Buffer.from(buffer).toString('base64');

  const decoded = decodeAnnotatedPageContent(base64);
  const md = convertToMarkdown(decoded);

  const expected = 'Before headline\n\n## Headline Text\n\nAfter headline';
  assert.strictEqual(md, expected);
});
