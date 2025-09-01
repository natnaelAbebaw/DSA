function isPalindrome(s: string): boolean {
    const AlphanumericTest = /[a-zA-Z0-9]/;
    const Alphanumerics = [];
    for(const char of s){
       if(AlphanumericTest.test(char)){
         Alphanumerics.push(char.toLowerCase())
       }
    }

    let i = 0;
    let j = Alphanumerics.length - 1;

    while( i < j){
        if(Alphanumerics[i] != Alphanumerics[j]){
            return false;
        }
        i++
        j--
    }

    return true;
};