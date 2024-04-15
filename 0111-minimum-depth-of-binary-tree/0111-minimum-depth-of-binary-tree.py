# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def minDepth(self, root: Optional[TreeNode]) -> int:
    
        def depthMin(node,depth=1):
            if node and (not node.left) and (not node.right):
                return depth
            depth1 =  depthMin(node.left,depth+1) if(node.left) else None
            depth2 = depthMin(node.right,depth+ 1) if(node.right) else None
            return (depth1 and depth2 and min(depth1,depth2)) or depth1 or depth2
        return depthMin(root)




