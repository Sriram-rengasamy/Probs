/* This is same as longest arithmetic sequence */
// Here the input is sorted order
function lengthLongestArithmeticProgression(arr){
    let n = arr.length;
    if(n <= 2)
        return n;

    let llap = 2;
    // Create a table and initialize  all values as 2. The value of  
    // L[i][j] stores LLAP with set[i] and set[j] as first two elements  
    // of AP. Only valid entries are  the entries where j>i
    let L = new Array(n);
    for(let i = 0; i < n; i++){
        L[i] = new Array(n).fill(0);
    }

    // Fill entries in last column as 2.  
    // There will always be two elements in AP with last number of set as  
    // second element in AP 
    for(let i = 0; i < n; i++){
        L[i][n -1] = 2;
    }

    // Consider every element as second element of AP 
    for(let j = n - 2; j >= 1; j--){
        let i = j - 1, k = j + 1;
        while(i >= 0 && k <= n -1){
            if(arr[i] + arr[k] < 2 * arr[j])
                k++;
            else if(arr[i] + arr[k] > 2 * arr[j]) {//  Before changing i, set L[i][j] as 2  
                    L[i][j] = 2
                    i--; }
            else {
            // Found i and k for j, LLAP with i and j as first two elements  
            // is equal to LLAP with j and k as first two elements plus 1.  
            // L[j][k] must have been filled before as we run the loop from right side    
            L[i][j] = L[j][k] + 1;     
            
            
            llap = Math.max(llap, L[i][j]); // Update overall LLAP, if needed  

           // Change i and k to fill more L[i][j] values for current j              
           i--; 
           k++;    
            }
        }
        // If the loop was stopped due to k becoming more than  
        // n-1, set the remaining  entties in column j as 2  
        while (i >= 0)  
        {  
            L[i][j] = 2;  
            i--;  
        }

    }
    console.log(L);
    return llap;
}
console.log(lengthLongestArithmeticProgression([3,6,9,12]));
