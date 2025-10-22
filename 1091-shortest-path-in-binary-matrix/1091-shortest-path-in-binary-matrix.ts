function shortestPathBinaryMatrix(grid: number[][]): number {
    if(grid[0][0] != 0 || grid[grid.length-1][grid[0].length-1] != 0) return -1;
   const queue = [[0,0]];
   let head = 0;
   let shortPath = 0;
   let gotPath = false;
   queue.push([-1,-1]);
   const dirs = [[1,1],[0,1],[1,0],[-1,1],[0,-1],[-1,0],[1,-1],[-1,-1]];
   while(head < queue.length){
    const [r,c] = queue[head++];
    if(r == -1){
        shortPath++;
        if(head < queue.length) queue.push([-1,-1]);
    }else{
       grid[r][c] = 1;
       if(r == grid.length-1 && c == grid[0].length -1){
          gotPath = true;
          shortPath++
          break;
       }
       for(const [nr,nc] of dirs){
         const rr = nr + r;
         const cc = nc + c;
         if(rr >= 0 && rr < grid.length && cc >= 0 && cc < grid[rr].length && grid[rr][cc] == 0){
            queue.push([rr,cc]);
         }
       }
    }
   }
   return gotPath ? shortPath : -1;
};