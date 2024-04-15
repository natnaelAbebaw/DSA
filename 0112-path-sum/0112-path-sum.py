# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def hasPathSum(self, root: Optional[TreeNode], targetSum: int) -> bool:
        
        def pathsum(node, sum = 0):
            if node and (not node.left) and (not node.right):
                return sum + node.val == targetSum

            left = pathsum(node.left,node.val+sum) if node.left else False
            right = pathsum(node.right,node.val+sum) if node.right else False
            return left or right
        return (root and pathsum(root)) or False