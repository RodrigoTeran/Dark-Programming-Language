// Built in Functions
import { speak, add, dot, concat, concatWith } from "./runtime";

export function generateJsForStatements(statements, index, firstInstructions) {
  if (typeof statements === "object") {
    const lines = [];

    try {
      var isASKED = false;
      var variableName = undefined;
      var variableInSpeak = undefined;
      var indexForBreaked = undefined;

      for (var i = index; i < statements.length; i++) {
        let statement = statements[i];
        const line = generateJsForStatementOrExpr(statement);

        if (Array.isArray(line)) {
          lines.push(`speak(${line[1]})`);
          isASKED = true;
          variableName = line[0];
          variableInSpeak = line[1];
          indexForBreaked = i;
          break;
        } else {
          lines.push(line);
        }
      }
      var theInstructions = lines.join("\n").toString();
      // Add functionality
      var allCode = `
          var result_code_dark_programming_language = [];
  
          Array.prototype.get_item = function (item) {
            if(item < 0){
                return this[this.length + item];
            } else {
                return this[item];
            }
          };
  
          Number.prototype.get_item = function (item) {
            throw new Error(this + " is not a list")
          };
  
          String.prototype.get_item = function (item) {
            throw new Error('"' + this + '"' + " is not a list")
          };
  
          Number.prototype.round = function(places) {
            return +(Math.round(this + "e+" + places)  + "e-" + places);
          }
  
          ${speak()}
          ${add()}
          ${concat()}
          ${concatWith()}
          ${dot()}
          ${firstInstructions}
          ${theInstructions}
      
          return result_code_dark_programming_language;
        `;
      var F = new Function(allCode);
      const result = F();

      if (isASKED) {
        return [
          "ASKED",
          result.join("\n"),
          variableName,
          indexForBreaked,
          firstInstructions + "\n" + theInstructions,
          variableInSpeak,
        ];
      }
      return ["SUCCESS", result.join("\n")];
    } catch (error) {
      return ["ERROR", error.toString()];
    }
  } else {
    return ["ERROR", statements.toString()];
  }
}

function generateJsForStatementOrExpr(node) {
  if (node.type === "var_assign") {
    const varName =
      node.var_name.value === "var" ||
      node.var_name.value === "result_code_dark_programming_language" ||
      node.var_name.value === "const" ||
      node.var_name.value === "result_code_dark_programming_language_parcial" ||
      node.var_name.value ===
        "result_code_dark_programming_language_parcial_last" ||
      node.var_name.value === "true" ||
      node.var_name.value === "false"
        ? `${node.var_name.value}_`
        : node.var_name.value;
    const jsExpr = generateJsForStatementOrExpr(node.value);

    const js = `var ${varName} = ${jsExpr};`;
    return js;
  } else if (node.type === "fun_call") {
    const funName = node.fun_name.value;
    const argList = node.arguments
      .map((arg) => {
        return generateJsForStatementOrExpr(arg);
      })
      .join(", ");
    return `${funName}(${argList})`;
  } else if (node.type === "string") {
    return node.value;
  } else if (node.type === "string2") {
    return node.value;
  } else if (node.type === "number") {
    return node.value;
  } else if (node.type === "true") {
    return node.value;
  } else if (node.type === "array_item") {
    if (!node.item.value) {
      throw new Error(
        `Need to specify an item position to ${node.array_name.value}`
      );
    } else {
      return `${node.array_name.value}.get_item(${node.item.value})`;
    }
  } else if (node.type === "false") {
    return node.value;
  } else if (node.type === "identifier") {
    if (
      node.value === "var" ||
      node.value === "result_code_dark_programming_language" ||
      node.value === "const" ||
      node.value === "result_code_dark_programming_language_parcial" ||
      node.value === "result_code_dark_programming_language_parcial_last" ||
      node.value === "true" ||
      node.value === "false"
    ) {
      return `${node.value}_`;
    } else {
      return node.value;
    }
  } else if (node.type === "array") {
    const argList = node.arguments
      .map((arg) => {
        return generateJsForStatementOrExpr(arg);
      })
      .join(", ");
    return "[" + argList + "]";
  } else if (node.type === "empty_line") {
    return "";
  } else if (node.type === "return") {
    return `return ${node.value.value};`;
  } else if (node.type === "input_assign") {
    var variableName = node.var_name.value;
    var variableValue = node.value.input.value;
    if (!isNaN(variableValue)) {
      variableValue = `"${variableValue}"`;
    }
    return [variableName, variableValue];
  } else if (node.type === "task") {
    var arrayOfFunction = [];

    for (var j = 0; j < node.body.length; j++) {
      let statement = node.body[j];
      const line = generateJsForStatementOrExpr(statement);
      arrayOfFunction.push(line);
    }
    var theInstructionsFunction = arrayOfFunction.join("\n").toString();
    var params = node.parameters;
    params = params.map(param => {
      return param.value;
    })
    const result =  `
      var ${node.identifierName.value} = (${params}) => {
        ${theInstructionsFunction}
      }
    `;
    
    return result;
  } else {
    throw new Error(`Unhandled AST node type ${node.type}`);
  }
}
