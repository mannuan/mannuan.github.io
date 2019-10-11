2. 常用的浏览器内核
webkit
gecko
presto
trident
3. 基本数据类型按值操作，引用类型操作的是堆内存的空间地址
4. 常用的关键字和保留字
- 关键字
	+ break
	+ continue
	+ if
	+ else
	+ for
	+ var / let / const / function / class / import / export
	+ instanceof
	+ typeof
	+ this
	+ return 
	+ switch
	+ case
	+ do
	+ while
	+ delete
	+ new 
	+ ...
- 保留字
	+ boolean
	+ float
	+ int
	+ double
	+ long
	+ char
	+ debugger
	+ ...
5. var / let 创建变量
   const 创建常量
   function 创建函数 
   class 创建类
   import 模块导入

=====================
JS中的加减乘除本应是进行数学运算（如果遇到的值不是数字类型，也需要基于Number()方法把其转换为数字，再进行运算）；但是JS中加法有特殊情况：相加过程中遇到字符串直接变为字符串拼接

=====================
console.log(alert(1))  
1. alert(1)：执行浏览器内置的alert方法，执行方法的时候弹出一个"1"(方法的功能)，此方法没有返回值（默认返回值undefined）
2. console.log(undefined)

=====================
1. Number()它是按照浏览器从底层机制，把其它数据类型转换为数字
- 字符串：看是否包含非有效数字字符,包含结果就是NaN；''->0；
- 布尔：true->1  false->0
- null：->0
- undefined：->NaN
- 引用类型值都要先转换为字符串再转换为数字
	+ {}/正则/函数等  ->NaN
	+ [] ->'' ->0
	+ ['12'] ->'12' ->12
	+ [12,23] ->'12,23' ->NaN
- ...

2. parseInt/parseFloat([val]) 遵循按照字符串从左到右查找的机制找有效数字字符（所以传递的值一定是字符串，不是也要转换为字符串然后在查找）
- parseInt(undefined) ->parseInt('undefined') ->NaN
- parseInt('') ->NaN  因为没找到有效数字字符

=============================
== VS ===
==：相等，数据类型不同，先转换为一样的再比较
===：绝对相等，必须类型和值都相同才为TRUE（switch判断中，每一种case值的比较都是基于===来完成的）

==============================
let i='10';
i=i+1 =>'10'+1 =>'101'
i+=1  =>'101'
i++   =>i=11   i++和以上两种不完全一样，他是纯粹的数学运算

----
> i++和++i都会是数学运算中的累加1，区别是计算的顺序

let i=1;
5+(i++)  //=>先算5+i=6  然后i再加1(i=2)

i=1;
5+(++i) //=>先i累加1，然后拿累加后的结果去和5运算 =>7

出道题：
let i=3;
console.log( 5+(++i)+(i++)+3-2+(--i)+(i--)-2 );
console.log(i);

===============================
0. 现在无法理解，敲到不需要用脑子
1. 拼
2. 信念  道之所限，愿力突破  
3. 带

