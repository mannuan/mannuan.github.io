/*
 * 方案三：容坤同学的思路 
 */
/* let ary = [1, 2, 3, 1, 2, 1, 2, 3, 2, 1, 2, 3];
// 1.创建一个空对象
let obj = {};
// 2.循环数组中的每一项，把每一项向对象中进行存储 => item:item
for (let i = 0; i < ary.length; i++) {
	let item = ary[i];
	// 3.每一次存储之前进行判断:验证obj中是否存在这一项
	if (obj[item] !== undefined) {
		// 已经存在这一项
		ary.splice(i, 1);
		i--;
		continue;
	}
	obj[item] = item;
}
console.log(ary); */

// 基于splice实现删除性能不好：当前项被删后，后面每一项的索引都要向前提一位，如果后面内容过多，一定影响性能
/*
 * unique：实现数组去重的方法
 *  @params
 *     ary [Array] 要去重的数组
 *  @return
 *     [Array] 去重后的数组
 * by zhouxiaotian on 20190724   
 */
/* function unique(ary) {
	let obj = {};
	for (let i = 0; i < ary.length; i++) {
		let item = ary[i];
		if (obj[item] !== undefined) {
			ary[i] = ary[ary.length - 1];
			ary.length--;
			i--;
			continue;
		}
		obj[item] = item;
	}
	return ary;
}
let aa = [12, 23, 12, 15, 25, 23, 25, 14, 16];
aa = unique(aa);
aa.sort((a, b) => a - b);
console.log(aa); */

// let ary = [12, 23, 12, 15, 25, 23, 25, 14, 16];
// ary.sort((a, b) => a - b);
// let str = ary.join('@') + '@';
// let reg = /(\d+@)\1*/g;
// ary = [];
// str.replace(reg, (n, m) => {
// 	m = Number(m.slice(0, m.length - 1));
// 	ary.push(m);
// });
// console.log(ary);

// 基于ES6的Set（对应的Map）实现去重
let ary = [12, 23, 12, 15, 25, 23, 25, 14, 16];
ary = [...new Set(ary)];
console.log(ary);