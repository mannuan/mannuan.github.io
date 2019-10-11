// 题目描述
// 我们可以用2*1的小矩形横着或者竖着去覆盖更大的矩形。
// 请问用n个2*1的小矩形无重叠地覆盖一个2*n的大矩形，总共有多少种方法？

function rectCover(number)
{
    // write code here
    if(number == 0){
        return number;
    }
    var f = 1;
    var g = 1;
    for(var i=1;i<number;i++){
        g = g + f;
        f = g - f;
    }
    return g;
}
module.exports = {
    rectCover : rectCover
};