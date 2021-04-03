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
    { name: "statement", symbols: ["comments"], postprocess: id },
    { name: "statement", symbols: ["if_statement"], postprocess: id },
    { name: "statement", symbols: ["while_loop"], postprocess: id },
    { name: "statement", symbols: ["for_loop"], postprocess: id },
    { name: "statement", symbols: ["elseIf_statement"], postprocess: id },
    { name: "statement", symbols: ["else_statement"], postprocess: id },
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
      name: "statementsOperators",
      symbols: ["statementOperator"],
      postprocess: (data) => {
        return [data[0]];
      },
    },
    {
      name: "statementsOperators",
      symbols: [
        "statementsOperators",
        lexer.has("NL") ? { type: "NL" } : "NL",
        "statementOperator",
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
    { name: "statementFunction", symbols: ["comments"], postprocess: id },
    {
      name: "statementFunction",
      symbols: ["_", "if_statement"],
      postprocess: (data) => {
        return data[1];
      },
    },
    {
      name: "statementFunction",
      symbols: ["_", "while_loop"],
      postprocess: (data) => {
        return data[1];
      },
    },
    {
      name: "statementFunction",
      symbols: ["_", "for_loop"],
      postprocess: (data) => {
        return data[1];
      },
    },
    {
      name: "statementFunction",
      symbols: ["_", "elseIf_statement"],
      postprocess: (data) => {
        return data[1];
      },
    },
    {
      name: "statementFunction",
      symbols: ["_", "else_statement"],
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
      symbols: ["expr_return"],
    },
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
        "_",
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
      name: "statementOperator",
      symbols: ["_", "fun_call"],
      postprocess: (data) => {
        return data[1];
      },
    },
    {
      name: "statementOperator",
      symbols: ["_", "var_assign"],
      postprocess: (data) => {
        return data[1];
      },
    },
    { name: "statementOperator", symbols: ["comments"], postprocess: id },
    {
      name: "statementOperator",
      symbols: ["_", "if_statement"],
      postprocess: (data) => {
        return data[1];
      },
    },
    {
      name: "statementOperator",
      symbols: ["_", "while_loop"],
      postprocess: (data) => {
        return data[1];
      },
    },
    {
      name: "statementOperator",
      symbols: ["_", "for_loop"],
      postprocess: (data) => {
        return data[1];
      },
    },
    {
      name: "statementOperator",
      symbols: ["_", "elseIf_statement"],
      postprocess: (data) => {
        return data[1];
      },
    },
    {
      name: "statementOperator",
      symbols: ["_", "else_statement"],
      postprocess: (data) => {
        return data[1];
      },
    },
    {
      name: "statementOperator",
      symbols: ["_", "task_function"],
      postprocess: (data) => {
        return data[1];
      },
    },
    { name: "statementOperator", symbols: ["_"], postprocess: id },
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
        "_",
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
      name: "while_loop",
      symbols: [
        { literal: "period" },
        "_",
        lexer.has("arrow") ? { type: "arrow" } : "arrow",
        "comparisonsNearley",
        "operators_body",
        "_",
      ],
      postprocess: (data) => {
        return {
          type: "whileLoop",
          comparisons: data[3],
          body: data[4],
        };
      },
    },
    {
      name: "for_loop",
      symbols: [
        { literal: "from" },
        "_",
        lexer.has("arrow") ? { type: "arrow" } : "arrow",
        "for_looping_options",
        "operators_body",
        "_",
      ],
      postprocess: (data) => {
        return {
          type: "forLoop",
          options: data[3],
          body: data[4],
        };
      },
    },
    {
      name: "if_statement",
      symbols: [
        { literal: "assuming" },
        "_",
        lexer.has("arrow") ? { type: "arrow" } : "arrow",
        "comparisonsNearley",
        "operators_body",
        "_",
      ],
      postprocess: (data) => {
        return {
          type: "ifStatement",
          comparisons: data[3],
          body: data[4],
        };
      },
    },
    {
      name: "elseIf_statement",
      symbols: [
        { literal: "differentAssumption" },
        "_",
        lexer.has("arrow") ? { type: "arrow" } : "arrow",
        "comparisonsNearley",
        "operators_body",
        "_",
      ],
      postprocess: (data) => {
        return {
          type: "elseIfStatement",
          comparisons: data[3],
          body: data[4],
        };
      },
    },
    {
      name: "else_statement",
      symbols: [
        { literal: "different" },
        "_",
        lexer.has("arrow") ? { type: "arrow" } : "arrow",
        "_",
        "operators_body",
        "_",
      ],
      postprocess: (data) => {
        return {
          type: "elseStatement",
          body: data[4],
        };
      },
    },
    {
      name: "operators_body",
      symbols: [
        lexer.has("lbrace") ? { type: "lbrace" } : "lbrace",
        "_",
        lexer.has("NL") ? { type: "NL" } : "NL",
        "statementsOperators",
        lexer.has("NL") ? { type: "NL" } : "NL",
        "_",
        lexer.has("rbrace") ? { type: "rbrace" } : "rbrace",
        "_",
      ],
      postprocess: (data) => {
        return data[3];
      },
    },
    {
      name: "comments",
      symbols: [
        "_",
        lexer.has("comment") ? { type: "comment" } : "comment",
        "_",
      ],
      postprocess: (data) => {
        return {
          type: "comment",
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
        "_",
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
        "_",
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
        "_",
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
    {
      name: "expr_return",
      symbols: [lexer.has("string") ? { type: "string" } : "string"],
      postprocess: id,
    },
    {
      name: "expr_return",
      symbols: [lexer.has("string2") ? { type: "string2" } : "string2"],
      postprocess: id,
    },
    { name: "expr_return", symbols: ["item_list"], postprocess: id },
    {
      name: "expr_return",
      symbols: [{ literal: "WIN" }],
      postprocess: (data) => {
        return {
          type: "true",
          value: true,
        };
      },
    },
    {
      name: "expr_return",
      symbols: [{ literal: "FAIL" }],
      postprocess: (data) => {
        return {
          type: "false",
          value: false,
        };
      },
    },
    {
      name: "expr_return",
      symbols: [lexer.has("number") ? { type: "number" } : "number"],
      postprocess: id,
    },
    {
      name: "expr_return",
      symbols: [
        lexer.has("identifier") ? { type: "identifier" } : "identifier",
      ],
      postprocess: id,
    },
    { name: "expr_return", symbols: ["list"], postprocess: id },
    {
      name: "booleanOperators",
      symbols: [{ literal: "and" }],
      postprocess: (data) => {
        return {
          type: "booleanOperator",
          value: "and",
        };
      },
    },
    {
      name: "booleanOperators",
      symbols: [{ literal: "or" }],
      postprocess: (data) => {
        return {
          type: "booleanOperator",
          value: "or",
        };
      },
    },
    {
      name: "noupBooleanOperator",
      symbols: [{ literal: "noup" }],
      postprocess: (data) => {
        return {
          type: "booleanOperator",
          value: "noup",
        };
      },
    },
    {
      name: "logicOperators",
      symbols: [lexer.has("equal") ? { type: "equal" } : "equal"],
      postprocess: id,
    },
    {
      name: "logicOperators",
      symbols: [lexer.has("notEqual") ? { type: "notEqual" } : "notEqual"],
      postprocess: id,
    },
    {
      name: "logicOperators",
      symbols: [
        lexer.has("greaterEqualThan")
          ? { type: "greaterEqualThan" }
          : "greaterEqualThan",
      ],
      postprocess: id,
    },
    {
      name: "logicOperators",
      symbols: [
        lexer.has("lowerEqualThan")
          ? { type: "lowerEqualThan" }
          : "lowerEqualThan",
      ],
      postprocess: id,
    },
    {
      name: "logicOperators",
      symbols: [
        lexer.has("greaterThan") ? { type: "greaterThan" } : "greaterThan",
      ],
      postprocess: id,
    },
    {
      name: "logicOperators",
      symbols: [lexer.has("lowerThan") ? { type: "lowerThan" } : "lowerThan"],
      postprocess: id,
    },
    {
      name: "comparison$ebnf$1$subexpression$1",
      symbols: ["noupBooleanOperator", "__"],
    },
    {
      name: "comparison$ebnf$1",
      symbols: ["comparison$ebnf$1$subexpression$1"],
      postprocess: id,
    },
    {
      name: "comparison$ebnf$1",
      symbols: [],
      postprocess: function (d) {
        return null;
      },
    },
    {
      name: "comparison",
      symbols: [
        "comparison$ebnf$1",
        "expr",
        "__",
        "logicOperators",
        "__",
        "expr",
      ],
      postprocess: (data) => {
        return {
          type: "comparison",
          firstExpr: data[1],
          secondExpr: data[5],
          logic: data[3],
          withNoup: data[0] ? true : false,
        };
      },
    },
    {
      name: "comparisons",
      symbols: ["comparison"],
      postprocess: (data) => {
        return [data[0]];
      },
    },
    {
      name: "comparisons",
      symbols: ["comparisons", "__", "booleanOperators", "__", "comparison"],
      postprocess: (data) => {
        return [...data[0], data[2], data[4]];
      },
    },
    {
      name: "comparisonsNearley",
      symbols: ["_", "comparisons", "_"],
      postprocess: (data) => {
        return {
          type: "comparisons",
          value: data[1],
        };
      },
    },
    {
      name: "for_looping_options",
      symbols: [
        "_",
        "expr",
        "__",
        { literal: "to" },
        "__",
        "expr",
        "__",
        { literal: "with" },
        "__",
        lexer.has("identifier") ? { type: "identifier" } : "identifier",
        "_",
      ],
      postprocess: (data) => {
        return {
          type: "forOptions",
          from: data[1],
          to: data[5],
          variable: data[9],
        };
      },
    },
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
