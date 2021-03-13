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
  -> input_assign   {% id %}
  | fun_call        {% id %}
  | var_assign      {% id %}
  | _               {% id %}


input_assign
  -> %identifier _ %assign _ input_fun _
      {%
        (data) => {
          return {
            type: "input_assign",
            var_name: data[0],
            value: data[4],
          }
        }
      %}

var_assign
  -> %identifier _ %assign _ expr _
      {%
        (data) => {
          return {
            type: "var_assign",
            var_name: data[0],
            value: data[4],
          }
        }
      %}


input_fun
  -> "ask" %lparen _ (%string | %string2 | %identifier | %number _):? %rparen _
      {%
        (data) => {
          return {
            type: "input_fun",
            input: data[3] ? data[3][0] : "",
          }
        }
      %}

fun_call
  -> %identifier %lparen _ (arg_list _):? %rparen _
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
  | arg_list __ expr
      {%
        (data) => {
          return [...data[0], data[2]];
        }
      %}


list
  -> %lbracket _ (arg_list _):? %rbracket
      {%
        (data) => {
          return {
            type: "array",
            arguments: data[2] ? data[2][0] : [],
          };
        }
      %}



item_list
  -> %identifier %lbracket _ (%number | %identifier):? %rbracket
      {%
        (data) => {
          return {
            type: "array_item",
            array_name: data[0],
            item: data[3] ? data[3][0] : [],
          };
        }
      %}


expr
  -> %string         {% id %}
  | %string2         {% id %}
  | item_list        {% id %}
  | "WIN"
      {%
        (data) => {
          return {
            type: "true",
            value: true
          };
        }
      %}
  | "FAIL"
      {%
        (data) => {
          return {
            type: "false",
            value: false
          };
        }
      %}
  | %number          {% id %}
  | %identifier      {% id %}
  | fun_call         {% id %}
  | list             {% id %}
    

# Optional whitespace
_ -> %WS:*
      {%
        (data) => {
          return {
            type: "empty_line",
          }
        }
      %}

# Mandatory whitespace
__ -> %WS:+