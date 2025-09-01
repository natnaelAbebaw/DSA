function maxArea(height: number[]): number {
  let max = 0;
  let i = 0;
  let j = height.length - 1;
  while (i != j){
    max = Math.max(max, (j-i) * Math.min(height[j],height[i]))
    if(height[i] > height[j]){
        j--
    }else{
        i++
    }
  }  

  return max;
};