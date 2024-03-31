class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        visited = set()
        cadidates = set()
        for i in nums:
            if i not in visited:
                visited.add(i)
                cadidates.add(i)
            elif i in visited and i in cadidates:
                cadidates.remove(i)
        for i in cadidates:
            return i
                
