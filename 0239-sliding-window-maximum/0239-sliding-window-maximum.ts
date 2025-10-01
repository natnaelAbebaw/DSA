function maxSlidingWindow(nums: number[], k: number): number[] {
    if(k == 1){
        return nums;
    }
    const ans = [];
    let l = 0;
    const mQeaue = [nums[l]];
    for(let r = 1;r< nums.length;r++){
        let j = mQeaue.length-1;
        while(mQeaue[j]< nums[r]){
             mQeaue.pop();
             j--
        }
        mQeaue.push(nums[r])

        if(r-l+1 >= k){
            ans.push(mQeaue[0])
            
            if(nums[l] == mQeaue[0]){
                mQeaue.shift();
            }
            l++
        }
    }

    return ans;
};