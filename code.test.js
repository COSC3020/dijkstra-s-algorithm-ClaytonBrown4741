const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');

var graph = {};
assert(JSON.stringify(initializeDAlgorithm(graph)) == JSON.stringify({}));

var graph1 = {'foo': {'boo': 10},
    'boo': {'d': 10},
    'd': {'e': 10},
    'e': {'bar': 10},
    'bar': {'foo': 2}};
assert(JSON.stringify(initializeDAlgorithm(graph1)) == JSON.stringify({ foo: 0, boo: 10, d: 20, e: 30, bar: 40 }));

var graph2 = {'foo': {}};
assert(JSON.stringify(initializeDAlgorithm(graph2)) == JSON.stringify({ foo: 0 }));

var graph3 = {'foo': {'boo': 10, 'd': 1, 'e': 2},
    'boo': {'d': 10},
    'd': {'e': 10},
    'e': {'bar': 10},
    'bar': {'foo': 2}};
assert(JSON.stringify(initializeDAlgorithm(graph3)) == JSON.stringify({ foo: 0, boo: 10, d: 1, e: 2, bar: 12 }));
