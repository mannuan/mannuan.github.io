// let tabBox = document.getElementById('tabBox');

// 基于getElementsByTagName / getElementsByClassName 获取到的是元素集合，想要操作某一个元素需要在集合中根据索引取出来才可以使用 
// let tabBox = document.getElementsByClassName('tabBox')[0];

// querySelector获取的是一个元素对象，那怕页面中有多个符合的，也只获取第一个  querySelectorAll获取的是一个集合，那么只有一个符合，也是一个集合，集合中有一项
// let tabBox = document.querySelector('.tabBox');

// getElementsByTagName是获取指定上下文后代中所有的标签名为N的元素集合
// let navList = tabBox.getElementsByTagName('li');

// let navList = document.querySelectorAll('.tab li');
// let divList = document.querySelectorAll('.tabBox>div');

// jQuery一个操作DOM元素的类库
// var $navList = $('.tab li');
// var $divList = $('.tabBox>div');
// console.log($navList,$divList);


// =====================
var sexList = document.getElementsByName('sex');
var submit = document.getElementById('submit');
// var sexList = document.querySelectorAll('[name=sex]');
// var submit = document.querySelector('#submit');
submit.onclick = function () {
	var res = null;
	for (var i = 0; i < sexList.length; i++) {
		var item = sexList[i];
		if (item.checked) {
			// 被选中
			res = item.value;
			break;
		}
	}
	alert(res);
}