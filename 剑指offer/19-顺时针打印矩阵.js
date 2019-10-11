// 题目描述
// 输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字，
// 例如，如果输入如下4 X 4矩阵： 
// 1   2   3   4 
// 5   6   7   8 
// 9   10  11  12 
// 13  14  15  16 
// 则依次打印出数字
// 1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10.
// 确定圈数：
// x = min(n_row,n_col)
// f(1) = 1
// f(2) = 1
// f(3) = 2
// f(4) = 2
// f(5) = 3
// f(6) = 3
// 规律：Math.floor((min-1)/2)+1


function printMatrix(matrix)
{
    // write code here
    n_row = matrix.length
    n_col = matrix[0].length
    arr = []
    for(var i=0;i<Math.floor((Math.min(n_row, n_col)-1)/2)+1;i++){
        for(var j=i;j<=n_col-i-1;j++){
            arr.push(matrix[i][j]);
        }
        // 起始行号大于终止行号
        if(i+1 > n_row-1-i){
            break
        }
        for(var j=i+1;j<=n_row-1-i;j++){
            arr.push(matrix[j][n_col-i-1]);
        }
        // 起始列号小于终止列号
        if(n_col-1-i-1 < i){
            break
        }
        for(var j=n_col-1-i-1;j>=i;j--){
            arr.push(matrix[n_row-1-i][j]);
        }
        // 起始行号小于终止行号
        if(n_row-1-i-1 < i+1){
            break
        }
        for(var j=n_row-1-i-1;j>=i+1;j--){
            arr.push(matrix[j][i]);
        }
    }
    return arr;
}
module.exports = {
    printMatrix : printMatrix
};

console.log(printMatrix([[1,2,3],[4,5,6],[7,8,9]]));