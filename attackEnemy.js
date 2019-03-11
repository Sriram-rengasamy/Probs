let battleField = [
   [1, 1, 1] ,
    [1, 0, 0],
    [1, 0, 1]
];

attackEnemy(battleField);

function attackEnemy(arr){
let rowSize = arr.length;
let colSize = arr[0].length;

let attackList = [];

for(let row = 0; row < rowSize; row++)
{
    for(let col = 0; col < colSize; col++){
        let enemyCount = findEnemies(arr, row,col);
        if (enemyCount > 0)
             attackList.push([enemyCount, row, col]);
    }
}
console.log(attackList.sort((a, b) => { b[0] - a[0] }));

}

function findEnemies(arr, row, col){
let rowSize = arr.length;
let colSize = arr[0].length;
   if(row < 0 || row >= rowSize || col < 0 || col >= colSize){
       return 0;
   }
   if(arr[row][col] != 1)
        return 0;

    let enemyCount = 0
    if(arr[row][col] == 1){
        enemyCount +=1;
        arr[row][col] = -1;

        for(let eRow = row -1; eRow <= row + 1; eRow++){
            for(let eCol = col -1 ; eCol <= col + 1; eCol++){
                enemyCount += findEnemies(arr, eRow,eCol);
            }
        }
    }
    return enemyCount;
}