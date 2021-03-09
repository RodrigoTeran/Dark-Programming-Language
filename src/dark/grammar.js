export const grammar = {
  WS: /[ \t]+/,
  comment: /\/\/.*?$/,
  number: /0|[1-9][0-9]*/,
  string: /"(?:\\["\\]|[^\n"\\])*"/,
  lparen: "(",
  rparen: ")",
  lbrace: "{",
  rbrace: "}",

  // Functions
  function: "task",

  // Built in functions
  print: "speak",
  break: "smash",

  // Loops
  forLoop: "from",
  whileLoop: "period",

  // Conditionals
  if: "supposing",
  else: "different",

  // Variables
  identifier: /[a-zA-Z][a-zA-Z_0-9]*/,

  // Logic Operators
  equal: "==",
  notEqual: "!=",
  greaterEqualThan: ">=",
  lowerEqualThan: "<=",
  greaterThan: ">",
  lowerThan: "<",
  assign: "=",
  NL: { match: /\n/, lineBreaks: true },
};
