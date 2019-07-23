// 题目描述
// 大家都知道斐波那契数列，
// 现在要求输入一个整数n，
// 请你输出斐波那契数列的第n项（从0开始，第0项为0）。
// n<=39

function Fibonacci(n)
{
    // write code here
    var f = 0;
    var g = 1;
    for(var i=0;i<n;i++){
        g = g + f;
        f = g - f;
    }
    return g;
}
module.exports = {
    Fibonacci : Fibonacci
};