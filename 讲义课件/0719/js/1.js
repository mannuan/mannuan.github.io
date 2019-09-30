// 求两个数的和，算完和后乘以10，然后在除以2...
// =>sum是函数名，代表这个函数本身
// =>sum()是让函数执行，代表的是函数执行返回的结果
// =>n/m是形参，是变量，用来存储执行函数时传递的实参
/* function sum(n, m) {
	let result = n + m;
	result *= 10;
	result /= 2;
	console.log(result);
}
// console.log(sum);
// 10/20、25/27这都是传递给形参变量的值（实参）
sum(10, 20);
sum(25, 27); */

//======================形参的细节
// 创建函数的时候我们设置了形参变量，但如果执行的时候并没有给传递对应的实参值，那么形参变量默认的值是：undefined
/* function sum(n, m) {
	// 形参默认值处理：如果没有传递形参值，给予一个默认值
	if (n === undefined) {
		n = 0;
	}
	if (typeof m === 'undefined') {
		m = 0;
	}
	let result = n + m;
	result *= 10;
	result /= 2;
	console.log(result);
}
sum();
sum(10);
sum(10, 20);
sum(10, 20, 30); */

//=======================函数中的返回值
//函数执行的时候，函数体内部创建的变量我们是无法获取和操作的，如果要想获取内部的信息，我们需要基于RETURN返回值机制，把信息返回才可以
/* function sum(n, m) {
	let result = n + m;
	// RETURN的一定是值:此处是把RESULT变量存储的值返回给外面
	return result; //=> return 30;
}
let AA = sum(10, 20);
console.log(AA);
// console.log(result); //=>Uncaught ReferenceError: result is not defined */

// 没有写RETURN，函数默认返回值是undefined
/* function sum(n, m) {
	let result = n + m;
}
let AA = sum(10, 20);
console.log(AA); //=>undefined */

/* function sum(n, m) {
	if (n === undefined || m === undefined) {
		// 函数体中遇到RETURN，后面代码则不再执行了
		return;
	}
	let result = n + m;
}
sum(10, 20); */

//==================匿名函数
// 匿名函数之函数表达式：把一个匿名函数本身作为值赋值给其它东西，这种函数一般不是手动触发执行，而且靠其它程序驱动触发执行（例如：触发某个事件的时候把它执行等）
// document.body.onclick = function () {}
// setTimeout(function(){},1000); //=>设置定时器，1000MS后执行匿名函数

// 匿名函数之自执行函数：创建完一个匿名函数，紧接着就把当前函数加小括号执行
// (function(n){
// 	//n=>100
// })(100);