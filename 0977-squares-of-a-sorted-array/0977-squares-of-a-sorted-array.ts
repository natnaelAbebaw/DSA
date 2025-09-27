function sortedSquares(nums: number[]): number[] {
    const stack = [];
    const sortedAarry = [];
    for(let i = 0;i<nums.length;i++){
        const num = nums[i]
        if(num < 0){
            stack.push(num**2);
        }else{
           while(stack[stack.length - 1]  <= num**2){
             sortedAarry.push(stack.pop());
           }
           sortedAarry.push(num**2);
        }
        
    }

    return sortedAarry;
};