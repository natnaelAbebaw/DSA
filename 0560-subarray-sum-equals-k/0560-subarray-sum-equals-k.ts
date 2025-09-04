function subarraySum(nums: number[], k: number): number {
    const ps = [];
    let result = 0;
    for(let i = 0; i < nums.length; i++){
        ps[i]= (ps[i-1] || 0) + nums[i]
    }
   
    for(let j = 0; j < ps.length;j++){
        let val = ps[j];
        let m = j - 1;
        if(val == k){
            result++ 
        }
        while(m >= 0){
            val = ps[j] - ps[m] 
            if(val == k){
               result++ 
            }
            m--
        }
 
    }

    return result;
};