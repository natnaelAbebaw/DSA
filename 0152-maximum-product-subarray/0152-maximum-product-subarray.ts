function maxProduct(nums: number[]): number {
    if(nums.length === 0){
        return 0;
    }
    let max_so_far = nums[0]
    let min_so_far = nums[0]
    let result = max_so_far

    for(let i =1;i < nums.length;i++){
        const current = nums[i]
        const temp_max = Math.max(current,Math.max(current* max_so_far,current*min_so_far))
        min_so_far = Math.min(current,Math.min(current* max_so_far,current*min_so_far))
        max_so_far = temp_max
        result = Math.max(max_so_far, result)
    }


    return result;
};