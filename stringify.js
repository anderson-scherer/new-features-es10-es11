/*
 * Well Formed Json
 * Subsume JSON
 */

// Now
JSON.stringify("\uD800");
// Before: '"�"'
// After: '"\\ud800"'

// A string containing the line separator
const LineSeparator = eval('"\u2028"');
// ES2018: SyntaxError
// ES2019: no exception

// A string containing the paragraph separator
const ParagraphSeparator = eval('"\u2029"');
// ES2018: SyntaxError
// ES2019: no exception
