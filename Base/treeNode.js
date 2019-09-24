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

module.exports = {
    TreeNode : TreeNode
}