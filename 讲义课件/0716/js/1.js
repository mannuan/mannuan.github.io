// console.log([val])：在控制台输出内容
// console.log('hello world~~');

// ==：进行比较的
/* console.log('AA' == NaN);
console.log(10 == NaN);
console.log(NaN == NaN); */

// isNaN([val])
// console.log(isNaN(10)); //=>FALSE
// console.log(isNaN('AA')); //=>TRUE
/*
 * Number('AA') =>NaN 
 * isNaN(NaN) =>TRUE
 */

// console.log(isNaN('10')); //=>FALSE
/*
 *  Number('10')  =>10
 *  isNaN(10) =>FALSE
 */

// ==========Number===========
// 把字符串转换为数字，只要字符串中包含任意一个非有效数字字符（第一个点除外）结果都是NaN，空字符串会变为数字零
/* console.log(Number('12.5')); //=>12.5
console.log(Number('12.5px')); //=>NaN
console.log(Number('12.5.5')); //=>NaN
console.log(Number('')); //=>0 */

// 布尔转换为数字
/* console.log(Number(true)); //=>1
console.log(Number(false)); //=>0
console.log(isNaN(false)); //=>false */

// null->0  undefined->NaN
/* console.log(Number(null)); //=>0
console.log(Number(undefined)); //=>NaN */

// 把引用数据类型转换为数字，是先把他基于toString方法转换为字符串，然后在转换为数字
/* console.log(Number({name:'10'}));//=>NaN
console.log(Number({}));//=>NaN
// {}/{xxx:'xxx'} .toString() => "[object Object]" => NaN
console.log(Number([]));//=>0
// [].toString() -> ''
console.log(Number([12]));//=>12
// [12].toString() -> '12'
console.log(Number([12,23]));//=>NaN
// [12,23].toString() -> '12,23' */

/* let str = '12.5px';
console.log(Number(str)); //=>NaN
console.log(parseInt(str)); //=>12
console.log(parseFloat(str)); //=>12.5
console.log(parseFloat('width:12.5px')); //=>NaN */