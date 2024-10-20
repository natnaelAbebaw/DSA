class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        a = []
        sorted_nums = sorted(nums)
        i = 0
        while i < len(sorted_nums):
            j = i + 1
            k = len(sorted_nums)-1
            while j < k and j < len(sorted_nums)-1:
                total = sorted_nums[i] + sorted_nums[j] + sorted_nums[k]
                if(total == 0):
                    a.append([sorted_nums[i], sorted_nums[j], sorted_nums[k]])
                while total == 0 and j + 1 < len(sorted_nums)-1 and  sorted_nums[j] == sorted_nums[j + 1]:
                    j += 1
                if(total > 0):
                    k -= 1
                else:
                    j += 1
            while i + 1 < len(sorted_nums)-1 and  sorted_nums[i] == sorted_nums[i + 1]:
                    i += 1
            i += 1
            
        return a


        