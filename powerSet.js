// need to check if really works
function getSubsets(set, index){
    let allsubsets;

    if(set.length === index){
        allsubsets = [];
        allsubsets.push([]);
    }
    else{
        allsubsets = getSubsets(set, index  + 1);
        let item = set[index];
        let moresubsets = [];
        for(let subset of allsubsets){
            let newsubset = [];
            newsubset.push(...subset);
            newsubset.push(item);
            moresubsets.push(newsubset);

        }
        allsubsets.push(...moresubsets);
    }

    return allsubsets;
}

var result = getSubsets('AAB', 0);
console.log(result);