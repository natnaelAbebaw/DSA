function alienOrder(words: string[]): string {
    const graph = {};
    const indgree = {};
    for(const word of words){
     for(const char of word){
        graph[char] = [];
        indgree[char] = 0;
    }
    }
    for(let i = 1;i < words.length;i++){
        let b = 0;
        for(let j = 0;j < words[i].length;j++){
            if(words[i][j] != words[i-1][j] && words[i-1][j]){
               (graph[words[i-1][j]] ||= []).push(words[i][j]);
               indgree[words[i][j]] = (indgree[words[i][j]] || 0) + 1;
               break;
            }else{
               b++
            }
        }
        console.log(b)
        if(b == words[i].length && words[i-1][words[i].length]) return ""

    }

    const queue = [];
    let head = 0;
    
    for(const k in indgree){
        if(indgree[k]==0) queue.push(k);
    }
    
    let v = "";
    while(head < queue.length){
        const n = queue[head++]
        v = v+n;
        for(const ni of (graph[n]|| [])){
            indgree[ni]--
            if(indgree[ni] == 0){
                queue.push(ni)
            }
        }
    }

   return v.length !== Object.keys(indgree).length ? "" : v;
};