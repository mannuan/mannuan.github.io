var uploadImgAvatat = function () {
    $.get('/cand/api/ossavatar',function (data) {
        if (data) {
            var accessid = data.accessid;
            var dir = data.dir;
            var expire = data.expire;
            var host = data.host;
            var policy = data.policy;
            var signature = data.signature;
            uploadFunction(accessid, dir, expire, host, policy, signature);
        }
    });
}
var uploadImgMonitor = function () {
    $.get('/cand/api/ossmonitor',function (data) {
        if (data) {
            var accessid = data.accessid;
            var dir = data.dir;
            var expire = data.expire;
            var host = data.host;
            var policy = data.policy;
            var signature = data.signature;
            uploadFunction(accessid, dir, expire, host, policy, signature);
        }
    });
}

var xhr;
var fileName = "";
var uploadFunction = function (accessid, dir, expire, host, policy, signature) {
    if (host.indexOf("http://") > -1) { host = host.replace("http://","https://");}
    if(dir!=undefined && dir!==''){ dir=dir.replace('\\/','/').replace('\\/','/'); }
    var c = document.getElementById("canvas");
    var dataurl = c.toDataURL('image/png');
    fileName = random_string(10) + "_" + Date.now() + ".png";
    var blob = dataURLtoBlob(dataurl);
    var fd = new FormData();
    fd.append("name", fileName); //xx.png
    fd.append("key", dir + fileName); //video/ cands/xx.png
    fd.append("policy", policy);
    fd.append("OSSAccessKeyId", accessid);
    fd.append("success_action_status", "200");
    fd.append("callback", '');
    fd.append("signature", signature);
    fd.append("file", blob, fileName);
    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = state_Change;
    xhr.open('POST', host, true);
    xhr.send(fd);
}
var state_Change = function () {
    if (xhr.readyState == 4) { // 4 = "loaded"
        if (xhr.status == 200) { // 200 = OK
            saveCompleteFun("success upload!");
            $("#suresnap").html(top.ACM.lang.photo.doSave);
        }
    }
}

function random_string(len) {
    len = len || 32;
    var chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
    var maxPos = chars.length;
    var pwd = '';
    for (i = 0; i < len; i++) {
        pwd += chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return pwd;
}

function dataURLtoBlob(dataurl) {
    var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime });
}
