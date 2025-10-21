function maxAreaOfIsland(grid: number[][]): number {
    const seens = new Set();
    let maxArea = 0;
    const dirs = [[0,1],[1,0],[0,-1],[-1,0]]
    let lma = 0;
    function dfs(r,c){
     grid[r][c] = 0;
     lma++
     for(const [nr,nc] of dirs){
        const rr = nr + r;
        const cc = nc + c;
        if(rr>= 0 && rr < grid.length && cc >= 0 && cc < grid[0].length && grid[rr][cc] == 1){
           dfs(rr,cc);
        }
     }
    }

    for(let i = 0;i<grid.length;i++){  
       for(let j = 0;j<grid[i].length;j++){
        if(grid[i][j] == 1){
            dfs(i,j)
            maxArea = Math.max(maxArea,lma);
            lma = 0;
        }
      }
    }

    return maxArea;
};