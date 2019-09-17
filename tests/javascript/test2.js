var complexnumbermulti = function(a, b){
    let alist = a.includes("+")?a.split('+'):a.split("-");
    let blist = b.includes("+")?b.split("+"):b.split("-");
    if(blist[1].length==1){
        blist[1] = 1;
    }else{
        blist[1] = parseInt(blist[1].split('')[0]);
    }
    if(alist[1].length ==1){
        alist[1] = 1;
    }else{
        alist[1] = parseInt(alist[1].split('')[0]);
    }
    let r = parseInt(alist[0]) * parseInt(blist[0]) - alist[1]*blist[1];
    let c = parseInt(alist[0])*blist[1]+alist[1]*parseInt(blist[0]);
    return r+"+"+c+"i";
}
// console.log(complexnumbermulti('1+2i', '2+i'));
let a = readline();
let b = readline();
console.log(complexnumbermulti(a, b));
