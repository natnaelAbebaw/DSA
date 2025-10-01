function spiralOrder(matrix: number[][]): number[] {
    
    let ans = []

    while(matrix.length){
        const arr = matrix.shift();
        if(!arr.length) break;
        ans = ans.concat(arr);
      
        for(let arr of matrix){
            ans.push(arr.pop())
        }

        if(!matrix.length) break;
        const arr2 = matrix.pop().reverse();
        if(!arr2.length) break;
        ans = ans.concat(arr2);

        for(let i = matrix.length-1;i>=0;i--){
            ans.push(matrix[i].shift())
        }
    }

    return ans;
};