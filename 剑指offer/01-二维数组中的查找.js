// 题目描述
// 在一个二维数组中（每个一维数组的长度相同），
// 每一行都按照从左到右递增的顺序排序，
// 每一列都按照从上到下递增的顺序排序。
// 请完成一个函数，输入这样的一个二维数组和一个整数，
// 判断数组中是否含有该整数。

function Find(target, array)
{
    var nRow = array.length;
    var nCol = array[0].length;
    var i = nRow - 1;
    var j = 0;
    while(i>=0 && j<= nCol-1){
        if(target > array[i][j]){
            j += 1;
        }else if(target < array[i][j]){
            i -= 1;
        }else{
            return true
        }
    }
    return false
}
function Find1(target, array){
    var nRow = array.length;
    var nCol = array[0].length;
    var i = 0;
    var j = nCol - 1;
    while(i <= nRow-1 && j >= 0){
        if(target > array[i][j]){
            i += 1
        }else if(target < array[i][j]){
            j -= 1;
        }else{
            return true
        }
    }
    return false
}
module.exports = {
    Find : Find
}