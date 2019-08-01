// 题目描述
// 输入一颗二叉树的根节点和一个整数，打印出二叉树中结点值的和为输入整数的所有路径。
// 路径定义为从树的根结点开始往下一直到叶结点所经过的结点形成一条路径。
// (注意: 在返回值的list中，数组长度大的数组靠前)


/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function FindPath(root, expectNumber)
{
    // write code here
    if(root == null){
        return []
    }
    var stack = [root];
    var seen = [];
    var result = [];
    while(stack.length){
        root = stack[stack.length-1];
        // 叶子节点
        if(!root.left&&!root.right){
            var sum = 0;
            for(var i=0;i<stack.length;i++){
                sum += stack[i].val;
            }
            if(sum == expectNumber){
                if(result.length){
                    if(result[-1].length < stack.length){
                        var tmp = result.pop()
                        result.push([]);
                        for(var i=0;i<stack.length;i++){
                            result[-1].push(i.val);
                        }
                        result.push(tmp);
                    }else{
                        result.push([]);
                        for(var i=0;i<stack.length;i++){
                            result[-1].push(i.val);
                        }
                    }
                }else{
                    result.push([]);
                    for(var i=0;i<stack.length;i++){
                        result[-1].push(i.val);
                    }
                }
            }
            stack.pop();
        }else{
            if(root.left){
                if(seen.includes(root.left.val)){
                    stack.push(root.left);
                    seen.push(root.left.val);
                    continue
                }
            }
            if(root.right){
                if(seen.includes(root.right.val)){
                    stack.push(root.right);
                    seen.push(root.right.val);
                    continue
                }
            }
            stack.pop();
        }
    }
    return result;
}
module.exports = {
    FindPath : FindPath
};