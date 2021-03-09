import { compile } from "moo";
// Grammar
import { grammar } from "./grammar";
export let lexer = compile(grammar);
