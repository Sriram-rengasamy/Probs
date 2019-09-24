function longestArithmeticSequence(A){
    let size = A.length;
    let dp = new Array(size);
    for(let i = 0; i < size; i++){
        dp[i] = new Array(size).fill(0);
    }
    let max = 0;
    for(let i = 0; i < size; i++){
        let map  = new Map();
        for(let j =0; j < i; j++){
                dp[i][j] = 2;
           
                let diff = A[i] - A[j];
                let search = A[j] - diff;
                
                if(map.has(search)){
                    let k = map.get(search);
                    dp[i][j] = dp[j][k] + 1;
                }
            map.set(A[j], j);
            max = Math.max(max, dp[i][j]);
        }
    }
    console.log(dp);
    return max;
}

var result = longestArithmeticSequence([20,1,15,3,10,5,8]);
console.log(result);