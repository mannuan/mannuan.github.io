function sum(cn, ys){
    let sn = "";
    if(ys != 0){
        sn += ys;
    }
    for(let i=0; i<cn; i++){
        sn += '9';
    }
    return sn;
}

let n = parseInt(readline());
for(let i=0; i<n; i++){
    let x = parseInt(readline());
    let s = Math.floor(x/9);
    let ys = x%9;
    console.log(sum(s, ys));
}
// let x = 18;
// let s = Math.floor(x/9);
// let ys = x%9;
// console.log(sum(s, ys));