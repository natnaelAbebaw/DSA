function subsets(nums: number[]): number[][] {
    const subset = [];
    function sub(arr,i){
        if(i == nums.length-1){
            subset.push(arr)
            subset.push([...arr,nums[i]])
            return 
        }
        sub(arr,i+1)
        sub([...arr,nums[i]],i+1);
    }
    sub([],0)
    return  subset;
};