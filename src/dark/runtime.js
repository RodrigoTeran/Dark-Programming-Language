export const speak = () => {
  const string = `const speak = (...args) => {
    result_code_dark_programming_language.push(args.join(""));
  };`;
  return string;
};

export const add = () => {
  const string = `const add = (...args) => {
    result_code_dark_programming_language_parcial = args.filter(element => !isNaN(element));

    result_code_dark_programming_language_parcial = result_code_dark_programming_language_parcial.filter(element => typeof element !== "boolean");

    result_code_dark_programming_language_parcial = result_code_dark_programming_language_parcial.map(element => parseFloat(element))

    return Math.floor(result_code_dark_programming_language_parcial.reduce((a, b) => a + b) * 100) / 100;
  };`;
  return string;
};

export const dot = () => {
  const string = `const dot = (...args) => {
    result_code_dark_programming_language_parcial = args.filter(element => !isNaN(element));

    result_code_dark_programming_language_parcial = result_code_dark_programming_language_parcial.filter(element => typeof element !== "boolean");

    return Math.floor(result_code_dark_programming_language_parcial.reduce((a, b) => a * b) * 100) / 100;
  };`;
  return string;
};

export const concat = () => {
  const string = `const concat = (...args) => {
    result_code_dark_programming_language_parcial = args.map(element => element.toString())

    return result_code_dark_programming_language_parcial.reduce((a, b) => a + b)
  };`;
  return string;
};

export const concatWith = () => {
  const string = `const concatWith = (...args) => {
    result_code_dark_programming_language_parcial_last = args.pop();

    result_code_dark_programming_language_parcial = args.map((element, index) => {
      
      if(index < args.length - 1){
        return element.toString() + result_code_dark_programming_language_parcial_last.toString()
      } else {
        return element.toString()
      }
    })

    return result_code_dark_programming_language_parcial.reduce((a, b) => a + b)
  };`;
  return string;
};
