function minWindow(s: string, t: string): string {
 const tmap = {};
 const smap = {};
 let SubStrs = [];
 let l = 0;

 for(let char of t){
    tmap[char] = (tmap[char] || 0) + 1
 }

 function allTIsInS(sm, tm){
    for(let key in tm){
        if((sm[key] || 0) < tm[key])
        return false;
    }
    return true;
 }

 for(let r = 0; r < s.length; r++){
    const char = s[r];

    if(char in tmap){
    smap[char] = (smap[char] || 0) + 1;
    }
    while(allTIsInS(smap,tmap)){
        const newSubStr = s.slice(l, r + 1);
        SubStrs.push(newSubStr);
        const char = s[l];
        if(char in tmap){
            smap[char] = (smap[char] || 0) - 1;
        }
        l++
    }
 }

console.log(SubStrs);

return SubStrs.length > 0 ? SubStrs.reduce((a, b) => a.length <= b.length ? a : b): "" ;

};