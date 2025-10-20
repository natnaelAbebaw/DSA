function orangesRotting(grid: number[][]): number {
    const R = grid.length, C = grid[0].length;
    const q = [];
    let freshOrange = 0;
    for(let i = 0;i<grid.length;i++){
         for(let j = 0;j<grid[i].length;j++){
            if(grid[i][j]==2){ q.push([i,j]);}
            else if(grid[i][j] == 1){ freshOrange++;}
        }
    }
  let minuiteElapsed = -1;
  q.push([-1,-1]);
  const dirs = [[1,0],[-1,0],[0,1],[0,-1]];
  while (q.length) {

    const [r, c] = q.shift()!;

    if(r == -1){
       minuiteElapsed++;
       if(q.length) q.push([-1,-1])
    }else{
    for (const [dr, dc] of dirs) {
      const nr = r + dr, nc = c + dc;
      if (nr>=0 && nr<R && nc>=0 && nc<C) {
        if(grid[nr][nc] == 1) {
          grid[nr][nc] = 2;
          q.push([nr,nc])
           freshOrange--;
        }
      }
    }

    }
  }


  return freshOrange == 0 ? minuiteElapsed : -1;

};