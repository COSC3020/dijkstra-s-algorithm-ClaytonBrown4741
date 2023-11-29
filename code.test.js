const fs = require('fs');
const assert = require('assert');
eval(fs.readFileSync('code.js')+'');
dm = {};
assert(JSON.stringify(initializeDAlgorithm(dm)) === JSON.stringify({}));
dm = {"a": [{}]};
assert(JSON.stringify(initializeDAlgorithm(dm)) == JSON.stringify({ a: 0}));
dm = {"a": [{ "node": "b", "weight": 10}],
      "b": [{ "node": "c", "weight": 10}],
      "c": [{ "node": "d", "weight": 10}],
      "d": [{ "node": "e", "weight": 10}],
      "e": [{ "node": "a", "weight": 10}]};
assert(JSON.stringify(initializeDAlgorithm(dm)) == JSON.stringify({ a: 0, b: 10, c: 20, d: 30, e: 40 }));
dm = {"a": [{ "node": "b", "weight": 10}],
      "b": [{ "node": "c", "weight": 10}],
      "c": [{ "node": "a", "weight": 10}],
      "d": [{ "node": "e", "weight": 10}],
      "e": [{ "node": "a", "weight": 10}]};
assert(JSON.stringify(initializeDAlgorithm(dm)) == JSON.stringify({ a: 0, b: 10, c: 20, d: Infinity, e: Infinity }));
dm = {"a": [{ "node": "b", "weight": 10}, { "node": "c", "weight": 1},{ "node": "e", "weight": 30}],
      "b": [{ "node": "c", "weight": 10}],
      "c": [{ "node": "d", "weight": 10}],
      "d": [{ "node": "e", "weight": 10}],
      "e": [{ "node": "a", "weight": 10}]};
assert(JSON.stringify(initializeDAlgorithm(dm)) == JSON.stringify({ a: 0, b: 10, c: 1, d: 30, e: 30 }));
