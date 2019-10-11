// 题目描述
// 给定一个double类型的浮点数base和int类型的整数exponent。
// 求base的exponent次方。

function eachPower(base, exponent){
    var result = 1;
    while(exponent != 0){
        if(exponent & 1 == 1){
            result *= base;
        }
        exponent >>= 1;
        base *= base;
    }
    return result;
}

function Power(base, exponent)
{
    // write code here
    if(base > -0.0000001 && base < 0.0000001){
        return 0;
    }
    if(exponent == 0){
        return 1;
    }
    var result = eachPower(base, exponent > 0 ? exponent : -exponent);
    if(exponent > 0){
        return result;
    }else{
        return 1/result;
    }
}
module.exports = {
    Power : Power
};