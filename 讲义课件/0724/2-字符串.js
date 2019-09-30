// let str = 'zhufengpeixunyangfanqihang';
/* //循环输出字符串中的每一个字符
for (let i = 0; i < str.length; i++) {
	let char = str[i];
	console.log(char);
} */


/*
 * charAt：根据索引获取指定位置的字符
 * charCodeAt：获取指定字符的ASCII码值（Unicode编码值）
 *  @params
 * 	   n [number] 获取字符指定的索引
 *  @return 
 *     返回查找到的字符
 *     找不到返回的是空字符串不是undefined，或者对应的编码值 
 */
/* let str = 'zhufengpeixunyangfanqihang';
console.log(str.charAt(0)); //=>'z'
console.log(str[0]); //=>'z'
console.log(str.charAt(10000)); //=>''
console.log(str[10000]); //=>undefined
console.log(str.charCodeAt(0)); //=>122
console.log(String.fromCharCode(122)); //=>'z' */


/*
 * 都是为了实现字符串的截取（在原来字符串中查找到自己想要的）
 * 	 substr(n,m)：从索引n开始截取m个字符，m不写截取到末尾（后面方法也是）
 *   substring(n,m)：从索引n开始找到索引为m处(不含m)
 *   slice(n,m)：和substring一样，都是找到索引为m处，但是slice可以支持负数作为索引，其余两个方法是不可以的
 */
// let str = 'zhufengpeixunyangfanqihang';
/* console.log(str.substr(3, 7)); //=>'fengpei'
console.log(str.substring(3, 7)); //=>'feng'
console.log(str.substr(3)); //=>'fengpeixunyangfanqihang' 截取到末尾
console.log(str.substring(3, 10000)); //=>'fengpeixunyangfanqihang' 截取到末尾（超过索引的也只截取到末尾） */

/* console.log(str.substring(3, 7)); //=>'feng'
console.log(str.slice(3, 7)); //=>'feng'
console.log(str.substring(-7, -3)); //=>'' substring不支持负数索引
console.log(str.slice(-7, -3)); //=>'nqih' slice支持负数索引 =>快捷查找：负数索引，我们可以按照 STR.LENGTH+负索引 的方式找   =>slice(26-7,26-3)  =>slice(19,23) */


/*
 * 验证字符是否存在
 * 	 indexOf(x,y)：获取x第一次出现位置的索引，y是控制查找的起始位置索引
 *   lastIndexOf(x)：最后一次出现位置的索引
 *   =>没有这个字符，返回的结果是-1
 */
/* let str = 'zhufengpeixunyangfanqihang';
console.log(str.indexOf('n')); //=>5
console.log(str.lastIndexOf('n')); //=>24

console.log(str.indexOf('@')); //=>-1 不存在返回-1
if (str.indexOf('@') === -1) {
	// 字符串中不包含@这个字符
}

console.log(str.indexOf('feng')); //=>3  验证整体第一次出现的位置，返回的索引是第一个字符所在位置的索引值
console.log(str.indexOf('peiy')); //=>-1

console.log(str.indexOf('n', 7)); //=>12 查找字符串索引7及之后的字符串中，n第一次出现的位置索引	

if (!str.includes('@')) {
	console.log('当前字符串不包含@');
} */


/*
 * 字符串中字母的大小写转换
 * 	 toUpperCase()：转大写
 *   toLowerCase()：转小写
 */
/* let str = 'ZhuFengPeiXunYangFanQiHang';
str = str.toUpperCase();
console.log(str); //=>'ZHUFENGPEIXUNYANGFANQIHANG'
str = str.toLowerCase();
console.log(str); //=>'zhufengpeixunyangfanqihang'
// 实现首字母大写
str = str.substr(0, 1).toUpperCase() + str.substr(1);
console.log(str); //=>'Zhufengpeixunyangfanqihang' */

/*
 * split([分隔符]):把字符串按照指定的分隔符拆分成数组（和数组中join对应）
 * 
 * split支持传递正则表达式 
 */
// 需求：把|分隔符变为,分隔符
/* let str = 'music|movie|eat|sport';
let ary = str.split('|'); //=>["music", "movie", "eat", "sport"]
str = ary.join(',');
console.log(str); //=>"music,movie,eat,sport" */

/*
 * replace(老字符,新字符)：实现字符串的替换（经常伴随着正则而用）
 */
let str = '珠峰@培训@扬帆@起航';
// str = str.replace('@', '-');
// console.log(str); //=>"珠峰-培训@扬帆@起航" 在不使用正则表达式的情况下，执行一次REPLACE只能替换一次字符

str = str.replace(/@/g, '-');
console.log(str); //=>珠峰-培训-扬帆-起航
