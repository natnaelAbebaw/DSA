function criticalConnections(n: number, connections: number[][]): number[][] {
    const cc = new Map();
    const rank = {};
    const graph = {};
    const res = [];
    for(const [u,v] of connections){
       (graph[v] ||= []).push(u);
       (graph[u] ||= []).push(v);
       cc.set(`${Math.min(v,u)},${Math.max(v,u)}`,1)
    }
  
    function dfs(n,r){
        if(rank[n]) return rank[n];
        rank[n] = r;
        let min = r+1;
        for(const ni of graph[n]){
            if(rank[ni] && rank[ni] + 1 == r) continue;
            const rr = dfs(ni,r+1);
            if(rr <= r){
                cc.delete(`${Math.min(n,ni)},${Math.max(n,ni)}`);
            }
            min = Math.min(min,rr);
        }

        return min;
    }

    dfs(0,0)
    return Array.from(cc.keys()).map(s=>
    {
        const [u,v] = s.split(",");
        return [Number(u),Number(v)]
    }
    );
};