const tree = require('./treeNode');
let TreeNode = tree.TreeNode;

Array.prototype.peek = function(){
    return this[this.length - 1];
}

function recoverFromPreOrder(str) {
    if (str === null)
        return null;
    let index = 0;
    while (index < str.length && str[index] !== '-')
        index++;

    let root = new TreeNode(parseInt(str.substring(0, index + 1)));
    let stack = [];
    stack.push(root);

    while (index < str.length) {
        let level = 0;
        while (index < str.length && str[index] === '-') {
            index++;
            level++;
        }
        while (stack.length - 1 >= level)
            stack.pop();

        let curIndex = index;
        while (index < str.length && str[index] !== '-')
            index++;

        let treeNode = new TreeNode(parseInt(str.substring(curIndex, index + 1)));
        let lastNode = stack.peek() ;
        if (lastNode.left == null) {
            lastNode.left = treeNode;
            stack.push(treeNode);
        }
        else {
            lastNode.right = treeNode;
            stack.push(treeNode);
        }

    }

return root;

}
let str = '1-2--3---4-5--6---7';
var result = recoverFromPreOrder(str);
//console.log(result)


let resultArray = new Array(10);
let index = [0];
result.inOrderTraversal(resultArray, index);
console.log(resultArray);