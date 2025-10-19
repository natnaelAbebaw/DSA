function numIslands(grid: string[][]): number {
    const visited = new Set();
    let ilands = 0;
    for(let i = 0;i<grid.length;i++){
       for(let j = 0;j<grid[i].length;j++){
         const val = grid[i][j]   
         if(val == "1" && !visited.has( `${i}-${j}`)){
            ilands++
            
            dfs(i,j);
         }
       }
    }
    
    function dfs(i,j){
        if( i < 0 || i >= grid.length || j < 0 || j >= grid[i]?.length || grid[i][j] == "0" || visited.has( `${i}-${j}`) ) return;
        visited.add( `${i}-${j}`);
        dfs(i+1,j);
        dfs(i,j+1);
        dfs(i-1,j);
        dfs(i,j-1);
    };

   return ilands;
    
};