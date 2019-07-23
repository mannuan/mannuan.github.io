// 题目描述
// 一只青蛙一次可以跳上1级台阶，
// 也可以跳上2级。
// 求该青蛙跳上一个n级的台阶总共有多少种跳法（先后次序不同算不同的结果）。
// f(1) = 1
// f(2) = 2


function jumpFloor(number)
{
    // write code here
    if(number == 0){
        return number;
    }
    var f = 1;
    var g = 1;
    for(var i=0;i<number-1;i++){
        g = g + f;
        f = g - f;
    }
    return g;
}
module.exports = {
    jumpFloor : jumpFloor
};