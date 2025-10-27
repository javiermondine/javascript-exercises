const fibonacci = function(n) {
  n = parseInt(n);
  if (n < 0) return "OOPS";
  if (n === 0) return 0;
  if (n === 1) return 1;
  
  let prev = 0;
  let curr = 1;
  
  for (let i = 2; i <= n; i++) {
    let temp = curr;
    curr = prev + curr;
    prev = temp;
  }
  
  return curr;
};

module.exports = fibonacci;
