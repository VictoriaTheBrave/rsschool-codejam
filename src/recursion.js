module.exports = function recursion(tree) { 
  if (tree === undefined) { 
    return undefined; 
  }
  const result = [[tree.value]];

  const left = recursion(tree.left); 
  if (left !== undefined) {
    for (let i = 0; i < left.length; i++) {
      result.push(left[i]);
    }
  } 
  
  const right = recursion(tree.right); 
  if (right !== undefined){
    for (let i = 0; i < right.length; i++){
      if (result[i + 1] === undefined){
        result.push(right[i]);
      } else {
        result[i + 1] = result[i + 1].concat(right[i]);
      }
    }
  } 
  return result;
};