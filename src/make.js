module.exports = function make(...args) {
  if (typeof args[0] === 'function') {
    return { TypeError: "Can't call function make with empty array as argument" };
  }
  const argumentsArray = [];
  for (let i = 0; i < args.length; i++) {
    if (typeof args[i] !== 'function') {
      argumentsArray[i] = args[i];
    } else {
      return argumentsArray.reduce(args[i]);
    }
  }
  function func(...arg) {
    for (let i = 0; i < arg.length; i++) {
      if (typeof arg[i] !== 'function') {
        argumentsArray.push(arg[i]);
      } else {
        if (argumentsArray.length === 0) {
          return { TypeError: "Can't call function make with empty array as argument" };
        }
        return argumentsArray.reduce(arg[i]);
      }
    }
    return func;
  }
  return func;
};
