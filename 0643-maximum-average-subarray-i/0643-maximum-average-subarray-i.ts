function findMaxAverage(nums: number[], k: number): number {
   let l  = 0;
   let max = -Infinity;
   let sum = 0

   for(let r = 0; r<nums.length; r++){
     sum += nums[r];
     if((r - l+1) > k){
       sum -= nums[l]
       l++
     }
     
     if((r-l+1) == k){
       max = Math.max(max, sum/(r-l+1))
     } 

   }

   return max;
};