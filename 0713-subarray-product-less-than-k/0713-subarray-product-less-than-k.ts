function numSubarrayProductLessThanK(nums: number[], k: number): number {
    let count  = 0;
    let l = 0;
    let p = 1;
    let r = 0;
    while(r < nums.length && l < nums.length){
        p *= nums[r];
       if(p < k){
        count += (r-l)+1;
         r++
       }else{
        if(r< l){
            r = l;
        }
        p = p / nums[l]
        p = p / nums[r]
        l++
       }
    }

    return  count;
};