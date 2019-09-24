function TrieNode(){
    this.children = new Array(26);
    this.weight = new Set();
}

//var trie = new TrieNode();
//console.log(trie.children.length);

module.exports = { 
  TrieNode
};