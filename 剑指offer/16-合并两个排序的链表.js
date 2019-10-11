// 题目描述
// 输入两个单调递增的链表，输出两个链表合成后的链表，
// 当然我们需要合成后的链表满足单调不减规则。

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function Merge(pHead1, pHead2)
{
    // write code here
    if(pHead1 == null && pHead2 == null){
        return null;
    }else if(pHead1 == null && pHead2 != null){
        return pHead2;
    }else if(pHead1 != null && pHead2 == null){
        return pHead1;
    }
    var head = null;
    if(pHead1.val <= pHead2.val){
        head = pHead1;
        pHead1 = pHead1.next;
    }else{
        head = pHead2;
        pHead2 = pHead2.next;
    }
    var p = head;
    while(pHead1 != null && pHead2 != null){
        if(pHead1.val <= pHead2.val){
            p.next = pHead1;
            pHead1 = pHead1.next;
        }else{
            p.next = pHead2;
            pHead2 = pHead2.next;
        }
        p = p.next;
    }
    p.next = pHead1 != null ? pHead1 : pHead2;
    return head;
}
module.exports = {
    Merge : Merge
};