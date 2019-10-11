// 题目描述
// 输入两棵二叉树A，B，判断B是不是A的子结构。
// （ps：我们约定空树不是任意一个树的子结构)

function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}

function HasSubtree(pRoot1, pRoot2)
{
    var result = false;
    if(pRoot1 != null && pRoot2 != null){
        if(pRoot1.val == pRoot2.val){
            result = DoesTree1hasTree2(pRoot1, pRoot2);
        }
        if(result == null){
            result = arguments.callee(pRoot1.left, pRoot2);
        }
        if(result == null){
            result = arguments.callee(pRoot1.right, pRoot2);
        }
    }
    return result;
}
function DoesTree1hasTree2(pRoot1, pRoot2){
    if(pRoot2 == null){
        return true;
    }
    if(pRoot1 == null){
        return false;
    }
    if(pRoot1.val != pRoot2.val){
        return false;
    }
    return arguments.callee(pRoot1.left, pRoot2.left) && arguments.callee(pRoot1.right, pRoot2.right);
}
module.exports = {
    HasSubtree : HasSubtree
};

