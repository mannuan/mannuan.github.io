// 题目描述
// 用两个栈来实现一个队列，完成队列的Push和Pop操作。 队列中的元素为int类型。

var stackA = [];
var stackB = [];
function push(node)
{
    // write code here
    stackA.push(node);
}
function pop()
{
    // write code here
    if(stackB.length > 0){
        return stackB.pop();
    }else if(stackA.length == 0){
        return null;
    }else{
        while(stackA.length > 0){
            stackB.push(stackA.pop());
        }
        return stackB.pop();
    }
}
module.exports = {
    push : push,
    pop : pop
};