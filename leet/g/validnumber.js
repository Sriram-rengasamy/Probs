
function rotatedDigits(N) {
        let count = 0;
        for (let i = 1; i <= N; i ++) {
            if (isValid(i)) count ++;
        }
        return count;
}
    
function isValid(N) {
/*
    Valid if N contains ATLEAST ONE 2, 5, 6, 9
    AND NO 3, 4 or 7s
*/
let validFound = false;
while (N > 0) {
    if (N % 10 == 2) validFound = true;
    if (N % 10 == 5) validFound = true;
    if (N % 10 == 6) validFound = true;
    if (N % 10 == 9) validFound = true;
    if (N % 10 == 3) return false;
    if (N % 10 == 4) return false;
    if (N % 10 == 7) return false;
    N = N / 10;
}
return validFound;
}
