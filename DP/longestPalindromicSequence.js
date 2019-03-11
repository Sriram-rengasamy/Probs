function max(a, b){
   return (a > b )? a : b;
}
findlps();
console.log(lpsDP('GEEKSFORGEEKS'));
function findlps(){
    let str = 'GEEKSFORGEEKS';
    console.log(lps(str,0,str.length - 1));
}

function lps(str, i ,j){
    if(i === j)
        return 1;
    
    if(str[i] === str[j] && i + 1 === j){
        return 2;
    }

    if(str[i] === str[j]) {
        return 2 + lps(str, i+1, j -1);
    }

    return max(lps(str, i , j -1 ), lps(str, i + 1, j));

 }

function lpsDP(str){
  let n = str.length;
  let i, j , c1;
  let L = new Array(n).fill(new Array(n).fill(1));
  for(i = 0; i < n; i++)
    L[i][i] = 1;

    for(cl = 2; cl <= n; cl++){
        for(i =0; i < n - cl + 1; i++){
            j = i + cl -1;

            if(str[i] === str[j] && cl==2 ) 
              L[i][j] = 2;
            else if(str[i] === str[j])
              L[i][j] = L[i + 1][ j-1] + 2;
            else
              L[i][j] = max( L[i][j-1], L[i+1][j]);
        }
    }
    return L[0][n -1];


}

