//https://leetcode.com/explore/learn/card/recursion-ii/472/backtracking/2799/
// Combinations

var n = 4;
var k = 2; 
var output = [];
combine(n, k);
function combine(n, k){
    backtrack(1, []);
}

function backtrack(first, cur){
    if(cur.length === k){
        output.push(cur.slice(0)); // cloning 
    }

    for(let i = first; i < n + 1; ++i){
        cur.push(i);
        backtrack(i + 1,cur);
        cur.pop(); // backtracking here.... 
    }
}

console.log(output);

