/*
function fib(num){
    if (num <= 1){
        return 1
    } else {
        return fib(num -1) + fib(num -2);
    }
}

for(i = 0; i < 50; ++i){
    console.log(i, fib(i));
}

*/

const fibonacci = (n) => {
    if(n <= 1) {
      return n;
    }
  
    const result = [0, 1];
  
    for (let i = 2; i <= n; i++) {
      result[i] = result[i - 2] + result[i - 1];
    }
  
    return result[result.length - 1];
  }