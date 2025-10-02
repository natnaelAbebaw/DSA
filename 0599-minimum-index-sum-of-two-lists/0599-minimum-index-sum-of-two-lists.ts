function findRestaurant(list1: string[], list2: string[]): string[] {
    const mapList1  =  {};
    list1.forEach((a,i)=> {  mapList1[a] = !mapList1[a] ? i: mapList1[a]})
    let min = Infinity;
    let ans = [];
    
    for(let i = 0;i<list2.length;i++){
     const j = mapList1[list2[i]];
        if(j != undefined && j + i < min){
            min = j + i;
            ans = [list2[i]]
        }else if(j+i == min){
            ans.push(list2[i])
        }
      }
    
    return ans;
};