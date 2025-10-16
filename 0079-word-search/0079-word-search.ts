function exist(board: string[][], word: string): boolean {
    const char = word[0];
    const indexs = [];
        for(let i = 0; i < board.length;i++){
            for(let j = 0; j < board[i].length; j++){
                if(board[i][j] == char){
                    indexs.push([i,j])
                }
            }
    }

    let ans = false;
    function wordExist(idxs,r,preIdxs){
        if(r == word.length && idxs.length) ans = true;
        if(!idxs.length || r >= word.length) return;
        for(let k = 0; k < idxs.length;k++){
            const [i,j] = idxs[k];
            const char = word[r];
            const nextIdxs = [];
            if(!preIdxs.includes(`${i}${j-1}`) && char == board[i]?.[j-1]){
               nextIdxs.push([i,j-1])
            }
            if(!preIdxs.includes(`${i-1}${j}`) && char == board[i-1]?.[j]){
               nextIdxs.push([i-1,j])
            }
            if(!preIdxs.includes(`${i}${j+1}`) && char == board[i]?.[j+1]){
               nextIdxs.push([i,j+1])
            }
            if(!preIdxs.includes(`${i+1}${j}`) && char == board[i+1]?.[j]){
               nextIdxs.push([i+1,j])
            }
            preIdxs.push(`${i}${j}`)
            wordExist(nextIdxs,r+1,preIdxs);
            preIdxs.pop();
        }
    }

    wordExist(indexs,1,[]);

    return ans;
};