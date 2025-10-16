function letterCombinations(digits: string): string[] {
    const map = {
        "2":["a","b","c"],
        "3":["d","e","f"],
        "4":["g","h","i"],
        "5":["j","k","l"],
        "6":["m","n","o"],
        "7":["p","q","r","s"],
        "8":["t","u","v"],
        "9":["w","x","y","z"],
    }
    const ans = []
    function comb(res,dig,i){
        if(res.length  == dig.length){
           ans.push(res)
           return;
        }
        const l = map[dig[i]]

        for(let k = 0; k < l.length; k++){
            comb(res + l[k], dig, i + 1)
        }
    }
    comb("",digits.toString(),0)
    return ans;
};