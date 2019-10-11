// 题目描述
// 输入一个链表，按链表值从尾到头的顺序返回一个ArrayList。
/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function printListFromTailToHead(head)
{
    // write code here
    var arr = [];
    if(head){ // 这里要注意牛客测试系统传过来的是null不是空对象
        arr.push(head.val);
    }else{
        return arr;
    }
    while(head.next){
        head = head.next;
        arr.push(head.val);
    }
    return arr.reverse();
}
module.exports = {
    printListFromTailToHead : printListFromTailToHead
};