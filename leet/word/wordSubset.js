//let A = ["amazon","apple","facebook","google","leetcode"], B = ["ec","oc","ceo"];
let  A = ["amazon","apple","facebook","google","leetcode"], B = ["e","oo"]
console.log(wordSubsets(A,B));
function wordSubsets(A, B) {
   let cntMax = new Array(26).fill(0);
    for (let sb of B){
        let curCnt = new Array(26).fill(0);
        for (let c of sb){
            let idx = c.charCodeAt() - 'a'.charCodeAt();
            curCnt[idx]++;
        }
        
        for (let i = 0; i < 26; ++i){
            cntMax[i] = Math.max(cntMax[i], curCnt[i]);
        }
    }
    
    let res = [];
    for (let s of A){
        let curCnt =new Array(26).fill(0);
        for (let c of s){
            let idx = c.charCodeAt() - 'a'.charCodeAt();
            curCnt[idx]++;
        }
        
        let ok = true;
        for (let i = 0; i < 26; ++i){
            if (curCnt[i] < cntMax[i]){
                ok = false;
                break;
            }
        }
        if (ok) res.push(s);
    }
    return res;
}