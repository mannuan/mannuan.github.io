function getRandomFloat(min, max) {
    var min = Math.ceil(min);
    var max = Math.floor(max);
    return Math.random() * (max - min) + min; //不含最大值，含最小值
}
// let arr = [55.26, 56.34, 56.41, 57.13, 57.15, 57.19, 58.11, 59.63, 61.67];
// let arr = [70.24, 71.55, 71.89, 72.01];
let arr = [77.42, 77.44, 78.07, 78.16];
let new_arr = [];
arr.forEach(e=>{
  new_arr.push(e-getRandomFloat(10,40)/10);
});
console.log(new_arr);