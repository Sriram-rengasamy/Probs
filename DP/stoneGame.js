stoneGame([1,2, 6,3]);
function stoneGame(piles){
    let n = piles.length;
    //let sums = new Array(n).fill(new Array(n).fill(0));
    let sums = new Array(n); // Never use fill for two dimensional arrays
    for(let i = 0; i < n; i++){
        sums[i] = new Array(n).fill(0);
    }
 
    for(let i =0; i < n; i++){
        sums[i][i] = piles[i];
        for(let j= i + 1; j < n; j++){
            sums[i][j] = sums[i][j -1] + piles[j];
        }
    }

    let dp = new Array(n); // Never use fill for two dimensional arrays
    for(let i = 0; i < n; i++){
        dp[i] = new Array(n).fill(0);
    }

    for (let i = 0; i < n; i++)
        dp[i][i] = piles[i];
    for (let i = 1; i < n; i++) {
        for (let j = 0; j + i < n; j++) {
            let k = i + j;
            dp[j][k] = sums[j][k] - Math.min(dp[j + 1][k], dp[j][k - 1]);
        }
    }

console.log(sums)
console.log(dp)


console.log(dp[0][n-1]>sums[0][n-1]-dp[0][n-1]);


   //console.log(sums);
}