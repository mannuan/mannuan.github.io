### JS基础课第一周阶段模拟测试

#### 1. 描述出JS中常用的数据类型，以及阐述之间的区别

#### 2.JS中的数据类型该如何检测

#### 3.浏览器中常用的内核有哪些？

#### 4.JS中创建变量的几种常用方式？

#### 5.null和undefined的区别

------

#### 6.写出下面代码输出的结果

```javascript
let n = {
	name:'珠峰培训'
};
let m = n;
n.teacher = n = {
    name:'周啸天'
};
m.teacher = {
	name:'耿银鹏'
};
console.log(m.name);
console.log(n.name);
console.log(m.teacher.name);
console.log(n.teacher.name);
```

#### 7.写出下面代码输出的结果

```javascript
let num = Number('12.5px');
let type = typeof num;
if (num == NaN) {
    alert(NaN);
} else if (type === 'number') {
    alert('number');
} else if (num == 12.5) {
    alert(12.5);
} else {
    alert('12.5px');
}
```

#### 8.写出下面代码的输出结果

```javascript
console.log(1 + false + undefined + [] + null + true + '珠峰培训' + [12] + 1);

let i=1;
console.log(2-(i++)+(--i)+2+(++i)-(i--)-2);
console.log(i);
```

#### 9.写出下面代码的输出结果

```javascript
for (var i = 10; i >= 2; i--) {
    if (i === 6) {
        i-=2;
        break;
    } else if(i<=5) {
        i=2;
    } else {
        i-=2;
        continue;
    }
    i--;
    alert(i);
}
alert(i);
```

#### 10.写出下面代码的输出结果

```javascript
Number("");

parseFloat("")

!!"parseInt(NaN)";

!typeof typeof typeof [12,23];

parseFloat("1.6px") + parseInt("1.2px");

typeof "parseInt(undefined)" + 12 + !!Number('');

typeof !!parseInt(undefined) + !parseFloat(null);
```

------

#### 11.实现任意数求和

> 需求：传递实参个数不固定、有效数字才进行相加、排除字符串拼接的嫌疑、把计算的结果返回到外面
>
> ES5和ES6方式均可

#### 12.实现如下效果（点击右侧按钮，控制二维码的显示隐藏）

![](E:\201908\基础知识公开课\assets\1563810312710.png)

```javascript
/*
 * btn：右侧的按钮元素
 * codeImg：左侧的二维码图片盒子
 */
let btn = document.getElementById('btn');
let codeImg = document.getElementById('codeImg');
//向下完成你的代码
```

#### 13.实现如下效果 

![1563810641882](E:\201908\基础知识公开课\assets\1563810641882.png)

> 鼠标滑过上面的页卡，底下的内容可以跟着切换

```javascript
/*
 * navList：页卡区域的五个LI元素集合
 * conList：内容区域的五个DIV元素集合
 */
let navList = navBox.getElementsByTagName('li');
let conList = contentBox.getElementsByTagName('div');
//向下完成你的代码
```

