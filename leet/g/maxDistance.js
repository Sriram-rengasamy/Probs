//https://leetcode.com/problems/maximize-distance-to-closest-person/
function maxDistToClosest(seats) {
    let res = 0, n = seats.length, last = -1;
    for (let i = 0; i < n; ++i) {
        if (seats[i] == 1) {
            res = last < 0 ? i : Math.max(res, (i - last) / 2);
            last = i;
        }
    }
    res = Math.max(res, n - last - 1);
    return res;
}

let result = maxDistToClosest([1,0,0,0,1,0,1]);
console.log(result);