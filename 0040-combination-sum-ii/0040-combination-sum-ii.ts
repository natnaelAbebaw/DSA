function combinationSum2(candidates: number[], target: number): number[][] {
    candidates.sort((a,b)=> a-b)
    const comb = [];
    (function dfs(preCad,cad,sum,idx){
        let hasSame = false;
        for (let i = 0; i < preCad?.length; i++) {
            if (preCad[i] !== cad[i]){
                 hasSame = false;
                 break;
            }else if(preCad[i] == cad[i]){
                 hasSame = true;
            }
        }
        if(hasSame && preCad.length == cad.length && preCad.length > 0) return;
        preCad = [...cad]
        for(let i = idx;i<candidates.length;i++){
           const newSum = sum + candidates[i]
           if(newSum > target) return;
           if(i-1 >= idx && candidates[i-1]){  
           preCad.push(candidates[i-1])
           }
           cad.push(candidates[i])
           if(newSum < target){
               dfs([...preCad],cad,newSum,i+1)
               cad.pop();
               if(i !== idx) preCad.pop();
            }else if(newSum == target){
               comb.push([...cad])
               cad.pop();
               return;
            }
        }
    })([],[],0,0)

    return comb;
};