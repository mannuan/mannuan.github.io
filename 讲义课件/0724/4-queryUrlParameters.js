/*
 * 结果：{
 *    lx:1,
 *    name:'zhufeng',
 *    teacher:'aaa',
 *    HASH:'box'
 * }
 */
/* let url = 'http://www.zhufengpeixun.cn/index.html?lx=1&name=zhufeng&teacher=aaa#box';
//1.获取问号或者井号后面的值
let askIndex = url.indexOf('?');
let wellIndex = url.indexOf('#');
let askText = url.substring(askIndex + 1, wellIndex);
let wellText = url.substring(wellIndex + 1);
// askText => "lx=1&name=zhufeng&teacher=aaa"
// wellText => "box"
//2.问号后面值的详细处理
let result = {};
let askAry = askText.split('&');
//=>["lx=1", "name=zhufeng", "teacher=aaa"]
askAry.forEach(item => {
	// item：当前从数组中循环的这一项 
	let n = item.split('=');
	let key = n[0];
	let value = n[1];
	result[key] = value;
});
result['HASH'] = wellText;
console.log(result); */


/* 
 * queryURLParams：获取URL地址中问号传参的信息和哈希值
 *   @params
 *      url [string] 要解析的URL字符串
 *   @return
 *      [object] 包含参数和哈希值信息的对象
 * by zhouxiaotian on 2019/07/24 16:29:00
 */
function queryURLParams(url) {
	//1.获取?和#后面的信息
	let askIn = url.indexOf('?'),
		wellIn = url.indexOf('#'),
		askText = '',
		wellText = '';
	// #不存在
	wellIn === -1 ? wellIn = url.length : null;
	// ?存在
	askIn >= 0 ? askText = url.substring(askIn + 1, wellIn) : null;
	wellText = url.substring(wellIn + 1);

	//2.获取每一部分信息
	let result = {};
	wellText !== '' ? result['HASH'] = wellText : null;
	if (askText !== '') {
		let ary = askText.split('&');
		ary.forEach(item => {
			let itemAry = item.split('=');
			result[itemAry[0]] = itemAry[1];
		});
	}
	return result;
}


/* 
//基于正则封装的才是最完美的
function queryURLParams(url) {
	let result = {},
		reg1 = /([^?=&#]+)=([^?=&#]+)/g,
		reg2 = /#([^?=&#]+)/g;
	url.replace(reg1, (n, x, y) => result[x] = y);
	url.replace(reg2, (n, x) => result['HASH'] = x);
	return result;
} 
*/

let aa = 'http://www.zhufengpeixun.cn/index.html?lx=1&name=zhufeng&teacher=aaa#box';
let paramsObj = queryURLParams(aa);
console.log(paramsObj);