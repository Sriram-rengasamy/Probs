var arr = [6,2,4];
mctFromLeafValues(arr);
function mctFromLeafValues(arr){
    let n = arr.length;

    let dp = new Array(n).fill().map(() => new Array(n).fill(0));
    //dp[1][1] = 5;

    for(let len = 1; len <= n; len++){
        for(let i = 0; i+len -1 < n; i++){
            let j = i + len -1;
            if(len == 1)
                dp[i][i] = 0;
            else {
                dp[i][j] = Number.MAX_SAFE_INTEGER;
                for(let k = i + 1; k <= j; k++){
                    let maxl = 0;
                    for(let l = i; l < k; l++){
                        maxl = Math.max(maxl, arr[l]);
                    }

                    let maxr = 0;
                    for(let l = k; l <= j; l++){
                        maxr = Math.max(maxr, arr[l]);
                    }

                    dp[i][j] = Math.min(dp[i][j], dp[i][k -1] + dp[k][j] + maxl * maxr);
                }
            }    

        }
    }
console.log(dp);
return dp[0][n-1];
}

