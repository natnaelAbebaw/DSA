/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     neighbors: _Node[]
 * 
 *     constructor(val?: number, neighbors?: _Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.neighbors = (neighbors===undefined ? [] : neighbors)
 *     }
 * }
 * 
 */


function cloneGraph(node: _Node | null): _Node | null {
    const hashmap = new Map();
    const visited = new Set();
    function dfs(node){
       if(!node || visited.has(node.val)) return;
       const newNode = hashmap.has(node.val) ? hashmap.get(node.val) : new _Node(node.val); 
       hashmap.set(newNode.val, newNode);
       visited.add(node.val)
       for(let n of node.neighbors){
         const newN = hashmap.has(n.val) ? hashmap.get(n.val) : new _Node(n.val); 
         hashmap.set(newN.val, newN);
         newNode.neighbors.push(newN)
         dfs(n);
       } 
    }

    dfs(node)
    return hashmap.get(node?.val)
};