@{%
  const { lexer } = require("./lexer");
%}

@lexer lexer

statements
  -> statement
      {%
        (data) => {
          return [data[0]];
        }
      %}
    | statements %NL statement
      {%
        (data) => {
          return [...data[0], data[2]];
        }
      %}


statement
  -> var_assign     {% id %}
  | fun_call     {% id %}

var_assign
  -> %identifier _ %assign _ expr
      {%
        (data) => {
          return {
            type: "var_assign",
            var_name: data[0],
            value: data[4],
          }
        }
      %}

fun_call
  -> %identifier %lparen _ (arg_list _):? %rparen
      {%
        (data) => {
          return {
            type: "fun_call",
            fun_name: data[0],
            arguments: data[3] ? data[3][0] : [],
          }
        }
      %}

arg_list
  -> expr
      {%
        (data) => {
          return [data[0]];
        }
      %}
  | arg_list _ %comma _ expr
      {%
        (data) => {
          return [...data[0], data[4]];
        }
      %}


expr
  -> %string         {% id %}
  | %number          {% id %}
  | %identifier      {% id %}
  | fun_call         {% id %}
    

# Optional whitespace
_ -> %WS:*

# Mandatory whitespace
__ -> %WS:+