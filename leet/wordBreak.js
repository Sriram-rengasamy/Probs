let cache = new Map();
//let result = containsSuffix(new Set(['cat', 'camel', 'dog']) , 'mydog' );
//console.log(result);
function containsSuffix(dict, str){
    for(let i = 0; i <str.length; i++){
        let subStr = str.substring(i);
        if(dict.has(subStr))
        return true;
    }
    return false;
}

function wordBreak(str, dict){
    if(cache.has(str))
        return cache.get(str);
   let result = [];
   if(dict.has(str))
        result.push(str);
    for(let i = 1; i < str.length; i++){
        let left = str.substring(0, i);
        let right = str.substring(i);
        if(dict.has(left) && containsSuffix(dict, right)){
            for(let ss of wordBreak(right, dict))
            {
                result.push(left + " " +  ss);
            }
        }
    }

    cache.set(str, result);
    return result;
}
console.log(wordBreak('a',new Set(['a'])));
//console.log(wordBreak('catsanddog',new Set(["cat", "cats", "and", "sand", "dog"])));