function ladderLength(beginWord: string, endWord: string, wordList: string[]): number {
    if(!wordList.includes(endWord)){
        return 0;
    }
    const queue = [beginWord];
    let minseq = 1;
    queue.push("#");
    const seen = new Set();
    let last  = "";

    const wordMap = {};
    for(let word of wordList){
        for(let i = 0;i < word.length;i++){
           const nw =  word.slice(0, i) + "*" + word.slice(i + 1)
           if(wordMap[nw]){
             wordMap[nw].push(word)
           }else{
              wordMap[nw] = [word]
           }
        }
    }

    while(queue.length){
        const w = queue.shift();
        if(w == endWord) { 
        last = w;
        break;
        }
        if(w == "#"){
           minseq++;
           if(queue.length) queue.push("#");
        }else{
            seen.add(w)
            for(let i = 0;i<w.length;i++){
                  const nw =  w.slice(0, i) + "*" + w.slice(i + 1)
                  const nighbors = wordMap[nw];
                  if(!nighbors) continue;
                  for(let nighbor of nighbors){
                  if(!seen.has(nighbor)){
                    queue.push(nighbor)
                  }}
               
            }
        }
    }

    return last ? minseq : 0;
};