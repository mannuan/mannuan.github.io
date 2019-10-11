// let a = 10;
/* if(!a){
	// 条件可以多样性：等于、大于、小于的比较/一个值或者取反等  =>最后都是要计算出是TRUE还是FALSE
} */

/* if (a <= 0) {
	console.log('哈哈');
} else if (a > 0 && a < 10) {
	//A && B：A和B都成立才为TRUE
	//A || B：A或者B只有一个成立就为TRUE 
	console.log('呵呵');
} else if (a == 10) {
	console.log('嘿嘿');
} else {
	console.log('嘻嘻');
} */

//=================三元运算符：简单IF/ELSE的特殊处理方式
// 条件?条件成立处理的事情:不成立处理的事情;
// 1.如果处理的事情比较多，我们用括号包起来，每一件事情用逗号分隔
// 2.如果不需要处理事情，可以使用null/undefined占位
/* let a = 10;
a > 0 ? (a < 10 ? a++ : a--) : (a > -10 ? a += 2 : null);
if (a > 0) {
	if (a < 10) {
		a++;
	} else {
		a--;
	}
} else {
	if (a > -10) {
		a += 2;
	}
} */

// a > 0 && a < 20 ? (a++, console.log(a)) : null;
/* if (a > 0 && a < 20) {
	a++; //=>a+=1 a=a+1  =>自身累加1
	console.log(a);
} */

// a >= 10 ? console.log('呵呵') : console.log('哈哈');
/* if (a >= 10) {
	console.log('呵呵');
} else {
	console.log('哈哈');
} */

//===================switch case：一个变量在不同值情况下的不同操作
// 1.每一种CASE情况结束后最好都加上BREAK
// 2.default等价于else，以上都不成立干的事情
// 3.每一种case情况的比较用的都是===“绝对相等”
let a = '5';
switch (a) {
	case 1:
		console.log('呵呵');
		break;
	case 5://=>此处 '5' case 5 =>FALSE
		console.log('哈哈');
		break;
	default:
		console.log('嘻嘻');
}

a = '5';
if (a == 1) {
	console.log('呵呵');
} else if (a == 5) { //=>'5' == 5 =>true
	console.log('哈哈');
} else {
	console.log('嘻嘻');
}

// 不加break，当前条件成立执行完成后，后面条件不论是否成立都要执行，直到遇到break为止（不加break可以实现变量在某些值的情况下做相同的事情  =>编程开发人员要具备探索尝试之心）
/* let a = 5;
switch (a) {
	case 1:
	case 5:
		a += 2;
		break;
	default:
		a--;
}
console.log(a); */