findCommomChars(['facebook', 'google']);
function findCommomChars(arr){
    let n = arr.length;
    let map = new Array(arr.length);
    for(let i = 0; i < arr.length; i++){
        map[i] = new Array(26).fill(0);
    }

    for(let i = 0; i < arr.length; i++)
    {
        for(let j = 0; j < arr[i].length; j++){
            map[i][arr[i][j].charCodeAt() - 'a'.charCodeAt()]++; 
        }
    }

    let result = [];
    for(let j =0; j < 26; j++){
        let min = Number.MAX_SAFE_INTEGER;
        for(let i = 0; i < n; i++){
            min = Math.min(map[i][j], min);
        }

        let cs = String.fromCharCode(j + 'a'.charCodeAt());
        for(let i =0; i < min; i++)
        { 
        result.push(cs);
          }
    }


    console.log(result); 

}