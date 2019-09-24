//minCostPaint([[17,2,17],[16,16,5],[14,3,19]]);
minCostPaint([[3,5,3],[6,17,6],[7,13,18],[9,10,18]]);
function minCostPaint(costMatrix){
   
   if(!costMatrix || costMatrix.length == 0 )
        return 0;
    
    let numHouse = costMatrix.length;
    let minCost = new Array(costMatrix.length).fill(0);

    findMinCost(costMatrix, costMatrix.length-1, minCost);
    console.log(minCost[costMatrix.length - 1]);
}

function findMinCost(costs, houseNum, minCost){
    if(houseNum <= 0){
        minCost[0] = Math.min(costs[0][0], costs[0][1], costs[0][2]);
         return;
    }

   findMinCost(costs, houseNum - 1, minCost);
   
   minCost[houseNum] = minCost[houseNum -1] + Math.min(costs[houseNum][0],costs[houseNum][1], costs[houseNum][2]);
   return;

}

