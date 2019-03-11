
function findLongIncrSeq(arr){
let lis = new Array(arr.length).fill(1);

for(let i =1; i < arr.length; i++){
   for(let j = 0; j < i; j++)
   if(arr[i] > arr[j] && lis[i] < lis[j] + 1) {
      lis[i] = lis[j] + 1;
   }
}
return lis;
}

 console.log(findLongIncrSeq([10, 22, 9, 33, 21, 50, 41, 60, 80]));  