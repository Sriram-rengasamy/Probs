
// Excellent way to find out Maximum in an array with Minimum index
var levelSum = [2,5,8,4,5,8,9,9,9]
var maxIdx = 0;
for (var i = 0; i < levelSum.length; ++i)
      maxIdx = levelSum[i] > levelSum[maxIdx] ? i : maxIdx;

console.log(maxIdx);         


//https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/solution/
function TreeNode(data)
{
    this.data = data;
    this.left = null;
    this.right = null;
}

var arr = [1,7,0,7,-8, null, null];

function createBinaryTree(arr, index){
    if(index >= arr.length)
        return;
    
    let curNode = new TreeNode(arr[index]);
    curNode.left = createBinaryTree(arr, 2 * index + 1);
    curNode.right = createBinaryTree(arr, 2 * index + 2);
    return curNode;
}

var rootNode = createBinaryTree(arr, 0);
console.log(rootNode);

var map = new Map();

findLevelSum(1, rootNode);
console.log(map);
function findLevelSum(level, node){
    if(!node)
        return;
    if(!map.get(level))    
        map.set(level, node.data);
    else
        map.set(level, map.get(level) + node.data);
    findLevelSum(level + 1, node.left);
    findLevelSum(level + 1, node.right);
}

console.log(findMinLevelWithMaxSum());
function findMinLevelWithMaxSum(){
    let curMaxSum = Number.MIN_SAFE_INTEGER;
    let curMinLevel = 1;
    for(let [key, value] of map){
        if(value > curMaxSum )
          {
            curMinLevel = key;
            curMaxSum = value;  
          } 
        else if(value === curMaxSum && key > curMinLevel)
             continue;
    }

    return curMinLevel;

}