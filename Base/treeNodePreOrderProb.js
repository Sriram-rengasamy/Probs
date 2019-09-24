function treeNode(data){
    this.data = data;
    this.left = this.right = null;
}

treeNode.prototype.insertInOrder= function(data){
    if(data <= this.data){
        this.left == null ?  this.left = new treeNode(data) : this.left.insertInOrder(data);
    }
    else if(data > this.data){
        this.right == null ? this.right = new treeNode(data): this.right.insertInOrder(data);
    }
}

var inorderArr = [];
var inputArr = [5, 4, 2, 4, 8, 6, 9];
var node = new treeNode(inputArr[0]);
for(let i = 1; i < inputArr.length; i++){
    node.insertInOrder(inputArr[i]);
}

//console.log(node);
inOrderTraversal(node, inorderArr);
//console.log(inorderArr);
function inOrderTraversal(node, inorderArr){
    if(node === null)
        return;

     inOrderTraversal(node.left, inorderArr);
     inorderArr.push(node.data);
     inOrderTraversal(node.right, inorderArr);
}

var preOrderArr = [];
preOrderTraversal(node, preOrderArr);
//console.log(preOrderArr);
function preOrderTraversal(node, preOrderArr){
    if(node === null)
        return;
    preOrderArr.push(node.data);
    preOrderTraversal(node.left, preOrderArr);
    preOrderTraversal(node.right, preOrderArr);
}

var levelNode = createLevelOrderTree(inputArr, 0);
//console.log(levelNode);
function createLevelOrderTree(arr, index){
    if(index >= arr.length)
        return;
    let curNode = new treeNode(arr[index]);
    curNode.left = createLevelOrderTree(arr, index * 2 + 1);
    curNode.right = createLevelOrderTree(arr, index * 2 + 2);
    return curNode;  
}

var index = [0];

var inputArr = [5, 4, 2, 4, 8, 6, 9];
var sortArr = inputArr.sort((a, b) => a > b ? 1 : -1)
console.log(sortArr);
var node = new treeNode(inputArr[0]);
for(let i = 1; i < inputArr.length; i++){
    node.insertInOrder(inputArr[i]);
}



inOrderTraversal(node, inorderArr);
console.log(inorderArr);

var arr2 =  [5, 3, 2, 4, 8, 7, 9];
var sortArr2 =  arr2.sort((a, b) => a > b ? 1 : -1)
var inorderArr2 = [];

var node = new treeNode(inputArr[0]);
for(let i = 1; i < inputArr.length; i++){
    node.insertInOrder(inputArr[i]);
}

var preOrderTree = createPreOrderTree(inputArr,index);
//console.log(preOrderTree);

function createPreOrderTree(arr, index){
    if(index[0] >= arr.length)
        return;
    let curNode = new treeNode(arr[index[0]]);
    index[0]++;
    curNode.left = createPreOrderTree(arr, index);
    index[0]++;
    curNode.right = createPreOrderTree(arr, index );
    return curNode;
}
