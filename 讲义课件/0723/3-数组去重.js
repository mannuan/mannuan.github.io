// let ary = [1, 2, 3, 1, 2, 1, 2, 3, 2, 1, 2, 3];
// =>[1,2,3]

/*
 * 方案一：德路的方案
 *   循环原有数组中的每一项，每拿到一项都往新数组中添加
 *   添加之前验证新数组中是否存在这一项，不存在再增加
 */
/* let newAry = [];
for (let i = 0; i < ary.length; i++) {
	// 循环获取原有数组中的每一项
	let item = ary[i];
	// 验证新数组中是否存在这一项
	if (newAry.includes(item)) {
		// 存在这一项，不在增加到新数组中，继续下一轮循环即可
		continue;
	}
	// 新数组中不存在这一项，我们加入到新数组中即可
	newAry.push(item);
}
console.log(newAry); */

/* let newAry = [];
ary.forEach(item => {
	if (newAry.includes(item)) return;
	newAry.push(item);
});
console.log(newAry); */


/*
 * 方案二：旭东的思路 
 *  先分别拿出数组中的每一项A
 *  用这一项A和“它后面的每项”依次进行比较，如果遇到和当前项A相同的，则在原来数组中把这一项移除掉
 * 
 * 不用includes/indexOf（这样保证兼容性）
 */
var ary = [1, 2, 3, 1, 2, 1, 2, 3, 2, 1, 2, 3];
/* for (var i = 0; i < ary.length; i++) {
	// item：每一次循环拿出来的当前项
	// i：当前项的索引  i+1：代表后一项
	var item = ary[i];
	// 让当前项和后面的每一项进行比较(循环)
	for (var j = i + 1; j < ary.length; j++) {
		// compare：后面拿出来要比较的每一项
		var compare = ary[j];
		// 如果compare和item相等，说明这一项是重复的，我们把它删掉
		if (compare === item) {
			// j索引这一项要从数组中移除
			ary.splice(j, 1);
			// 数组塌陷了：j后面的每一项索引都提前了一位，下一次要比较的应该还是j这个索引的内容
			j--;
		}
	}
}
console.log(ary); */

ary = [1, 2, 3, 1, 2, 1, 2, 3, 2, 1, 2, 3];
for (var i = 0; i < ary.length; i++) {
	// 第一轮：
	// i=0  item=1  拿到第一项
	// 第二轮
	// i=1 item=2
	var item = ary[i];
	
	for (var j = i + 1; j < ary.length; j++) {
		// j=1 compare=2  2!==1 
		// j=2 compare=3  3!==1
		// j=3 compare=1  1===1 ary.splice(3, 1) [1, 2, 3,(1) 2, ...] j-- j++
		// j=3 compare=2 ...
		var compare = ary[j];
		if (compare === item) {
			ary.splice(j, 1);
			// j--;
		}
	}
}
console.log(ary);