import nearley from "nearley";
import grammar from "./parsed-dark";

export const codeToParse = (code) => {
  try {
    // Create a Parser object from our grammar.
    const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));
    parser.feed(code);
    if (!parser.results[0]) {
      return `Unbalanced expression`;
    }
    return parser.results[0];
  } catch (error) {
    return `Syntax error: unhandled expression`;
  }
};
