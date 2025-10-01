function longestOnes(nums: number[], k: number): number {
    const qeaue = [];
    let max = 0;
    let l = 0;
    for(let r=0;r < nums.length;r++){
 
        if(nums[r] == 0){
            qeaue.push(r)
            if(qeaue.length > k){
              l = qeaue.shift() + 1;
            } 
        }

         max = Math.max(max, r-l+1) ;
       
    }
    
    return max;
};

