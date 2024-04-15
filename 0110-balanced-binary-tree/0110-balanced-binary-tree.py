# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isBalanced(self, root: Optional[TreeNode]) -> bool:
        def height(node):
            if not node:
                return 0
            left = height(node.left)
            right = height(node.right)
            return max(left,right)+1
        def balanced(node):
            if not node:
                return True
            if abs(height(node.left)-height(node.right))>1:
                return False
            left = balanced(node.left)
            right = balanced(node.right)
            return left and right

        return balanced(root)
        



            

        

        