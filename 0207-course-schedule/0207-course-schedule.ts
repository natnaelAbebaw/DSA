function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    const graph = {};
    for(const [u,v] of prerequisites){
      (graph[v] ||= []).push(u);
    }

    let hasCycle = false;
    const seens = new Set();
    console.log(graph);
    function dfs(n,cseens){
        seens.add(n)
        const nis = graph[n] || [];
        for(const ni of nis){
            if(cseens.has(ni)){
            hasCycle = true;
            continue;
            };
            if(seens.has(ni)) continue;
            cseens.add(ni);
            dfs(ni,cseens);
            cseens.delete(ni);
        }
    }


    for(let i = 0; i<numCourses; i++){
        if(!seens.has(i)){
         const cseens = new Set([i]);
         dfs(i,cseens);
        };
    }

    return !hasCycle;

};