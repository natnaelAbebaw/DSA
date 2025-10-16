function permute(nums: number[]): number[][] {
    const result = []
    function per(res){
        if(res.length == nums.length){
            result.push(res)
            return
        }
        for(let i = 0;i < nums.length;i++){
            if(res.includes(nums[i])) continue;
            res.push(nums[i])
            per([...res])
            res.pop();
        }
    }
    per([])
    return result;
};