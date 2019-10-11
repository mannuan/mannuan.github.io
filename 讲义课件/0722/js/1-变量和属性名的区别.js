/* var name = 10;
var obj = {
	name: '珠峰培训',
	0: 100
};
// 获取OBJ这个对象的NAME属性对应的值
console.log(obj.name); //=>'珠峰培训'
// 一个对象的属性名只有两种格式：数字或者字符串（等基本类型值）
console.log(obj['name']); //=>'珠峰培训'
// obj[name变量代表的值]  => obj[10]  =>undefined
console.log(obj[name]); */

/* var name = '珠峰培训';
var obj = {
	// name : '珠峰培训'
	// 属性名 : 属性值（放的是变量也是把变量存储的值拿过来做属性值）
	// name: name,
	name, //=>ES6的简化  和  name: name  一模一样
	age: 1 === 1 ? 100 : 200
}; */

// => for in循环：用来循环遍历对象中的键值对的（continue和break同样适用）
var obj = {
	name: '春亮',
	age: 52,
	friends: '王鹏,志刚',
	3: 140,
	1: 20,
	2: 149,

};
// for(var 变量(key) in 对象)
// 对象中有多少组键值对，循环就执行几次（除非break结束）
for (var key in obj) {
	// 每一次循环key变量存储的值：当前对象的属性名
	// 获取属性值：obj[属性名] => obj[key]   obj.key/obj['key']
	console.log('属性名：' + key + ' 属性值：' + obj[key]);
}
// for in在遍历的时候，优先循环数字属性名（从小到大）