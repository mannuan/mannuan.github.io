// 题目描述
// 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，
// 使得所有的奇数位于数组的前半部分，所有的偶数位于数组的后半部分，
// 并保证奇数和奇数，偶数和偶数之间的相对位置不变。

function reOrderArray(array)
{
    // write code here
    var arr_len = array.length;
    console.log(arr_len);
    var j = 0;
    for(var i=0;i<arr_len;i++){
        if((array[j] & 1) == 0){ // 少了一个括号
            array.push(array.splice(j,1)[0]);
        }else{
            j++;
        }
    }
    return array;
}
module.exports = {
    reOrderArray : reOrderArray
};

console.log(reOrderArray([1,2,3,4,5]));