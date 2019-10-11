// 题目描述
// 输入一个链表，反转链表后，输出新链表的表头

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function ReverseList(pHead)
{
    // write code here
    if(pHead == null || pHead.next == null){
        return pHead;
    }
    var p1 = pHead;
    var p2 = null;
    var save = null;
    while(p1 != null){
        save = p1.next;
        p1.next = p2;
        p2 = p1;
        p1 = save;
    }
    return p2;
}
module.exports = {
    ReverseList : ReverseList
};