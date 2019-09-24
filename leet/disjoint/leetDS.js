function equationsPossible(equations) {
        let ds = new DJSet(26);
        for(let e of equations){
            if(e.charAt(1) == '='){
                let l = e.charAt(0)-'a';
                let r = e.charAt(3)-'a';
                ds.union(l, r);
            }
        }
        for(let e of equations){
            if(e.charAt(1) == '!'){
                let l = e.charAt(0)-'a';
                let r = e.charAt(3)-'a';
                if(ds.equiv(l, r)){
                    return false;
                }
            }
        }
        return true;
    }

class DJSet {
    constructor(n){
        this.upper = new Array(n).fill(-1) ;
    }

    root(x) {
    return this.upper[x] < 0 ? x : (this.upper[x] = this.root(this.upper[x]));
    }

    equiv(x,y) {
            return this.root(x) == this.root(y);
        }

     union(x, y) {
            x = this.root(x);
            y = this.root(y);
            if (x != y) {
                if (this.upper[y] < this.upper[x]) {
                    let d = x;
                    x = y;
                    y = d;
                }
                this.upper[x] += this.upper[y];
                this.upper[y] = x;
            }
            return x == y;
        }

        count() {
            let ct = 0;
            for (let u of this.upper)
                if (u < 0)
                    ct++;
            return ct;
        }
    }

   var input = ["a==b","b==c","a==c"];
   var res = equationsPossible(input);
   console.log(res);