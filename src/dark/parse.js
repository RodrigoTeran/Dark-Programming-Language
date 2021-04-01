import nearley from "nearley";
import grammar from "./parsed-dark";
import { generateJsForStatements } from "./generate";

export const codeToParse = (code, index, firstInstructions) => {
  try {
    // Create a Parser object from our grammar.
    const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));
    parser.feed(code);
    if (!parser.results[0]) {
      return generateJsForStatements(
        `Unbalanced expression`,
        index,
        firstInstructions
      );
    }
    return generateJsForStatements(parser.results[0], index, firstInstructions);
  } catch (error) {
    // console.log(error)
    return generateJsForStatements(
      `Syntax error: unhandled expression`,
      index,
      firstInstructions
    );
  }
};
