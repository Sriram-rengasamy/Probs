//https://leetcode.com/problems/letter-tile-possibilities/
function numTilePossibilities(tiles) {
    let count = new Array(26).fill(0);
    for (let c of tiles) 
        count[c.charCodeAt() - 'A'.charCodeAt()]++;
        
    return dfs(count);
}

function dfs(arr) {
    let sum = 0;
    for (let i = 0; i < 26; i++) {
        if (arr[i] == 0) continue;
        sum++;
        arr[i]--;
        sum += dfs(arr);
        arr[i]++;
    }
    return sum;
}

var result = numTilePossibilities('AAB')
console.log(result);