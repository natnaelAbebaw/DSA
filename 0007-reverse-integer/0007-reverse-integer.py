class Solution:
    def reverse(self, x: int) -> int:
        res = 0
        if x >= 0:
            res = int(str(x)[::-1])
        else:
            res = -1*(int(str(-1*x)[::-1]))
        
        if res > (2**31)-1 or res < -1*2**31:
            res = 0

        return res
        