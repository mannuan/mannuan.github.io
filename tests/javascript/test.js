function sumBigNumber(a, b) {
    var res = '',
        temp = 0;
    a = a.split('');
    b = b.split('');
    while (a.length || b.length || temp) {
        temp += ~~a.pop() + ~~b.pop();
        res = (temp % 10) + res;
        temp = temp > 9;
    }
    return res.replace(/^0+/, '');
}

console.log(sumBigNumber("11111111111111111111", "22222222222222222222222222222222222"))
