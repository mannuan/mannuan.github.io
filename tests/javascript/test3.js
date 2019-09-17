let dayOfYear = function(date){
    let year = date.substr(0, 4);
    let mouth = date.substr(5,2);
    let day = date.substr(8, 2);
    let sum = 0;
    let days = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
    if(year%400==0||(year%4==0&&year%100!=0)){
        days[1] =29;
    }
    for(let i=0; i<mouth-1; i++){
        sum = sum+days[i];
    }
    sum = sum+day*1;
    return sum;
}
console.log(dayOfYear(readline()));