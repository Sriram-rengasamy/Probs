function TrieNode(char){
    this.char = char;
    this.children = new Map();
    this.indexes = new Set();
    this.terminates = false;
}

TrieNode.prototype.addWord = function(word, index){
    let firstChar = word[0];
    let child = children.get(firstChar);
    if(!child){
        child = new TrieNode(firstChar);
        if(word.length === 1)   
            child.terminates = true;        
        this.set(firstChar, child);
        this.indexes.add(index);

    }
}

var root = new TrieNode();
console.log(root);
