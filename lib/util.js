function padbyZero(){ // 用零填充
    var val = arguments[0]|0;
    var len = arguments[1]|2;
    var res = null;
    for(var i=1;i<len;i++){
        res = val<Math.pow(10, i)?'0'+val:''+val;
    }
    return res;
}

Date.prototype.getStandardTime = function(){
    //获取年，getFullYear()返回4位的数字
    var year=this.getFullYear();
    //获取月，月份比较特殊，从0开始计数
    var month=padbyZero(this.getMonth()+1);
    //获取日
    var day=padbyZero(this.getDate());
    var hour=padbyZero(this.getHours());
    var minute=padbyZero(this.getMinutes());
    var second=padbyZero(this.getSeconds());
    return year+'-'+month+'-'+day+' '+hour+':'+minute+':'+second;
}

Date.prototype.getUTCTime = function(){
    var millisceond=padbyZero(this.getMilliseconds(), 3);
    return this.getStandardTime()+'.'+millisceond;
}
