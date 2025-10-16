function permuteUnique(nums: number[]): number[][] {
    nums.sort((a,b)=>a - b);
    const result = []
    function per(res,idxs){
        if(res.length == nums.length){
            result.push(res)
            return
        }
        const v = []
        for(let i = 0;i < nums.length;i++){
            if(idxs.includes(i)) continue;
            if(v.includes(nums[i])) continue;
            v.push(nums[i])
            res.push(nums[i])
            idxs.push(i)
            per([...res],[...idxs], )
            res.pop();
            idxs.pop();
        }
    }
    per([],[])
    return result;
};
