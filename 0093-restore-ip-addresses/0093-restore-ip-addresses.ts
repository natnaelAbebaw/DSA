function restoreIpAddresses(s: string): string[] {
    const ans = []
    function restore(adr,i,k){
        const lastNum = s.slice(i);
        if(k == 3 && Number(lastNum) > 255) return;
        if (k === 3 && (lastNum.length === 1 || (lastNum.length > 1 && lastNum[0] !== "0"))) {
            ans.push(`${adr}.${lastNum}`);
            return;
}

        for(let r = i;r < s.length;r++){
            const str = s.slice(i,r+1);
            if(Number(str[0]) == 0 && str.length > 1) continue;
            const newAdr = `${adr ? adr + "." + str : str}`; 
            if(Number(str) > 255) continue;
            restore(newAdr, i + str.length,k+1)
        }
     }
   
    restore("",0,0);
    return ans
};