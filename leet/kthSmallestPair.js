function smallestDistancePair(nums, k) {
    nums.sort((a,b)=> a -b);
    let arr = new Array(nums[nums.length-1] + 1);

    for(let i=0; i< nums.length; i++){
        for(let j=i+1; j<nums.length;j++){
            arr[Math.abs(nums[i] - nums[j])]++;
        }
    }

    let count = 0;
    for(let i=0; i<arr.length; i++){
        count += arr[i];
        if(count >= k) {
            return i;
        }
    }
    return 0;
}

console.log(smallestDistancePair([1,3,1], 1));