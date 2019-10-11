/* console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(' '));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean([]));
console.log(Boolean([12]));
console.log(Boolean(-1)); */

// !：取反（先转为布尔，然后取反）
// !!：取反再取反，只相当于转换为布尔 <=> Boolean
/* console.log(!1); //=>FALSE
console.log(!!1); //=>true */

// 如果条件只是一个值，不是==/===/!=/>= 等这些比较，是要把这个值先转换为布尔类型，然后验证真假
if (1) {
	console.log('哈哈');
}
if ('3px' + 3) {
	//=>'3px3'
	console.log('呵呵');
}
if ('3px' - 3) {
	//=>NaN-3=>NaN
	console.log('嘿嘿');
}
