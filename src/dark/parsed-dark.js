// Generated automatically by nearley, version 2.19.5
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }

  const { lexer } = require("./lexer");
var grammar = {
    Lexer: lexer,
    ParserRules: [
    {"name": "statements", "symbols": ["statement"], "postprocess": 
        (data) => {
          return [data[0]];
        }
              },
    {"name": "statements", "symbols": ["statements", (lexer.has("NL") ? {type: "NL"} : "NL"), "statement"], "postprocess": 
        (data) => {
          return [...data[0], data[2]];
        }
              },
    {"name": "statement", "symbols": ["var_assign"], "postprocess": id},
    {"name": "statement", "symbols": ["fun_call"], "postprocess": id},
    {"name": "var_assign", "symbols": [(lexer.has("identifier") ? {type: "identifier"} : "identifier"), "_", (lexer.has("assign") ? {type: "assign"} : "assign"), "_", "expr"], "postprocess": 
        (data) => {
          return {
            type: "var_assign",
            var_name: data[0],
            value: data[4],
          }
        }
              },
    {"name": "fun_call$ebnf$1$subexpression$1", "symbols": ["arg_list", "_"]},
    {"name": "fun_call$ebnf$1", "symbols": ["fun_call$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "fun_call$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "fun_call", "symbols": [(lexer.has("identifier") ? {type: "identifier"} : "identifier"), (lexer.has("lparen") ? {type: "lparen"} : "lparen"), "_", "fun_call$ebnf$1", (lexer.has("rparen") ? {type: "rparen"} : "rparen")], "postprocess": 
        (data) => {
          return {
            type: "fun_call",
            fun_name: data[0],
            arguments: data[3] ? data[3][0] : [],
          }
        }
              },
    {"name": "arg_list", "symbols": ["expr"], "postprocess": 
        (data) => {
          return [data[0]];
        }
              },
    {"name": "arg_list", "symbols": ["arg_list", "_", (lexer.has("comma") ? {type: "comma"} : "comma"), "_", "expr"], "postprocess": 
        (data) => {
          return [...data[0], data[4]];
        }
              },
    {"name": "expr", "symbols": [(lexer.has("string") ? {type: "string"} : "string")], "postprocess": id},
    {"name": "expr", "symbols": [(lexer.has("number") ? {type: "number"} : "number")], "postprocess": id},
    {"name": "expr", "symbols": [(lexer.has("identifier") ? {type: "identifier"} : "identifier")], "postprocess": id},
    {"name": "expr", "symbols": ["fun_call"], "postprocess": id},
    {"name": "_$ebnf$1", "symbols": []},
    {"name": "_$ebnf$1", "symbols": ["_$ebnf$1", (lexer.has("WS") ? {type: "WS"} : "WS")], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "_", "symbols": ["_$ebnf$1"]},
    {"name": "__$ebnf$1", "symbols": [(lexer.has("WS") ? {type: "WS"} : "WS")]},
    {"name": "__$ebnf$1", "symbols": ["__$ebnf$1", (lexer.has("WS") ? {type: "WS"} : "WS")], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "__", "symbols": ["__$ebnf$1"]}
]
  , ParserStart: "statements"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();