function maxSatisfied(customers: number[], grumpy: number[], minutes: number): number {
    let max = [0,0,0]
    let l = 0;
    let c  = 0;
    for(let r = 0;r<grumpy.length;r++){
        c += grumpy[r] ? customers[r] : 0;
        if(r-l + 1 >= minutes){
          if(c > max[0]){
            max = [c,l,r]
           }
           c -=  grumpy[l] ? customers[l] : 0;
           l++
        }
    }

    for(let i = max[1]; i <= max[2];i++){
        grumpy[i] = 0;
    }

    console.log(max,grumpy);
    return customers.reduce((acc,c,i)=> grumpy[i]?acc:acc + c, 0);
};