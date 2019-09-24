function TreeNode(data){
    this.left = this.right = null;
    this.data = data;
}

//let arr = [1, 0, 1, 0, 1, 0, 1];
let arr = [1, 1];
function createLevelOrderTree(arr, index){
    if(index >= arr.length)
        return;
    let curNode = new TreeNode(arr[index]);
    curNode.left = createLevelOrderTree(arr, 2 * index  + 1);
    curNode.right = createLevelOrderTree(arr, 2 * index + 2);
    return curNode;
}

let rootNode = createLevelOrderTree(arr, 0);
let inorderArr = [];

function inorderTraversal(curNode){
   if(curNode == null)
        return;
    
    inorderTraversal(curNode.left);
    inorderArr.push(curNode.data);
    inorderTraversal(curNode.right);
}
inorderTraversal(rootNode);
//console.log(inorderArr);

function sumRootToLeafNode(curNode){
    if(curNode == null)
        return;
    if(curNode.left == null && curNode.right == null)
        return ['' + curNode.data];
    let left = sumRootToLeafNode(curNode.left);
    if(left){
        for(let i = 0; i < left.length; i++)
        left[i] = curNode.data + left[i]; 
    }   
    let right = sumRootToLeafNode(curNode.right);
    if(right){
        for(let i = 0; i < right.length; i++)
            right[i] = curNode.data + right[i]; 
    }
    if(left && right)
        return [...left, ...right];
    else if(left)
            return [...left];
    else if(right)
        return [...right];
}

var rootToLeafArr = sumRootToLeafNode(rootNode);
let sumRootToLeafResult = 0;
for(let elem of rootToLeafArr)
  sumRootToLeafResult += parseInt(elem, 2);
console.log(sumRootToLeafResult);