//https://leetcode.com/articles/parition-array-into-disjoint-intervals/
function partitionDisjoint(A) {
    let N = A.length;
    let maxleft = new  Array(N);
    let minright = new  Array(N);
    let m = A[0];
    for (let i = 0; i < N; ++i) {
        m = Math.max(m, A[i]);
        maxleft[i] = m;
    }

    m = A[N-1];
    for (let i = N-1; i >= 0; --i) {
        m = Math.min(m, A[i]);
        minright[i] = m;
    }

    for (let i = 1; i < N; ++i)
        if (maxleft[i-1] <= minright[i])
            return i;

    throw null;
}