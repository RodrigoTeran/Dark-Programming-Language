export const speak = () => {
  const string = `const speak = (...args) => {result_code_dark_programming_language.push(args.join(", "));};`;
  return string;
};

export const speakWith = () => {
  const string = `const speakWith = (...args) => {
    result_code_dark_programming_language_last = args.pop()
    result_code_dark_programming_language.push(args.join(result_code_dark_programming_language_last));
  };`;
  return string;
};

export const add = () => {
  const string = `const add = (...args) => {
    return args.reduce((a, b) => a + b, 0)
  };`;
  return string;
};