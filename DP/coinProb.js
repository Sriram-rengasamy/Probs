findMinimumCoinsForSum([1,3,5],11);

function findMinimumCoinsForSum(coins, sum){
   let minSumArr = new Array(sum + 1).fill(Number.MAX_SAFE_INTEGER);
   minSumArr[0] = 0;

   for(let currSum = 1; currSum <= sum; currSum++){ /* sum - 1,2,3,....11 - find for previous sum */
     for(let currCoinValue = 0; currCoinValue < coins.length; currCoinValue++){ /* each coin value */
         if(coins[currCoinValue] <= currSum &&  /* coin value should be less than or equal to sum to use it */
            minSumArr[currSum - coins[currCoinValue]] + 1 < minSumArr[currSum]){
              minSumArr[currSum] = minSumArr[currSum - coins[currCoinValue]] + 1;
         }
     }
   }
   console.log(minSumArr);

}