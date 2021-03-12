export const grammar = {
  WS: /[ \t]+/,
  comment: /\/\/.*?$/,

  number: /-?(?:[0-9]|[1-9][0-9]+)(?:\.[0-9]+)?(?:[eE][-+]?[0-9]+)?\b/,

  string: /"(?:\\["\\]|[^\n"\\])*"/,
  string2: /'(?:\\['\\]|[^\n'\\])*'/,
  lparen: "(",
  rparen: ")",
  lbrace: "{",
  rbrace: "}",
  lbracket: "[",
  rbracket: "]",

  // Boolean Values
  true: "WIN",
  false: "FAIL",

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
