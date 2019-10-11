var stackA = [];
var stackB = [];
function push(node)
{
    stackA.push(node);
    if(stackB.length){
        if(node < stackB[stackB.length-1]){
            stackB.push(node);
        }
    }else{
        stackB.push(node);
    }
}
function pop()
{
    if(stackA[stackA.length-1] == stackB[stackB.length-1]){
        stackB.pop();
    }
    return stackA.pop();
}
function top(){

}
function min()
{
    return stackB[stackB.length-1];
}
module.exports = {
    push : push,
    pop : pop,
    top : top,
    min : min
};

for(var i=0;i<10;i++){
    push(Math.floor(Math.random()*100));
}
for(var i=0;i<10;i++){
    console.log(stackA);
    console.log(min());
    pop();
}
