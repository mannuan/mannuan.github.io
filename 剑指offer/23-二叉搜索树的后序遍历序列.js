// 题目描述
// 输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历的结果。
// 如果是则输出Yes,否则输出No。假设输入的数组的任意两个数字都互不相同。

function VerifySquenceOfBST(sequence)
{
    // write code here
    if(sequence.length == 0){
        return false;
    }
    if(sequence.length == 1){
        return true;
    }
    root = sequence.pop();
    left = [];
    for(var i=0;i<sequence.length;i++){
        if(sequence[i] > root){
            break
        }
        left.push(sequence[i]);
    }
    right = sequence.splice(i);
    if(right.length <= 1){
        return true;
    }
    for(var i=0;i<right.length;i++){
        if(right[i] < root){
            return false;
        }
    }
    arguments.callee(left);
    arguments.callee(right);
    return true;
}
module.exports = {
    VerifySquenceOfBST : VerifySquenceOfBST
};