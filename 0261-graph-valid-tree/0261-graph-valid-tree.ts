function validTree(n: number, edges: number[][]): boolean {
    if(!edges.length) return n == 1;
    const adjecentList = {};
    for(const [p,c] of edges){
        if(adjecentList[p]){
             adjecentList[p].push(c)
        }else{
             adjecentList[p] = [c]
        }
        if(adjecentList[c]){
             adjecentList[c].push(p)
        }else{
             adjecentList[c] = [p]
        }
    }
    const seen = new Set();
    let hasCycle = false;
    function dfs(n,p=null){
        if(seen.has(n)){
            hasCycle = true;
            return;
        }
        seen.add(n);
        const childs = adjecentList[n]
        for(const c of childs){
            if(c != p) dfs(c,n);
        }
    }

    dfs(edges[0][0])

    return seen.size == n && !hasCycle;
};