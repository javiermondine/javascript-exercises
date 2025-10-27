const removeFromArray = function(arr, ...toRemove) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!toRemove.includes(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
};

module.exports = removeFromArray;
