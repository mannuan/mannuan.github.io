// 题目描述
// 输入一个链表，输出该链表中倒数第k个结点。

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function FindKthToTail(head, k)
{
    // write code here
    if(head == null || k < 1){
        return null;
    }
    p1 = head;
    p2 = head;
    for(var i=0;i<k-1;i++){
        if(p1.next != null){
            p1 = p1.next;
        }else{
            return null;
        }
    }
    while(p1.next){
        p1 = p1.next;
        p2 = p2.next;
    }
    return p2;
}
module.exports = {
    FindKthToTail : FindKthToTail
};