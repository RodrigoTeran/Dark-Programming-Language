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
  -> input_assign               {% id %}
  | fun_call                    {% id %}
  | var_assign                  {% id %}
  | task_function               {% id %}
  | _                           {% id %}



statementsFunction
  -> statementFunction
      {%
        (data) => {
          return [data[0]];
        }
      %}
    | statementsFunction %NL statementFunction
      {%
        (data) => {
          return [...data[0], data[2]];
        }
      %}

statementFunction
  -> _ fun_call
    {%
      (data) => {
        return data[1];
      }
    %}  
  | _ var_assign
    {%
      (data) => {
        return data[1];
      }
    %}    
  | _ task_function
    {%
      (data) => {
        return data[1];
      }
    %}  
  | _ "return" _ %thickArrow _ (expr_return):? _
    {%
      (data) => {
        return {
          type: "return",
          value: data[5] ? data[5][0] : false
        }
      }
    %}  
  | _                             {% id %}


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

input_fun
  -> "ask" %lparen _ (%string | %string2 | %identifier | %number _):? %rparen
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

task_function -> "task" _ %arrow _ %identifier %lparen _ (param_list _):? %rparen _ task_body _
  {%
    (data) => {
      return {
        type: "task",
        parameters: data[7] ? data[7][0] : [],
        body: data[10],
        identifierName: data[4],
      }
    }
  %}

task_body
  ->  %lbrace _ %NL statementsFunction %NL _ %rbrace _
    {%
      (data) => {
          return data[3];
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

param_list
  -> %identifier
    {%
      (data) => {
        return [data[0]];
      }
    %}
  | param_list __ %identifier
    {%
      (data) => {
        return [...data[0], data[2]];
      }
    %}

list
  -> %lbracket _ (arg_list _):? %rbracket _
    {%
      (data) => {
        return {
          type: "array",
          arguments: data[2] ? data[2][0] : [],
        };
      }
    %}

item_list
  -> %identifier %lbracket _ (%number | %identifier):? %rbracket _
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

expr_return
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