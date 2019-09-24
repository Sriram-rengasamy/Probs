//https://leetcode.com/problems/split-array-largest-sum/discuss/89817/Clear-Explanation:-8ms-Binary-Search-Java
//Given an array which consists of non-negative integers and an integer m, 
//you can split the array into m non-empty continuous subarrays.
// Write an algorithm to minimize the largest sum among these m subarrays.

// Very Tough Problem

var nums = [7,2,5,10,8];
var m = 2;

//console.log(valid(23, nums, 2));
function valid(target, nums, m){
    let count = 1; 
    let total = 0;
   
    for(let num of nums){
        total += num;
        if(total > target){
            total = num;
            count++;
            if(count > m){
                return false;
            }
         }
    }
    return true;

}


console.log(splitArray(nums, m));

function splitArray(nums, m){
let max = Number.MIN_SAFE_INTEGER;
let sum = 0;

for(let elem of nums){
   max = Math.max(max, elem);
   sum += elem;
  
}
let left = max, right = sum;

while(left < right){
    let mid = Math.ceil((left + right)/2);
    if(valid(mid, nums, m)){
        right = mid - 1;
    } else {
        left = mid + 1;
    }
}

return parseInt(left);
//console.log(max);
//console.log(sum);

}