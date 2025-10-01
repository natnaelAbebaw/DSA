function isIsomorphic(s: string, t: string): boolean {
    const set = new Set();
    const so = [];
    for(let i = 0;i<s.length;i++){
        if(!set.has(s[i])){
            so.push(s[i])
            set.add(s[i])
        }
    }
    
    let ms = "";
    const map = {};
    so.reverse()
 
    for(let i =0;i<t.length;i++){
        if(map[t[i]]){
            ms += map[t[i]]
        }else{
            const c = so.pop();
            map[t[i]] = c;
            ms += c;
        }
    }
    console.log(ms,s)
    return ms === s;

};