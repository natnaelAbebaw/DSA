function isAnagram(s: string, t: string): boolean {
    if(s.length !== t.length){
        return false;
    }
    const count = {}
    

    for(const char of s){
       count[char] = count[char] ? count[char] + 1 : 1; 
    }

    for(const char of t){
      if(!count[char]){
        return false
      }
      count[char] = count[char] - 1
    }

    return true;
};