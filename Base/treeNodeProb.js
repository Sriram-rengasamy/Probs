class TreeNode{
    constructor(_data)
    {
        this.data = _data;
        this.left = this.right = this.parent =  null;
        this.size = 1;
    }
    getSize(){
        return this.size;
    }
    inOrderTraversal(arr, index){
        if(this.left != null)
            this.left.inOrderTraversal(arr, index);

        arr[index[0]++] = this.data;

        if(this.right != null)
            this.right.inOrderTraversal(arr, index);

    }
    setLeftChild(left){
        this.left = left;
        if(left != null)
          left.parent = this;

    }
    setRightChild(right){
        this.right = right;
        if(right != null)
         right.parent = this;
    }
    insertInOrder(data){
       if(data <= this.data)
         {
             if(this.left === null){
                 this.setLeftChild(new TreeNode(data));
             }
             else{
                 this.left.insertInOrder(data);
             }
         }
       else {
           if(this.right === null) {
               this.setRightChild(new TreeNode(data));
           }
           else {
               this.right.insertInOrder(data);
           }
       }
       this.size++;
    }

    find(data){
      if(this.data === data)
      return this;

      if(data <= this.data)
         return this.left != null ? this.left.find(data) : null;
      else if(data > this.data)
         return this.right != null ? this.right.find(data) : null;

      return null;
    }

    deleteNode(data){
        if(data < this.data){
            this.left = this.left.deleteNode(data);
        } else if(data > this.data){
            this.right = this.right.deleteNode(data);
        }
        else {
            /* key to be deleted is found */
            if(this.left != null && this.right != null){ /* 2 children */
                let temp = this.right;
                while(temp.left != null){
                    temp = temp.left;
                }
                this.data = temp.data;
                this.right = this.right.deleteNode(temp.data);

            }
            else {
                let child;
                if(this.left != null)
                  child = this.left;
               else
                  child = this.right;

                return child;
            }
        }
       // return this;

    }
}

let arr = [25,100,75,85,55,98];
//let arr = [25, 50, 15];
console.log(`Original Array:`);
console.log(arr);

let root = new TreeNode(arr[0]);
for(let i = 1; i < arr.length; i++){
    root.insertInOrder(arr[i]); // BST Insertion - In order
}
//console.log(root);
let resultArray = new Array(arr.length);
let index = [0];
root.inOrderTraversal(resultArray, index);
//console.log(resultArray);

/* Deleting a Node */
/* let resultArray1 = new Array(arr.length-1);
root.deleteNode(75);
let index1 = [0];
root.inOrderTraversal(resultArray1, index1);
console.log(resultArray1); */

/* Deleting a Node */
//console.log(root.find(101));
var serializedArray = [];

function serializeInPreOrderTraversal(curNode, serializedArray){
    if(curNode === null){
        serializedArray.push('X');
        return;
    }
    serializedArray.push(curNode.data);
    serializeInPreOrderTraversal(curNode.left, serializedArray);
    serializeInPreOrderTraversal(curNode.right, serializedArray);
}

serializeInPreOrderTraversal(root, serializedArray);
console.log(`Serialized Array:`);
console.log(serializedArray)

let indexPtr = [0];

function deserializeFromPreOrderTraversal(serializedArray, indexPtr){
    if(serializedArray[indexPtr[0]] === 'X' || indexPtr[0] >= serializedArray.length){
        return;
    }

    let curNode = new TreeNode(serializedArray[indexPtr[0]]);
    indexPtr[0]++;
    curNode.left = deserializeFromPreOrderTraversal(serializedArray, indexPtr);
    indexPtr[0]++;
    curNode.right = deserializeFromPreOrderTraversal(serializedArray, indexPtr);
    return curNode;
}

let deserializedNode = deserializeFromPreOrderTraversal(serializedArray, indexPtr);
let deserializedNodeArray = new Array(arr.length);
let indexPtr1 = [0];
deserializedNode.inOrderTraversal(deserializedNodeArray, indexPtr1);
console.log(deserializedNodeArray);