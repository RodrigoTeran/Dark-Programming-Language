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
    { name: "statement", symbols: ["task_function"], postprocess: id },
    { name: "statement", symbols: ["_"], postprocess: id },
    {
      name: "statementsFunction",
      symbols: ["statementFunction"],
      postprocess: (data) => {
        return [data[0]];
      },
    },
    {
      name: "statementsFunction",
      symbols: [
        "statementsFunction",
        lexer.has("NL") ? { type: "NL" } : "NL",
        "statementFunction",
      ],
      postprocess: (data) => {
        return [...data[0], data[2]];
      },
    },
    {
      name: "statementFunction",
      symbols: ["_", "fun_call"],
      postprocess: (data) => {
        return data[1];
      },
    },
    {
      name: "statementFunction",
      symbols: ["_", "var_assign"],
      postprocess: (data) => {
        return data[1];
      },
    },
    {
      name: "statementFunction",
      symbols: ["_", "task_function"],
      postprocess: (data) => {
        return data[1];
      },
    },
    {
      name: "statementFunction$ebnf$1$subexpression$1",
      symbols: [lexer.has("string") ? { type: "string" } : "string"],
    },
    {
      name: "statementFunction$ebnf$1$subexpression$1",
      symbols: [lexer.has("string2") ? { type: "string2" } : "string2"],
    },
    {
      name: "statementFunction$ebnf$1$subexpression$1",
      symbols: ["item_list"],
    },
    {
      name: "statementFunction$ebnf$1$subexpression$1",
      symbols: [{ literal: "WIN" }],
    },
    {
      name: "statementFunction$ebnf$1$subexpression$1",
      symbols: [{ literal: "FAIL" }],
    },
    {
      name: "statementFunction$ebnf$1$subexpression$1",
      symbols: [lexer.has("number") ? { type: "number" } : "number"],
    },
    {
      name: "statementFunction$ebnf$1$subexpression$1",
      symbols: [
        lexer.has("identifier") ? { type: "identifier" } : "identifier",
      ],
    },
    { name: "statementFunction$ebnf$1$subexpression$1", symbols: ["list"] },
    {
      name: "statementFunction$ebnf$1",
      symbols: ["statementFunction$ebnf$1$subexpression$1"],
      postprocess: id,
    },
    {
      name: "statementFunction$ebnf$1",
      symbols: [],
      postprocess: function (d) {
        return null;
      },
    },
    {
      name: "statementFunction",
      symbols: [
        "_",
        { literal: "return" },
        "_",
        lexer.has("thickArrow") ? { type: "thickArrow" } : "thickArrow",
        "_",
        "statementFunction$ebnf$1",
      ],
      postprocess: (data) => {
        return {
          type: "return",
          value: data[5] ? data[5][0] : false,
        };
      },
    },
    { name: "statementFunction", symbols: ["_"], postprocess: id },
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
      name: "input_fun$ebnf$1$subexpression$1",
      symbols: [lexer.has("string") ? { type: "string" } : "string"],
    },
    {
      name: "input_fun$ebnf$1$subexpression$1",
      symbols: [lexer.has("string2") ? { type: "string2" } : "string2"],
    },
    {
      name: "input_fun$ebnf$1$subexpression$1",
      symbols: [
        lexer.has("identifier") ? { type: "identifier" } : "identifier",
      ],
    },
    {
      name: "input_fun$ebnf$1$subexpression$1",
      symbols: [lexer.has("number") ? { type: "number" } : "number", "_"],
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
        { literal: "ask" },
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
      name: "task_function$ebnf$1$subexpression$1",
      symbols: ["param_list", "_"],
    },
    {
      name: "task_function$ebnf$1",
      symbols: ["task_function$ebnf$1$subexpression$1"],
      postprocess: id,
    },
    {
      name: "task_function$ebnf$1",
      symbols: [],
      postprocess: function (d) {
        return null;
      },
    },
    {
      name: "task_function",
      symbols: [
        { literal: "task" },
        "_",
        lexer.has("arrow") ? { type: "arrow" } : "arrow",
        "_",
        lexer.has("identifier") ? { type: "identifier" } : "identifier",
        lexer.has("lparen") ? { type: "lparen" } : "lparen",
        "_",
        "task_function$ebnf$1",
        lexer.has("rparen") ? { type: "rparen" } : "rparen",
        "_",
        "task_body",
      ],
      postprocess: (data) => {
        return {
          type: "task",
          parameters: data[7] ? data[7][0] : [],
          body: data[10],
          identifierName: data[4],
        };
      },
    },
    {
      name: "task_body",
      symbols: [
        lexer.has("lbrace") ? { type: "lbrace" } : "lbrace",
        "_",
        lexer.has("NL") ? { type: "NL" } : "NL",
        "statementsFunction",
        lexer.has("NL") ? { type: "NL" } : "NL",
        "_",
        lexer.has("rbrace") ? { type: "rbrace" } : "rbrace",
      ],
      postprocess: (data) => {
        return data[3];
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
    {
      name: "param_list",
      symbols: [
        lexer.has("identifier") ? { type: "identifier" } : "identifier",
      ],
      postprocess: (data) => {
        return [data[0]];
      },
    },
    {
      name: "param_list",
      symbols: [
        "param_list",
        "__",
        lexer.has("identifier") ? { type: "identifier" } : "identifier",
      ],
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
      symbols: [{ literal: "WIN" }],
      postprocess: (data) => {
        return {
          type: "true",
          value: true,
        };
      },
    },
    {
      name: "expr",
      symbols: [{ literal: "FAIL" }],
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
