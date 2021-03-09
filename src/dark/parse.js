import nearley from "nearley";
import grammar from "./parsed-dark"

export const codeToParse = (code) => {
  try {
    // Create a Parser object from our grammar.
    const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));
    parser.feed(code);
    return parser.results[0];
  } catch (error) {
    return `Syntax error: unhandled expression`;
  }
};
