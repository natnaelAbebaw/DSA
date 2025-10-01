function checkInclusion(s1: string, s2: string): boolean {
  const map1 = {};
  for(let char of s1){
    map1[char] = (map1[char] || 0 ) + 1;
  }

  let l = 0;
  let map2 = {}

  function sameObj(map1,map2){
      for(let key in map1){
            if(map1[key] !== map2[key]) return false;
        }
    
     return true;
  }


  map2[s2[l]] = 1;
  for(let r=1;r < s2.length;r++){
     map2[s2[r]] = (map2[s2[r]] || 0) + 1;
     if(r-l+1 >= s1.length){
        if(sameObj(map1,map2)){
            return true;
        }

        map2[s2[l]]--
        l++
     }
  }

  return false;
};