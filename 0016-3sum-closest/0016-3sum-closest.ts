function threeSumClosest(nums: number[], target: number): number {
    let m = Infinity;
    nums.sort((a,b) => a - b);
    for(let i = 0;i<nums.length-2;i++){
      let l = i+1;
      let r = nums.length-1;
      while(l < r){
        const sum = nums[l] + nums[r] + nums[i];
        const d1 = sum-target;
        if(Math.abs(d1) <= Math.abs(m - target)){
          m = sum;
        }
        if(d1 < 0 ){
            l++
        }else{
            r--
        }
      }
    }
    return m;
};