function countGoodSubstrings(s: string): number {
    let count = 0;
    const map = {};
    const set = new Set();
    let l = 0;
    map[s[l]] = 1;
    set.add(s[l])
    for (let r = 1; r < s.length; r++) {
        map[s[r]] =(map[s[r]] || 0) + 1;
        set.add(s[r]);
         if(r-l+1 == 3){
            if(set.size == 3){
                count++
            }
            map[s[l]]--
            if(!map[s[l]])
           { set.delete(s[l])}
            l++
         }
    }

    return count;
};