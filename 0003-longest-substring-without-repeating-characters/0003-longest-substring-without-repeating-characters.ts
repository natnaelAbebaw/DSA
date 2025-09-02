function lengthOfLongestSubstring(s: string): number {
    if(!s){
        return 0;
    }
    let max = 1;
    const uniqueSet = new Set(s[0]);
    let i= 0;
    let j= 0;
    while(j < s.length-1){
     if(uniqueSet.has(s[j+1])){
        uniqueSet.delete(s[i]); 
        i++
        if(j < i){
            uniqueSet.add(s[j+1])
            j++
        }
     }else{
        uniqueSet.add(s[j+1])
        j++
        max = Math.max(max, (j - i)+1)
     }
    }

    return max;
};