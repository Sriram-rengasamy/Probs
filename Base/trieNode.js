function TrieNode(char){
    this.char = char;
    this.children = new Map();
    this.indexes = new Set();
}
TrieNode.prototype.addWord = function(word, index){
   if(!word)
        return;
    let firstChar = word[0];
    let child = this.children.get(firstChar);
    if(!child)
    {
        child = new TrieNode(firstChar);
        this.children.set(firstChar, child);
        this.indexes.add(index);
    }
    child.addWord(word.slice(1), index);
    
}

TrieNode.prototype.contains = function(word) {
    if(!word) 
        return true;
        //return this.indexes;
    let firstChar = word[0];
    let child = this.children.get(firstChar);
    if(!child)
        return false;
    return child.contains(word.slice(1));
}
let trie = new TrieNode();
let words = ['apple','ball', 'cat', 'car'];
let index = 0;
for(let word of words){
    trie.addWord(word, index);
    index++;
}
let result =  trie.contains('car');
console.log(result);