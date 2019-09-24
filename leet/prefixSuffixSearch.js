//https://leetcode.com/problems/prefix-and-suffix-search/
var wordFilter =  function(words){
   this.words = words;
};

wordFilter.prototype.f = function(prefix, suffix){
  let result = [];
  this.words.forEach(word => {
     let prefixExists = this.containsPrefix(prefix,word);
     let suffixExists = this.containsSuffix(suffix, word);

     if(prefixExists && suffixExists)
          result.push(word);
         //console.log(`word: ${word}, prefix: ${prefix}, suffix: ${suffix}`);
  });

  return (result.length > 0) ? result.length - 1 : -1;
};

wordFilter.prototype.containsPrefix = function(prefix, word){
  let prefixExists = false;

  for(let i = 0; i < word.length; i++){
    if ( prefix === word.substring(0,i)){
      prefixExists = true;
    }
  }
  return prefixExists;
}

wordFilter.prototype.containsSuffix = function(suffix, word){
  let suffixExists = false;

  for(let i = 0; i < word.length; i++){
    if(suffix === word.substring(i))
      suffixExists = true;
  }

  return suffixExists;

}
// My understanding of the question
// Find the number of words matching the given prefix and suffix
var obj = new wordFilter(['mango', 'aloe', 'abcde','orange', 'pineapple','ape']);
var result = obj.f('a','e'); // (prefix, suffix)
console.log(result);


