function solveNQueens(n: number): string[][] {
    
    const ans = [];
    function solve(res,p,r){
        if(p.length){
        const [rr,c] = p[p.length-1];
        for(let j = 0; j < p.length-1; j++){
           const [r2,c2] = p[j];
           if(c2 == c || rr == r2 || Math.abs(c-c2) == Math.abs(rr-r2)){
            return;
           }
        }
           
        }
        if(r == n){
          ans.push([...res]);
          return;
        }

        for(let i = 0;i<n;i++){
          const row = ".".repeat(i) + "Q" + ".".repeat(n - i - 1);
          res.push(row);
          p.push([r,i])
          solve(res,p,r+1)
          res.pop();
          p.pop();
        }
    }

    solve([],[],0)

    return ans;
};