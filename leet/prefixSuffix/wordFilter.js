let trieNode = require('./trieNode');
const TrieNode = trieNode.TrieNode;

function WordFilter(words) {
  this.trie1 = new TrieNode();
  this.trie2 = new TrieNode();
  this.wt = 0;

  for (let word of words) {
    let cur = this.trie1;
    cur.weight.add(this.wt);

    for (let letter of word) {
      if (cur.children[letter.charCodeAt() - 'a'.charCodeAt()] == null) {
        cur.children[letter.charCodeAt() - 'a'.charCodeAt()] = new TrieNode();
      }
      cur = cur.children[letter.charCodeAt() - 'a'.charCodeAt()];
      cur.weight.add(this.wt);
    }

    cur = this.trie2;
    cur.weight.add(this.wt);
    for (let j = word.length - 1; j >= 0; --j) {
      let letter = word[j];
      if (cur.children[letter.charCodeAt() - 'a'.charCodeAt()] == null)
        cur.children[letter.charCodeAt() - 'a'.charCodeAt()] = new TrieNode();
      cur = cur.children[letter.charCodeAt() - 'a'.charCodeAt()];
      cur.weight.add(this.wt);
    }
    this.wt++;
  }
}

WordFilter.prototype.f = function (prefix, suffix) {
  let cur1 = this.trie1; cur2 = this.trie2;

  for (let letter of prefix) {
    if (cur1.children[letter.charCodeAt() - 'a'.charCodeAt()] == null) return -1;
    cur1 = cur1.children[letter.charCodeAt() - 'a'.charCodeAt()];
  }

  for (let j = suffix.length - 1; j >= 0; --j) {
    let letter = suffix[j];
    if (cur2.children[letter.charCodeAt() - 'a'.charCodeAt()] == null) return -1;
    cur2 = cur2.children[letter.charCodeAt() - 'a'.charCodeAt()];
  }
  let ans = -1;

  for (let w1 of cur1.weight)
    if (w1 > ans && cur2.weight.has(w1))
      ans = w1;

  return ans;
}

var wordFilter = new WordFilter(['apple','ball','ae','ape']);
console.log(wordFilter.f('a', 'e'));