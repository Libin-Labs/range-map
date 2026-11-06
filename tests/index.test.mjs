import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('maps interval midpoint', () => {
  assert.equal(api.mapRange(5, 0, 10, 0, 100), 50);
});
test('maps endpoints', () => {
  assert.equal(api.mapRange(0, 0, 10, 1, 2), 1);
  assert.equal(api.mapRange(10, 0, 10, 1, 2), 2);
});
test('supports reversed output interval', () => {
  assert.equal(api.mapRange(5, 0, 10, 10, 0), 5);
});
test('extrapolates without clamp', () => {
  assert.equal(api.mapRange(12, 0, 10, 0, 100), 120);
});
test('clamps normalized input', () => {
  assert.equal(api.mapRange(12, 0, 10, 0, 100, true), 100);
});
test('rejects zero-width source', () => {
  assert.throws(() => api.mapRange(1, 2, 2, 0, 1), RangeError);
});
