var fs       = require('fs');
var path     = require('path');
var tape     = require('tape');
var stripBOM = require('../');

tape.test('Strips BOM from string', function(t)
{
  t.plan(2);

  var filename = path.join(__dirname, 'fixture-utf8');
  var content  = fs.readFileSync(filename, 'utf8');
  var stripped = stripBOM(content);

  t.equal(stripped, 'Unicorn\n', 'expect not to have BOM');
  // sanity check
  t.notEqual(stripped, content, 'expect input to be different from the result');
});

tape.test('Strips BOM only from the beginning of a file', function(t)
{
  t.plan(1);

  var filename = path.join(__dirname, 'fixture-utf8-bom-middle');
  var content = fs.readFileSync(filename, 'utf8');
  var stripped = stripBOM(content);

  t.equal(stripped, content, 'expect it to be the same with input');
});

tape.test('Throws on non-string values', function(t)
{
  t.plan(1);

  var input = new String('Boom');

  t.throws(function()
  {
    stripBOM(input);
  }, /TypeError: Expected a string, got object/, 'expect it to throw TypeError');
});
