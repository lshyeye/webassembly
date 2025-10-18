// number integer float
// i32 32位整数 integer
export function add(a: i32, b: i32): i32 {
  let res = 0
  for (let i = 0; i < 1000000; i++) {
    res += a
  }
  return a + b;
}

export function sub(a: i32, b: i32): i32 {
  return a - b;
}

// 斐波那契数列求和
// 最不好的动态规划实现
export function fib(n: i32): i32 {
  if (n < 2) {
    return n
  }
  let dp:number[] = []
  dp[0] = 0
  dp[1] = 1
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }
  return dp[n]  
}