function findAnagrams(s: string, p: string): number[] {
    let l = 0;
    const result = [];
    
    const fp = {};
    const fs = {};

    for(let char of p){
      fp[char] = ( fp[char] || 0) + 1;
    }

    function checkAnagram(ms,mp){
      for(let key in mp){
        if(!ms[key] || mp[key] !== ms[key]) return false;
      }
      return true;
    }

    for(let r = 0;r < s.length; r++){
        const char  = s[r];
        const w = r-l + 1;
        if(char in fp){
           fs[char] = ( fs[char] || 0) + 1;
        }
        if(w >= p.length){
            if(checkAnagram(fs,fp)){
              result.push(l);
            }
            const char = s[l];
            if(char in fp){
            fs[char] = ( fs[char] || 0) - 1;
            }
            l++
        }
    }

    return result;
    
};