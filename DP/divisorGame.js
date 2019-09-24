function divisorGame(N){
    let dp = new Array(N + 1).fill(false);
    dp[1] = false;
    for(let i = 2; i <= N; i++){
        for(let j = 1; j < i; j++){
            if(i % j == 0)
            {
                dp[i] = dp[i] || !(dp[i - j]);
            }
        }
    }
    console.log(dp);
    return dp[N];
}

console.log(divisorGame(3));