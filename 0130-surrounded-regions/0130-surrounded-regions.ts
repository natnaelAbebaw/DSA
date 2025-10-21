/**
 Do not return anything, modify board in-place instead.
 */
function solve(board: string[][]): void {
    const escapedR = new Set()
    const dirs = [[0,1],[1,0],[0,-1],[-1,0]];
    function dfs(r,c){
       escapedR.add(`${r}-${c}`);
       for(const [nr,nc] of dirs){
          if(r+nr >= 0 && r+nr < board.length && c+nc >=0 && c+nc < board[0].length &&  !escapedR.has(`${r+nr}-${c+nc}`) && board[r+nr][c+nc] != "X"){
            dfs(r+nr,c+nc)
          }
       }
    }
    
    for(let i = 0; i < board.length;i++){
        if(board[i][0] == "O") dfs(i,0);
        if(board[0][i] == "O") dfs(0,i);
        if(board[i][board[0].length-1] == "O") dfs(i,board[0].length-1);
        if(board[board.length-1][i] == "O") dfs(board.length-1,i);
    }

    for(let i = 1; i < board.length-1;i++){
        for(let j = 1; j < board[i].length -1;j++){
           if(board[i][j] == "O" &&  !escapedR.has(`${i}-${j}`)){
               board[i][j]  = "X"
           }
    }
    }
    
};