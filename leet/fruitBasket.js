//https://leetcode.com/problems/fruit-into-baskets/

function totalFruit(tree){
    if(tree == null || tree.length == 0){
        return 0;
    }

    let max = 1;
    let map = new Map();
    let i = j = 0;
    while(j < tree.length){
        if(map.size <= 2){
            map.set(tree[j], j++);
        }
        if(map.size > 2){
            let min = tree.length - 1;
            for(let value of map.values()){
                min = Math.min(min, value);
            }
            i = min + 1;
            map.delete(tree[min]);
        }
        
        max = Math.max(max, j -i);
    }
    return max;
}

console.log(totalFruit([3,3,3,1,2,1,1,2,3,3,4]))

/*
In a row of trees, the i-th tree produces fruit with type tree[i].

You start at any tree of your choice, then repeatedly perform the following steps:

Add one piece of fruit from this tree to your baskets.  If you cannot, stop.
Move to the next tree to the right of the current tree.  If there is no tree to the right, stop.
Note that you do not have any choice after the initial choice of starting tree:
 you must perform step 1, then step 2, then back to step 1, then step 2, and so on until you stop.

You have two baskets, and each basket can carry any quantity of fruit, 
but you want each basket to only carry one type of fruit each.

What is the total amount of fruit you can collect with this procedure?
*/