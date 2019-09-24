//https://leetcode.com/problems/flower-planting-with-no-adjacent/discuss/327959/Lee's-Solution-with-Comments

function gardenNoAdj(N, paths) {
    //Create a graph
    let graph = new Map();

    //... via adjacency list
    for (let i = 0; i < N; i++) 
        graph.set(i, new Set());
    //Add the edges 
    
    for (let path of paths){
        let x = path[0] - 1; //Due to 1-based indexing 
        let y = path[1] - 1; //Due to 1-based indexing
        //Undirected edge
        graph.get(x).add(y);
        graph.get(y).add(x);
    }
    //Here is our solution vector where res[i] represents color of garden i+1
    let res = new Array(N).fill(0);
    
    //Now run graph painting algorithm
    
    //For each garden
    for (let i = 0; i < N; i++){
        let colors = new Array(5).fill(0); //Use 5 instead of 4 so we can easily use 1-based indexing of the garden colors
        for (let neighbor of graph.get(i)){
            colors[res[neighbor]] = 1; //Mark the color as used if neighbor has used it before.
        }
        //Now just use a color that has not been used yet
        for (let c = 4; c >= 1; c--){
            if (colors[c] != 1) //colors[c] == 0 => the color has not been used yet,
                res[i] = c; //so let's use that one
        }
    }
    
    return res;
    
}
