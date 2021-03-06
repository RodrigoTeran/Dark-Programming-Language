export const grammar = {
  WS: /[ \t]+/,
  comment: /\/#[ \t]*?\b(?:\\["\\]|[^\n"\\]|\\|")+\b/,

  number: /-?(?:[0-9]|[1-9][0-9]+)(?:\.[0-9]+)?(?:[eE][-+]?[0-9]+)?\b/,

  string: /"(?:\\["\\]|[^\n"\\])*"/,
  string2: /'(?:\\['\\]|[^\n'\\])*'/,
  lparen: "(",
  rparen: ")",
  lbrace: "{",
  rbrace: "}",
  lbracket: "[",
  rbracket: "]",

  // Variables
  identifier: /[a-zA-Z][a-zA-Z_0-9]*/,
  arrow: "->",
  thickArrow: "=>",

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
