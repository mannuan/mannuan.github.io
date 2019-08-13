let a = 0;
const obj = {
    a: 1,
    b: function(){
       console.log(this.a);
    //    console.log(this);
    }
}
const obj1 = {
    a: 2
}
const fun = obj.b;
fun();
fun.apply(obj);
fun.bind(obj1).apply(obj);
const fun1= fun.bind(obj1);
new fun();