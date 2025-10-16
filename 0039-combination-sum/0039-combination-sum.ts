function combinationSum(candidates: number[], target: number): number[][] {
    candidates.sort((a,b)=> a-b)
    const comb = [];
    (function dfs(cad,sum,idx){
        for(let i = idx;i<candidates.length;i++){
           const newSum = sum + candidates[i]
           if(newSum > target) return;
           cad.push(candidates[i])
           if(newSum < target){
               dfs(cad,newSum,i)
               cad.pop()
            }else if(newSum == target){
               comb.push([...cad])
               cad.pop()
               return;
            }
        }
    })([],0,0)

    return comb;
};