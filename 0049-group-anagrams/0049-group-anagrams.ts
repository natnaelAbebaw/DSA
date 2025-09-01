function groupAnagrams(strs: string[]): string[][] {
    const sortDic = {}
    for(const str of strs){
        const sortedStr = str.split("").sort().join("");
        if(sortDic[sortedStr]){
            sortDic[sortedStr].push(str)
        }else{
            sortDic[sortedStr] = [str]
        }
    }

    return Object.values(sortDic);
};