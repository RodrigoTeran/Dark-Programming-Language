function id(x) {
  return x[0];
}

const { lexer } = require("./lexer");
var grammar = {
  Lexer: lexer,
  ParserRules: [
    {
      name: "statements",
      symbols: ["statement"],
      postprocess: (data) => {
        return [data[0]];
      },
    },
    {
      name: "statements",
      symbols: [
        "statements",
        lexer.has("NL") ? { type: "NL" } : "NL",
        "statement",
      ],
      postprocess: (data) => {
        return [...data[0], data[2]];
      },
    },
    { name: "statement", symbols: ["input_assign"], postprocess: id },
    { name: "statement", symbols: ["fun_call"], postprocess: id },
    { name: "statement", symbols: ["var_assign"], postprocess: id },
    { name: "statement", symbols: ["_"], postprocess: id },
    {
      name: "input_assign",
      symbols: [
        lexer.has("identifier") ? { type: "identifier" } : "identifier",
        "_",
        lexer.has("assign") ? { type: "assign" } : "assign",
        "_",
        "input_fun",
        "_",
      ],
      postprocess: (data) => {
        return {
          type: "input_assign",
          var_name: data[0],
          value: data[4],
        };
      },
    },
    {
      name: "var_assign",
      symbols: [
        lexer.has("identifier") ? { type: "identifier" } : "identifier",
        "_",
        lexer.has("assign") ? { type: "assign" } : "assign",
        "_",
        "expr",
        "_",
      ],
      postprocess: (data) => {
        return {
          type: "var_assign",
          var_name: data[0],
          value: data[4],
        };
      },
    },
    {
      name: "input_fun$ebnf$1$subexpression$1",
      symbols: [lexer.has("string") ? { type: "string" } : "string"],
    },
    {
      name: "input_fun$ebnf$1$subexpression$1",
      symbols: [lexer.has("string2") ? { type: "string2" } : "string2", "_"],
    },
    {
      name: "input_fun$ebnf$1",
      symbols: ["input_fun$ebnf$1$subexpression$1"],
      postprocess: id,
    },
    {
      name: "input_fun$ebnf$1",
      symbols: [],
      postprocess: function (d) {
        return null;
      },
    },
    {
      name: "input_fun",
      symbols: [
        lexer.has("inputFunction")
          ? { type: "inputFunction" }
          : "inputFunction",
        lexer.has("lparen") ? { type: "lparen" } : "lparen",
        "_",
        "input_fun$ebnf$1",
        lexer.has("rparen") ? { type: "rparen" } : "rparen",
        "_",
      ],
      postprocess: (data) => {
        return {
          type: "input_fun",
          input: data[3] ? data[3][0] : "",
        };
      },
    },
    { name: "fun_call$ebnf$1$subexpression$1", symbols: ["arg_list", "_"] },
    {
      name: "fun_call$ebnf$1",
      symbols: ["fun_call$ebnf$1$subexpression$1"],
      postprocess: id,
    },
    {
      name: "fun_call$ebnf$1",
      symbols: [],
      postprocess: function (d) {
        return null;
      },
    },
    {
      name: "fun_call",
      symbols: [
        lexer.has("identifier") ? { type: "identifier" } : "identifier",
        lexer.has("lparen") ? { type: "lparen" } : "lparen",
        "_",
        "fun_call$ebnf$1",
        lexer.has("rparen") ? { type: "rparen" } : "rparen",
        "_",
      ],
      postprocess: (data) => {
        return {
          type: "fun_call",
          fun_name: data[0],
          arguments: data[3] ? data[3][0] : [],
        };
      },
    },
    {
      name: "arg_list",
      symbols: ["expr"],
      postprocess: (data) => {
        return [data[0]];
      },
    },
    {
      name: "arg_list",
      symbols: ["arg_list", "__", "expr"],
      postprocess: (data) => {
        return [...data[0], data[2]];
      },
    },
    { name: "list$ebnf$1$subexpression$1", symbols: ["arg_list", "_"] },
    {
      name: "list$ebnf$1",
      symbols: ["list$ebnf$1$subexpression$1"],
      postprocess: id,
    },
    {
      name: "list$ebnf$1",
      symbols: [],
      postprocess: function (d) {
        return null;
      },
    },
    {
      name: "list",
      symbols: [
        lexer.has("lbracket") ? { type: "lbracket" } : "lbracket",
        "_",
        "list$ebnf$1",
        lexer.has("rbracket") ? { type: "rbracket" } : "rbracket",
      ],
      postprocess: (data) => {
        return {
          type: "array",
          arguments: data[2] ? data[2][0] : [],
        };
      },
    },
    {
      name: "item_list$ebnf$1$subexpression$1",
      symbols: [lexer.has("number") ? { type: "number" } : "number"],
    },
    {
      name: "item_list$ebnf$1$subexpression$1",
      symbols: [
        lexer.has("identifier") ? { type: "identifier" } : "identifier",
      ],
    },
    {
      name: "item_list$ebnf$1",
      symbols: ["item_list$ebnf$1$subexpression$1"],
      postprocess: id,
    },
    {
      name: "item_list$ebnf$1",
      symbols: [],
      postprocess: function (d) {
        return null;
      },
    },
    {
      name: "item_list",
      symbols: [
        lexer.has("identifier") ? { type: "identifier" } : "identifier",
        lexer.has("lbracket") ? { type: "lbracket" } : "lbracket",
        "_",
        "item_list$ebnf$1",
        lexer.has("rbracket") ? { type: "rbracket" } : "rbracket",
      ],
      postprocess: (data) => {
        return {
          type: "array_item",
          array_name: data[0],
          item: data[3] ? data[3][0] : [],
        };
      },
    },
    {
      name: "expr",
      symbols: [lexer.has("string") ? { type: "string" } : "string"],
      postprocess: id,
    },
    {
      name: "expr",
      symbols: [lexer.has("string2") ? { type: "string2" } : "string2"],
      postprocess: id,
    },
    { name: "expr", symbols: ["item_list"], postprocess: id },
    {
      name: "expr",
      symbols: [lexer.has("true") ? { type: "true" } : true],
      postprocess: (data) => {
        return {
          type: "true",
          value: true,
        };
      },
    },
    {
      name: "expr",
      symbols: [lexer.has("false") ? { type: "false" } : false],
      postprocess: (data) => {
        return {
          type: "false",
          value: false,
        };
      },
    },
    {
      name: "expr",
      symbols: [lexer.has("number") ? { type: "number" } : "number"],
      postprocess: id,
    },
    {
      name: "expr",
      symbols: [
        lexer.has("identifier") ? { type: "identifier" } : "identifier",
      ],
      postprocess: id,
    },
    { name: "expr", symbols: ["fun_call"], postprocess: id },
    { name: "expr", symbols: ["list"], postprocess: id },
    { name: "_$ebnf$1", symbols: [] },
    {
      name: "_$ebnf$1",
      symbols: ["_$ebnf$1", lexer.has("WS") ? { type: "WS" } : "WS"],
      postprocess: function arrpush(d) {
        return d[0].concat([d[1]]);
      },
    },
    {
      name: "_",
      symbols: ["_$ebnf$1"],
      postprocess: (data) => {
        return {
          type: "empty_line",
        };
      },
    },
    { name: "__$ebnf$1", symbols: [lexer.has("WS") ? { type: "WS" } : "WS"] },
    {
      name: "__$ebnf$1",
      symbols: ["__$ebnf$1", lexer.has("WS") ? { type: "WS" } : "WS"],
      postprocess: function arrpush(d) {
        return d[0].concat([d[1]]);
      },
    },
    { name: "__", symbols: ["__$ebnf$1"] },
  ],
  ParserStart: "statements",
};
export default grammar;
