function longestConsecutive(nums: number[]): number {
    if(nums.length <= 0){
        return 0;
    }
    const seqMap = {};
    const seqSet = new Set(nums);
    for(const num of nums){
        if(!(num in seqMap)){
            if(seqSet.has(num-1)){
                seqMap[num-1] = num
            }
            if(seqSet.has(num+1)){
                 seqMap[num] = num + 1
            }
        }
    }
    
  const memo = new Map();
  const hasKey = (k) => Object.prototype.hasOwnProperty.call(seqMap, k);

  function dfs(x) {
    if (memo.has(x)) return memo.get(x);
    if (!hasKey(x)) return 1;
    const res = 1 + dfs(seqMap[x]);
    memo.set(x, res);
    return res;
  }

  let best = 1;
  for (const k in seqMap) {
    if (Object.prototype.hasOwnProperty.call(seqMap, k)) {
      best = Math.max(best, dfs(k));
    }
  }

  return best;
};