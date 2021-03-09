export function generateJsForStatements(statements) {
  const lines = [];
  for (let statement of statements) {
    const line = generateJsForStatementOrExpr(statement);
    lines.push(line);
  }
  return lines.join("\n");
}

function generateJsForStatementOrExpr(node) {
  if (node.type === "var_assign") {
    const varName = node.var_name.value;
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
  } else {
    throw new Error(`Unhandled AST node type ${node.type}`);
  }
}
