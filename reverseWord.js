function reverseWord(sentence){
let start = sentence.length -1;
let end = sentence.length;
let reversedSentence = [];
while(start > 0){
   if(sentence[start] === ' '){
       reversedSentence.push(sentence.slice(start + 1, end));
       end = start;
   }
   start--;
}
reversedSentence.push(sentence.slice(start, end));
return reversedSentence.join(' ');
}

console.log(reverseWord('Hello, ram world'));