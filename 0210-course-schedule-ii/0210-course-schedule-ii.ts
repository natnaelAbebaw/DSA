function findOrder(numCourses: number, prerequisites: number[][]): number[] {
    const graph = {};
    for(const [u,v] of prerequisites){
      (graph[v] ||= []).push(u);
    }

    let hasCycle = false;
    const seens = new Set();
    const topSort = new Array(numCourses);
    let k = numCourses -1;
    function dfs(n,cseens,vn){
        seens.add(n)
        const nis = graph[n] || [];
        for(const ni of nis){
            if(cseens.has(ni)){
            hasCycle = true;
            continue;
            };
            if(seens.has(ni)) continue;
            cseens.add(ni);
            dfs(ni,cseens,vn);
            cseens.delete(ni);
        }
        vn.push(n);
    }


    for(let i = 0; i<numCourses; i++){
        if(!seens.has(i)){
         const cseens = new Set([i]);
         const vn = [];
         dfs(i,cseens,vn);
         for(let n of vn){
           topSort[k] = n;
           k--
         }
        };
    }

    return hasCycle ? []:  topSort;
};