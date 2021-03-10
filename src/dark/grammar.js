export const grammar = {
  WS: /[ \t]+/,
  comment: /\/\/.*?$/,
  number: /0|[1-9][0-9]*/,
  string: /"(?:\\["\\]|[^\n"\\])*"/,
  string2: /'(?:\\['\\]|[^\n'\\])*'/,
  lparen: "(",
  rparen: ")",
  lbrace: "{",
  rbrace: "}",
  lbracket: "[",
  rbracket: "]",

  // Functions
  function: "task",

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
