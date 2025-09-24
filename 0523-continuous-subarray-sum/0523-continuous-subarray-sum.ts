function checkSubarraySum(nums: number[], k: number): boolean {
    const prefixSumMod = [(nums[0] % k)]
    let sum = nums[0];
    const map = {};
    for(let i =1;i< nums.length;i++){
       sum += nums[i];
       prefixSumMod.push(sum % k);
    }
    console.log(prefixSumMod);
    for(let r=0; r < prefixSumMod.length;r++){
        if(((prefixSumMod[r] in map) && (r - map[prefixSumMod[r]] > 1)) || (( r>0) && (prefixSumMod[r] == 0))){
            return true;
        }
        if(!(prefixSumMod[r] in map)){
            map[prefixSumMod[r]] = r
        }
    }
    return false;
};