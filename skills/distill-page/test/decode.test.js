import test from 'node:test';
import assert from 'node:assert';
import pb from '../utils/distiller/common_quality_data_pbjs.js';
import { decodeAnnotatedPageContent } from '../utils/distiller/distill-page.js';

test('Decoding base64 string into AnnotatedPageContent object', () => {
  const payload = {
    version: 1,
    rootNode: {}
  };

  const errMsg = pb.optimization_guide.proto.AnnotatedPageContent.verify(payload);
  assert.ifError(errMsg);
  
  const message = pb.optimization_guide.proto.AnnotatedPageContent.create(payload);
  const buffer = pb.optimization_guide.proto.AnnotatedPageContent.encode(message).finish();
  const base64 = buffer.toString('base64');
  
  const decoded = decodeAnnotatedPageContent(base64);
  
  assert.strictEqual(decoded.version, 'ANNOTATED_PAGE_CONTENT_VERSION_1_0'); // Note default decoded might be string
  assert.ok(decoded.rootNode !== undefined);
});
