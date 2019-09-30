// console.log(typeof Math); //=>"object"
// console.dir(Math);
/*
 * Math = {
 *    PI:3.141592653589793,
 *    abs:function(){[native code]}, 
 *    ceil:function(){[native code]},
 *    ...   
 * } 
 * 
 * Math.abs();
 * Math.PI;
 */
/* 
console.log(Math.abs(-12.5)); //=>12.5
console.log(Math.abs(12)); //=>12
console.log(Math.abs(0)); //=>0
// 传递的不是数字类型的值：先基于Number()转换为数字再处理
console.log(Math.abs('-1')); //=>1
console.log(Math.abs('-1px')); //=>NaN
console.log(Math.abs(true)); //=>1 */

/* console.log(Math.ceil(12)); //=>12
console.log(Math.ceil(12.1)); //=>13
console.log(Math.ceil(12.9)); //=>13
console.log(Math.ceil(-12.1)); //=>-12
console.log(Math.ceil(-12.9)); //=>-12

console.log(Math.floor(12)); //=>12
console.log(Math.floor(12.1)); //=>12
console.log(Math.floor(12.9)); //=>12
console.log(Math.floor(-12.1)); //=>-13
console.log(Math.floor(-12.9)); //=>-13 */

/* console.log(Math.round(12));  //=>12
console.log(Math.round(12.1)); //=>12
console.log(Math.round(12.5)); //=>13  正数中.5属于入
console.log(Math.round(12.9)); //=>13
console.log(Math.round(-12.1)); //=>-12
console.log(Math.round(-12.5)); //=>-12 负数中.5属于舍
console.log(Math.round(-12.9)); //=>-13 */

/* console.log(Math.max(12, 5, 68, 23, 45, 3, 27)); //=>68
console.log(Math.min(12, 5, 68, 23, 45, 3, 27)); //=>3 */

/* console.log(Math.sqrt(9)); //=>3  符合N*N=M 这样的M才能整开平方
console.log(Math.sqrt(-9)); //=>NaN 负数开不了平方
console.log(Math.pow(2, 10)); //=>1024 */

/* for (let i = 1; i <= 10; i++) {
	console.log(Math.random());
} */
/*
 * 0.09453770227521763
 * 0.06700581113042259
 * 0.10092020814995206
 * ...
 */

//  获取25-30之间的随机整数
/* for (let i = 1; i <= 100; i++) {
	let ran = Math.round(Math.random() * (30 - 25) + 25);
	console.log(ran);
} */