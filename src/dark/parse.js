import nearley from "nearley";
import grammar from "./parsed-dark";

export const codeToParse = (code) => {
  // Create a Parser object from our grammar.
  const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));
  parser.feed(code);
  // console.log(JSON.stringify(parser.results[0], null, "    "));
  return parser.results[0];
};
