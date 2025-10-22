function isBipartite(graph: number[][]): boolean {
    const n = graph.length;
    const color = new Array(n).fill(-1); // -1 = uncolored, 0/1 = two colors

    for (let node = 0; node < n; node++) {
      if (color[node] !== -1) continue;

      const stack = [node];
      color[node] = 0;

      while (stack.length) {
        const u = stack.pop();
        for (const v of graph[u]) {
          if (color[v] === -1) {
            color[v] = color[u] ^ 1; // flip color
            stack.push(v);
          } else if (color[v] === color[u]) {
            return false; // same color on an edge -> not bipartite
          }
        }
      }
    }
    return true;
};