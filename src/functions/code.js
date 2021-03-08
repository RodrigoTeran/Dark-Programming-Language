import moo from "moo";
let lexer = moo.compile({
  WS: /[ \t]+/,
  comment: /\/\/.*?$/,
  number: /0|[1-9][0-9]*/,
  string: /"(?:\\["\\]|[^\n"\\])*"/,
  lparen: "(",
  rparen: ")",
  lbrace: "{",
  rbrace: "}",
  function: "do",
  identifier: /[a-zA-Z][a-zA-Z_0-9]*/,
  assign: "=",
  NL: { match: /\n/, lineBreaks: true },
});
export const codeToLexer = (code) => {
  lexer.reset(code);
  while (true) {
    const token = lexer.next();
    if (!token) {
      break;
    }
    console.log(token);
  }
};
