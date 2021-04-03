export const speak = () => {
  const string = `const speak = (...args) => {
    result_code_dark_programming_language.push(args.join(""));
    return args.join("");
  };`;
  return string;
};

export const destroy = () => {
  const string = `const destroy = () => {
    return;
  };`;
  return string;
};

export const add = () => {
  const string = `const add = (...args) => {
    try {
      result_code_dark_programming_language_parcial = args.filter(element => !isNaN(element));

      result_code_dark_programming_language_parcial = result_code_dark_programming_language_parcial.filter(element => typeof element !== "boolean");
  
      result_code_dark_programming_language_parcial = result_code_dark_programming_language_parcial.map(element => parseFloat(element))
  
      return Math.floor(result_code_dark_programming_language_parcial.reduce((a, b) => a + b) * 100) / 100;
    } catch {
      return;
    }
  };`;
  return string;
};

export const discount = () => {
  const string = `const discount = (...args) => {
    try {
      result_code_dark_programming_language_parcial = args.filter(element => !isNaN(element));

      result_code_dark_programming_language_parcial = result_code_dark_programming_language_parcial.filter(element => typeof element !== "boolean");
  
      result_code_dark_programming_language_parcial = result_code_dark_programming_language_parcial.map(element => parseFloat(element))
  
      return Math.floor(result_code_dark_programming_language_parcial.reduce((a, b) => a - b) * 100) / 100;
    } catch {
      return;
    }
  };`;
  return string;
};

export const over = () => {
  const string = `const over = (...args) => {
    try {
      result_code_dark_programming_language_parcial = args.filter(element => !isNaN(element));

      result_code_dark_programming_language_parcial = result_code_dark_programming_language_parcial.filter(element => typeof element !== "boolean");
  
      result_code_dark_programming_language_parcial = result_code_dark_programming_language_parcial.map(element => parseFloat(element))
  
      return Math.floor(result_code_dark_programming_language_parcial.reduce((a, b) => a / b) * 100) / 100;
    } catch {
      return;
    }
  };`;
  return string;
};

export const dot = () => {
  const string = `const dot = (...args) => {
    try {
      result_code_dark_programming_language_parcial = args.filter(element => !isNaN(element));

      result_code_dark_programming_language_parcial = result_code_dark_programming_language_parcial.filter(element => typeof element !== "boolean");

      result_code_dark_programming_language_parcial = result_code_dark_programming_language_parcial.map(element => parseFloat(element))
  
      return Math.floor(result_code_dark_programming_language_parcial.reduce((a, b) => a * b) * 100) / 100;
    } catch {
      return;
    }
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

export const takeOutEnd = () => {
  const string = `const takeOutEnd = (...args) => {
    if(Array.isArray(args[0])) {
      return args[0].pop();
    }
    return;
  };`;
  return string;
};

export const takeOut = () => {
  const string = `const takeOut = (...args) => {
    if(Array.isArray(args[0])) {
      result_code_dark_programming_language_parcial = parseInt(args[1]);
      if(isNaN(result_code_dark_programming_language_parcial)){
        return;
      }
      return args[0].splice(result_code_dark_programming_language_parcial, 1);
    }
    return;
  };`;
  return string;
};

export const insertEnd = () => {
  const string = `const insertEnd = (...args) => {
    if(Array.isArray(args[0])) {
      return args[0].push(args[1]);
    }
    return;
  };`;
  return string;
};

export const insert = () => {
  const string = `const insert = (...args) => {
    if(Array.isArray(args[0])) {
      result_code_dark_programming_language_parcial = parseInt(args[1]);
      if(isNaN(result_code_dark_programming_language_parcial)){
        return;
      }
      args[0].splice(result_code_dark_programming_language_parcial, 0, args[2]);
    }
    return;
  };`;
  return string;
};
