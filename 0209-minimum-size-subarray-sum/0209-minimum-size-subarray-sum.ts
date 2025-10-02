function minSubArrayLen(target: number, nums: number[]): number {
    let ans = Infinity;
    let l = 0;
    let sum = 0;
    for(let r = 0;r<nums.length;r++){
        sum += nums[r];

        if(sum >= target){
            ans = Math.min(ans, r-l+1)
        }
        if(ans == 1){
            break;
        }
        while(r-l+1 >= ans){
            sum -= nums[l]
            l++
            if(sum >= target){
            ans = Math.min(ans, r-l+1)
            }
        }
    }

    return ans === Infinity ? 0: ans;
 
};