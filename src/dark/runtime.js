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
    return args.reduce((a, b) => a + b)
  };`;
  return string;
};

export const dot = () => {
  const string = `const dot = (...args) => {
    result_code_dark_programming_language_parcial = args.filter(element => !isNaN(element));

    return result_code_dark_programming_language_parcial.reduce((a, b) => a * b)
  };`;
  return string;
};
