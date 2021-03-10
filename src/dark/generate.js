// Built in Functions
import { speak, speakWith, add } from "./runtime";

export function generateJsForStatements(statements) {
  if (typeof statements === "object") {
    const lines = [];

    try {
      for (let statement of statements) {
        const line = generateJsForStatementOrExpr(statement);
        lines.push(line);
      }
      var theInstructions = lines.join("\n").toString();
      // Add functionality
      var allCode = `
        var result_code_dark_programming_language = [];
        ${speak()}
        ${speakWith()}
        ${add()}
        ${theInstructions}
    
        return result_code_dark_programming_language;
      `;
      var F = new Function(allCode);
      const result = F();
      return ["SUCCESS", result.join("\n")];
    } catch (error) {
      return ["ERROR", error];
    }
  } else {
    return ["ERROR", statements];
  }
}

function generateJsForStatementOrExpr(node) {
  if (node.type === "var_assign") {
    const varName =
      node.var_name.value === "var" ||
      node.var_name.value === "result_code_dark_programming_language"
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
  } else if (node.type === "number") {
    return node.value;
  } else if (node.type === "identifier") {
    if (
      node.value === "var" ||
      node.value === "result_code_dark_programming_language"
    ) {
      return `${node.value}_`;
    } else {
      return node.value;
    }
  } else if (node.type === "empty_line") {
    return "";
  } else {
    throw new Error(`Unhandled AST node type ${node.type}`);
  }
}
