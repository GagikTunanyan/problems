//fibonaci tveri sharq,trvac tivy havasar e naxkin 2 fibonachi tveri gumarin
// payman fib(n) = fib(n-1)+fib(n-2) if n < 3 return 1

let fibonachi = (num) => {
  if (num < 3) {
      return 1;
  }

  return fibonachi(num-1) + fibonachi(num-2);
};
// console.log(fibonachi(6));