var tabBox = document.getElementById('tabBox');
var tabList = tabBox.getElementsByTagName('div');
var navBox = document.getElementById('navBox');
var navList = navBox.getElementsByTagName('li');

/*========== 解决办法一：自定义属性解决办法 =========*/
// 循环三个LI，给每一个LI都绑定点击事件
for (var i = 0; i < navList.length; i++) {
	// navList[i] : 当前循环下我们要操作的那个LI（I变量存储的值是我们需要获取指定元素的索引）
	// 在循环给每个LI绑定点击事件的时候，我们给每一个LI（元素对象）设置一个自定义属性MY-INDEX，属性值存储的是当前LI的索引
	navList[i].myIndex = i;
	navList[i].onclick = function () {
		// 我想用的是点击这个LI的索引，但是I不是
		// THIS是当前点击的这个元素LI;THIS.MY-INDEX获取的就是之前绑定在元素自定义属性上的索引值;
		changeTab(this.myIndex);
	}
}

/* ========其它方式========== */
// 闭包解决方案
/* for (var i = 0; i < navList.length; i++) {
	navList[i].onclick = (function (i) {
		return function () {
			changeTab(i);
		}
	})(i);
} */

// ES6中的LET解决方案
/* for (let i = 0; i < navList.length; i++) {
	navList[i].onclick = function () {
		changeTab(i);
	}
} */


//========================================不行的
/* for (var i = 0; i < navList.length; i++) {
	navList[i].onclick = function () {
		changeTab(i);
	}
} */
/*
 * 只有JS代码加载完成才能看到页面，只有看到页面用户才能点击 
 *   加载到循环这个代码了 i=0 i<3 i++
 *   i=0  navList[0].onclick=function(){...} 绑定事件的时候方法没有执行，点击第一个LI的时候它才执行 i++ =>1
 *   i=1  navList[1].onclick=function(){...}  i++ =>2
 *   i=2  navList[2].onclick=function(){...}  i++ =>3
 *   3<3 不同过，循环结束，此时i已经是3了
 * 
 *   循环结束看到了页面，用户去点击了某一个页卡，接下来开始执行绑定的方法，方法中遇到了一个I，但是此时I已经是循环结束后的3了
 */


// 封装一个函数实现选项卡的切换
// clickIndex:创建函数的时候还不知道点的是谁，所以定义一个入口clickIndex（存储点击这一项的索引），执行方法的时候把点击这一项的索引传递进来即可
function changeTab(clickIndex) {
	// 1.先让所有的LI和DIV都没有选中的样式
	for (var i = 0; i < navList.length; i++) {
		navList[i].className = '';
		tabList[i].className = '';
	}
	// 2.点击的是谁就给谁加选中样式类
	navList[clickIndex].className = 'active';
	tabList[clickIndex].className = 'active';
}