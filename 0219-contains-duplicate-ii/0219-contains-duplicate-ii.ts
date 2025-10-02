function containsNearbyDuplicate(nums: number[], k: number): boolean {
    const set = new Set();
    let l = 0;
    for(let r = 0;r<nums.length;r++){
         if(Math.abs(r-l) > k){
            set.delete(nums[l])
            l++
        }
        if(set.has(nums[r])){
            return true;
        }
        set.add(nums[r])
    }
    return false;
};