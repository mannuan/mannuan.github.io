先来一道阿里的面试题开开胃
```
let a = {
    n: 1
};
let b = a;
a.x = a = {
    n: 2
};

console.log(a.x);
console.log(b);
```

```
let a = {n:1};
let b = a;
a.x = b;
```

### JS中的数据类型检测
- typeof [val]：用来检测数据类型的运算符
- instanceof ：用来检测当前实例是否率属于某个类
- constructor ： 基于构造函数检测数据类型（也是基于类的方式）
- Object.prototype.toString.call() ：检测数据类型最好的办法

### JS中的操作语句：判断、循环

#### 判断
> 条件成立做什么?不成立做什么?
- if/else if/else
- 三元运算符
- switch case

1. if/else
```
if(条件){
	条件成立执行
}else if(条件2){
	条件2成立执行
}
...
else{
	以上条件都不成立
}
```

2. == VS ===
==：相等（如果左右两边数据值类型不同，是默认先转换为相同的类型，然后比较）
'5'==5 =>TRUE

===：绝对相等（如果类型不一样，肯定不相等，不会默认转换数据类型）
'5'===5 =>FALSE

项目中为了保证业务的严谨，推荐使用===

#### 循环
> 重复做某些事情就是循环
- for循环
- for in循环
- for of循环（ES6新增）
- while循环
- do while循环


=======================作业
预习：
https://pan.baidu.com/s/1GBykF3c_eg9dqmTcxAfDow
第一周24~27

复习：
DAY2练习题
DAY3练习题