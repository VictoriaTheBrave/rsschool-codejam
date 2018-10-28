module.exports = function make () {
  if(typeof arguments[0] === 'function'){
    return {TypeError : "Can't call function make with empty array as argument"};
  }
  let argumentsArray = [].slice.call(arguments);
  let func= function () {
    for (let i = 0; i < arguments.length; i++) {
      if(typeof arguments[i] !== 'function'){
        argumentsArray.push(arguments[i]);
      } else {
        if (argumentsArray.length === 0) {
          return {TypeError : "Can't call function make with empty array as argument"};
        }
        return argumentsArray.reduce(arguments[i]);
      }
    }
    return func; 
  }
  return func;
}