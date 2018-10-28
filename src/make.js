module.exports = function make(...args) {
  if (typeof args[0] === 'function') {
    return { TypeError: "Can't call function make with empty array as argument" };
  }
  const argumentsArray = [].slice.call(args);
  function func(...arg) {
    for (let i = 0; i < arg.length; i += 1) {
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
