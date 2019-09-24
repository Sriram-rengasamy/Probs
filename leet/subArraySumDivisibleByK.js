//https://leetcode.com/contest/weekly-contest-119/problems/subarray-sums-divisible-by-k/
//https://leetcode.com/problems/subarray-sums-divisible-by-k/discuss/217980/Java-O(N)-with-HashMap-and-prefix-Sum

/*
 sum of contiguous subarray , prefix sum is a common technique.
 if sum[0, i] % K == sum[0, j] % K, sum[i + 1, j] is divisible by by K.
 So for current index j, we need to find out how many index i (i < j) exist that has the same mod of K.
*/

function subarraysDivByK(A, K) {
    let n = A.length;
    let prefix = new Array(n + 1).fill(0);
    prefix[0] = 0;
    for(let i = 1; i <= n; i++)
    {
        prefix[i] = prefix[i - 1] + A[i - 1];
    }
    
    let count = new Array(K).fill(0); //pos
    count[0] = 1;
    let total = 0;
    for(let i = 1; i <= n; i++)
    {
        let mod = (prefix[i] % K + K) % K; // guess to avoid negative numbers
       
        total += count[mod];
        count[mod]++;
    }
    return total;
}

console.log(subarraysDivByK([4,5,0,-2,-3,1],5));