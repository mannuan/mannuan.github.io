// 题目描述
// 从上往下打印出二叉树的每个节点，同层节点从左至右打印。


/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function PrintFromTopToBottom(root)
{   
    if(!root){
        return []
    }
    var queue = [root];
    var arr = []
    while(queue.length){
        node = queue.splice(0,1)[0]
        arr.push(node.val);
        if(node.left){
            queue.push(node.left);
        }
        if(node.right){
            queue.push(node.right);
        }
    }
    return arr;
}
module.exports = {
    PrintFromTopToBottom : PrintFromTopToBottom
};