function findObjByPath(obj, path){
    var arr = path.split('.');
    if(arr.length==0){
        return null
    }
    var tmp = obj[arr[0]]
    if(tmp ==undefined){
        return null
    }
    arr.splice(0,1);
    for(var i=0;i<arr.length;i++){
        tmp = tmp[arr[i]];
        if(tmp==undefined){
            return null
        }
    }
    return 1
}
console.log(findObjByPath({a:{b:1, c:2}},'b'))

