//https://leetcode.com/discuss/interview-question/340303/amazon-online-assessment-min-time-to-merge-files
function minimumTime(numOfSubFiles, files) {
    // cost[j][i] indicates the cost to merge from file [j-1] to [i-1]
    let cost = new Array(numOfSubFiles).fill().map(()=> new Array(numOfSubFiles).fill(0));
    // subCost[j][i] indicate the cost to merge file[j] with file[i]
    let subCost = new Array(numOfSubFiles).fill().map(()=> new Array(numOfSubFiles).fill(0));

    for (let i = 0; i < numOfSubFiles; i++) {
        for (let j = i; j >=0; j--) {
            if (i == j) {
                // sub cost is file size 
                subCost[j][i] = files[i];
                cost[j][i] = 0;
            } else {
                subCost[j][i] = subCost[j][i -1] + files[i];
                cost[j][i] = Number.MAX_SAFE_INTEGER;
                for (let k = j; k < i; k++) {
                    cost[j][i] = Math.min(cost[j][i],cost[j][k] + cost[k+1][i] + subCost[j][i]);
                }
            }
        }
    }
    return cost[0][numOfSubFiles-1];
}

console.log(minimumTime(4, [8,4,6,12]));