function generateParenthesis(n: number): string[] {
    const ans = [];

    function isValid(pars){
        if(pars[0] == ")") return false;
        const stack = [];
        for(let par of pars){
            if(par == "("){
                stack.push("(")
            }else{
                stack.pop()
            }
        }
        return stack.length == 0;
    }

    function genPar(res,i){
        if(res.length == n * 2){
            if(isValid(res)) ans.push(res)
            return;
        }
        const lastChar = res[res.length -1]
        const blchars = res.slice(0,-1);
        if(lastChar == ")"  && isValid(blchars)) return;
      
       const pars =  ["(",")"]
       for(let par of pars){
          genPar(res + par,i+1);
       }
    }

    genPar("",0);
    return ans;
};