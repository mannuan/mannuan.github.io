
//保存
window.screenCapture = {
    allow:0,
    start:false,
    interval:null,
    stream:null,
    open:false,
    nowPhotoId:'',
    openReDialog:false,
    closeTime:null,
    openTime:null,
    timeLimit:6,
    screenCaptureGetResultInterval:null,
    comparePixels:null,
}

window.screenCaptureInterval = function(){
    if(window.screen.width<800){
        return;
    }
    if(window.screenCapture.interval!=null){
        console.log('清除了录屏监控',new Date());
        window.clearInterval(window.screenCapture.interval);
    }
    if(window.screenCapture.allow==0){
        return;
    }

    console.log('开启了录屏监控',new Date());
    window.screenCapture.interval = window.setInterval(function(){
        window.screenCaptureSave();
    },10000);

    setTimeout(function(){
        window.screenCaptureSave();
    },5000)
}
window.openRedialogDiv = function(){
    window.screenCapture.openReDialog = true;
    var tipMsg = ACM.lang.photo.captureCheckDialog;
    var dialogWidth = 600;
    if(ACM.lang && ACM.lang.lang == 'en'){
        dialogWidth = 680;
    }

    $.cxDialog({
        title: ACM.lang.photo.captureCheckDialogTitle,height:440,width:dialogWidth,baseClass:"forWin", closeBtn:false,
        info: '<div class="RedialogDiv">' + tipMsg + '</div>',
        baseClass:'screenCapture',
        ok: function () {
            var post = {
                photoId:window.screenCapture.nowPhotoId,
                explainType:9,
            }
            if($(".chengxujieshiul li.active").length==0){
                toastr.error(ACM.lang.photo.captureCheckDialogSelectErr);
                return false;
            }
            if($("#chengxujieshi").val()==''){
                toastr.error(ACM.lang.photo.captureCheckDialogInputErr);
                return false;
            }
            post.appeal = $("#chengxujieshi").val();
            post.explainType = $(".chengxujieshiul .active").attr('data')
            $.post('/cand/api/causesOfScreen',post,function (data) {
                if (data) {
                    cxalert(ACM.lang.hint,ACM.lang.submitSuccess);
                    return false;
                }
            });
            window.screenCapture.openReDialog = false;
        },
        okText: ACM.lang.submit,
        no:function(){
            window.screenCapture.openReDialog = false;
        },
        noText:ACM.lang.no
    });
    setTimeout(function(){
        $(".chengxujieshiul li").unbind("click").bind("click",function(){
            if(!$(this).hasClass("active")){
                $(this).addClass("active").siblings().removeClass("active")
            }
        })
    },100)
}
window.screenCaptureTip = function(num){
    if(window.screenCapture.openReDialog){
        return;
    }
    var tipMsg = '';
    if(num==1){
        tipMsg = ACM.lang.answer.warningCheat.Format(num);
    }
    else if(num==2){
        tipMsg = ACM.lang.answer.warningCheat2.Format(num);
    }else{
        return;
    }
    $.cxDialog({
        title: '',height:400,width:800,baseClass:"forWin", closeBtn:false,
        info: tipMsg,
        ok: function () {
            $("#cxdialog").attr("style", "");
            $.cxDialog.defaults.baseClass = '';
            $.cxDialog.defaults.width = 0;
            $.cxDialog.defaults.height = 0;
            window.screenCapture.openReDialog = false;
        },
        okText: ACM.lang.iknow,
        no:function(){
            $("#cxdialog").attr("style", "");
            $.cxDialog.defaults.baseClass = '';
            $.cxDialog.defaults.width = 0;
            $.cxDialog.defaults.height = 0;
            window.openRedialogDiv();
            return false;
        },
        noText:ACM.lang.itnotcheat
    });
    $("#cxdialog.cxdialog.forWin .cxdialog_btns").css("left","374px")
    if(toastr){
        toastr.options = {
          "closeButton": false,
          "debug": false,
          "positionClass": "toast-bottom-right",
          "onclick": null,
          "showDuration": "300",
          "hideDuration": "1000",
          "timeOut": "5000",
          "extendedTimeOut": "1000",
          "showEasing": "swing",
          "hideEasing": "linear",
          "showMethod": "fadeIn",
          "hideMethod": "fadeOut"
        }
    }
}
//轮询查找结果
window.screenCaptureGetResult = function(){
    if(window.screenCapture.screenCaptureGetResultInterval != null){
        window.clearInterval(window.screenCapture.screenCaptureGetResultInterval);
    }
    window.screenCapture.screenCaptureGetResultInterval = setInterval(function(){
        if(window.screenCapture.nowPhotoId!=''){
            $.post('/cand/api/getScreenCaptureResult',{photoId:window.screenCapture.nowPhotoId},function (data) {
                if (data.result && data.result.photoId && data.result.identificationResult!=undefined) {

                    if(window.screenCapture.screenCaptureGetResultInterval != null){
                        window.clearInterval(window.screenCapture.screenCaptureGetResultInterval);
                    }
                    if(data.result.identificationResult > 0){
                        if(window.ACMGlobal && window.ACMGlobal.recordingScreenCheatAlert == 0){
                            return;
                        }
                        window.screenCaptureTip(data.result.videoCheating);
                    }

                }
            });
        }
    },2000);
}
window.compareSimilar = function (callback) {  
    if(window.screenCapture.comparePixels == null){
        var sw = screenCaptureVideo.videoWidth;
        var sh = screenCaptureVideo.videoHeight;
        var canvas = document.createElement('canvas'),                
        ctx = canvas.getContext('2d'),  
        tw = parseInt(sw / 10),  // 模板宽度                
        th = parseInt(sh / 10);  // 模板高度
        canvas.width = tw;            
        canvas.height = th;
        ctx.drawImage(screenCaptureVideo, 0, 0, sw, sh, 0, 0, tw, th);
        var pixels = ctx.getImageData(0, 0, tw, th);
        pixels = toGrayBinary(pixels, true, null, true);
        window.screenCapture.comparePixels = pixels;
        console.log('第一次，记录模板，不前端对比，直接后端对比！');
        if(typeof callback == 'function'){
            callback();
        }
    }else{
        var sw = screenCaptureVideo.videoWidth;
        var sh = screenCaptureVideo.videoHeight;
        var canvas = document.createElement('canvas'),                
        ctx = canvas.getContext('2d'),  
        tw = parseInt(sw / 10),  // 模板宽度                
        th = parseInt(sh / 10);  // 模板高度
        canvas.width = tw;            
        canvas.height = th;
        ctx.drawImage(screenCaptureVideo, 0, 0, sw, sh, 0, 0, tw, th);
        var pixels = ctx.getImageData(0, 0, tw, th);
        pixels = toGrayBinary(pixels, true, null, true);

        //需要对比的
        var similar = 0;
        for (var i = 0, len = tw * th; i < len; i++) {                
            if (pixels[i] == window.screenCapture.comparePixels[i]) similar++;            
        }
        similar = (similar / (tw * th)) * 100;

        //如果小于80，则更新对比模板并记录
        console.log('记录模板，进行前端对比，前端对比相似度：' + similar);
        if(similar < 80){
            window.screenCapture.comparePixels = pixels;
            console.log('已发给后端进行对比');
            if(typeof callback == 'function'){
                callback();
            }
        }
    }      
}

window.toGrayBinary = function(pixels, binary, value, sn) {
    var r, g, b, g, avg = 0, len = pixels.data.length, s = [];
    for (var i = 0; i < len; i += 4) {                
        avg += (.299 * pixels.data[i] + .587 * pixels.data[i + 1] + .114 * pixels.data[i + 2]);            
    }
    avg /= (len / 4);
    for (var i = 0; i < len; i += 4) {                
        r = .299 * pixels.data[i], 
        g = .587 * pixels.data[i + 1], 
        b = .114 * pixels.data[i + 2];                
        if (binary) {
            if (sn) s.push(r+g+b);                   
            g = (r + g + b) > (value || avg) ? 255 : 0;                
        } else {                    
            g = r + g + b;                
        }
        pixels.data[i] = g, 
        pixels.data[i + 1] = g, 
        pixels.data[i + 2] = g;            
    }
    if (sn) return s;            
    else return pixels;        
}
window.screenCaptureSave = function(){
    if(location.hash.indexOf("main/onlinecode")>-1){
        
    }else{
        return;
    }
    if(window.ACMGlobal && typeof window.ACMGlobal.remainingTime == "number"){
        if(window.ACMGlobal.remainingTime <= 10){
            return;
        }
    }
    // if(location.host.indexOf('acmcoder.com')==-1){
    //     return;
    // }
    //保存video成图片保存
    if(window.screenCapture.allow==1 && window.screenCapture.start == true){
        
        var fileUrl = '';
        var xhr = '';
        var dataurl = '';

        var state_change = function(){
            if (xhr.readyState == 4) { // 4 = "loaded"
                if (xhr.status == 200) { // 200 = OK
                    $.post('/cand/api/saveScreenCapture',{url:fileUrl},function (data) {
                        if (data.result && data.result.photoId) {
                            window.screenCapture.nowPhotoId = data.result.photoId;
                            window.screenCaptureGetResult();
                            // if(data.result.identificationResult > 0){
                            //     if(window.ACMGlobal && window.ACMGlobal.recordingScreenCheatAlert == 0){
                            //         return;
                            //     }
                            //     window.screenCaptureTip(data.result.videoCheating);
                            // }
                        }
                    });
                }
            }
        }

        var needComparePass = function(){
            
            if(window.screenCapture.compareCanvas == null){
                window.screenCapture.compareCanvas = canvas;
            }

        }

        var uploadOSS = function(accessid, dir, expire, host, policy, signature){
            var canvas = document.createElement("canvas");
            canvas.width = screenCaptureVideo.videoWidth;
            canvas.height = screenCaptureVideo.videoHeight;
            canvas.getContext('2d').drawImage(screenCaptureVideo, 0, 0, canvas.width, canvas.height);

            var canvas2 = document.createElement("canvas");
            canvas2.width = screenCaptureVideo.videoWidth ;
            canvas2.height = screenCaptureVideo.videoHeight * 0.3;
            canvas2.getContext('2d').drawImage(screenCaptureVideo, 0, 0, canvas.width, canvas.height);

            if (host.indexOf("http://") > -1) { host = host.replace("http://","https://");}
            if(dir!=undefined && dir!==''){ dir=dir.replace(/\\/g,''); }
            

            var dateSte = Date.now();

            var url = ACMGlobal.candId + '_' + dateSte + ".png";
            fileUrl = 'https://cdn.acmcoder.com/' + dir + url;
            var fd = new FormData();
            dataurl = canvas.toDataURL('image/png');
            var blob = dataURLtoBlob(dataurl);

            var url2 = ACMGlobal.candId + '_' + dateSte + "_top.png";
            var fileUrl2 = 'https://cdn.acmcoder.com/' + dir + url2;
            var fd2 = new FormData();
            var dataurl2 = canvas2.toDataURL('image/png');
            var blob2 = dataURLtoBlob(dataurl2);

            if(blob.size && (blob.size / 1024) <= 100){
                return;
            }

            fd.append("name", url);
            fd.append("key", dir + url);
            fd.append("policy", policy);
            fd.append("OSSAccessKeyId", accessid);
            fd.append("success_action_status", "200");
            fd.append("callback", '');
            fd.append("signature", signature);
            fd.append("file", blob, url);
            xhr = new XMLHttpRequest();
            xhr.onreadystatechange = state_change;
            xhr.open('POST', host, true);
            xhr.send(fd);

            fd2.append("name", url2);
            fd2.append("key", dir + url2);
            fd2.append("policy", policy);
            fd2.append("OSSAccessKeyId", accessid);
            fd2.append("success_action_status", "200");
            fd2.append("callback", '');
            fd2.append("signature", signature);
            fd2.append("file", blob2, url2);
            var xhr2 = new XMLHttpRequest();
            xhr2.open('POST', host, true);
            xhr2.send(fd2);
        }

        var getOss = function(){
            var url = '/cand/api/ossCapture';
            $.get(url,function (data) {
                if (data) {
                    var accessid = data.accessid;
                    var dir = data.dir;
                    var expire = data.expire;
                    var host = data.host;
                    var policy = data.policy;
                    var signature = data.signature;
                    uploadOSS(accessid, dir, expire, host, policy, signature);
                }
            });
        }

        compareSimilar(function(){
            getOss();
        })
    }
}
window.screenCaptureCheck = function(hashUrl,obj){
    var client = new ClientJS();
    var clientData = client.getBrowserData();
    if(window.screen.width<800){
        return;
    }
    if(window.screenCapture.allow == 1 && window.screenCapture.stream && window.screenCapture.stream.active){
        if(hashUrl){ gotoHash(hashUrl); }
        return;
    }
    if(navigator.mediaDevices && navigator.mediaDevices.getDisplayMedia){
        window.screenCapture.open = true;
        //请求分享屏幕
        //console.log('请求分享屏幕',new Date());
        window.screenCapture.openTime = Date.now();
        navigator.mediaDevices.getDisplayMedia({video : true})
        .then(stream => {
            window.screenCapture.stream = stream;
            try{
                var MediaStreamTrack = window.screenCapture.stream.getVideoTracks()[0];
                var displaySurface = '';
                if(clientData.browser.name == "Chrome"){
                    displaySurface = window.screenCapture.stream.getVideoTracks()[0].getSettings().displaySurface
                }else{ //Firefox
                    displaySurface = MediaStreamTrack.label;
                }
                if(window.screenCapture.stream.active &&
                    (displaySurface == 'monitor' || displaySurface == "Primary Monitor")){

                    window.screenCapture.start = true;
                    window.screenCapture.allow = 1;
                    window.screenCapture.open = false;
                    window.screenCapture.closeTime = Date.now();
                    screenCaptureVideo.srcObject = stream;
                    screenCaptureVideo.play();

                    $(".screenMonitorImg").attr('src','https://cdn.acmcoder.com/release/exam/2.0.5/images/pc.png');
                    $('.screenMonitor span.hoverTip').html(ACM.lang.photo.screenCaptureSuccess);
                    $(".header ul li.screenMonitor").addClass('succ').removeClass('err');

                    window.screenCaptureActive();
                    $.post('/cand/api/screenInfoRecord',{action:1},function (data) {});
                    if(hashUrl){ gotoHash(hashUrl); }

                }else{
                    cxalert(ACM.lang.hint,ACM.lang.photo.captureCheckMonitorTip);
                    toastr.error(ACM.lang.photo.captureCheckMonitorTip);
                    setTimeout(function(){
                        window.screenCapture.stream.getTracks().forEach(function (track) {
                            track.stop();
                            window.screenCaptureCheck(hashUrl,obj);
                        });
                    },5000)
                }
                if(window.ACMGlobal.recordingScreen!=0){
                    $(".header ul li.screenMonitor").removeClass('hide');
                }
            }
            catch(e){

            }
        }, error => {
            if(location.hash.indexOf("main/onlinecode")==-1){
                return;
            }
            window.screenCapture.timeLimit --;
            if(window.screenCapture.timeLimit<1){
                return;
            }
            window.screenCapture.open = false;
            window.screenCapture.closeTime = Date.now();
            window.screenCapture.allow = 0;
            window.screenCaptureActive();
            $.post('/cand/api/screenInfoRecord',{action:0},function (data) {});
            if(obj==2){
                cxalert(ACM.lang.hint,ACM.lang.photo.captureCheckTip);
            }else{
                if(hashUrl){ gotoHash(hashUrl); }
            }
            $(".screenMonitorImg").attr('src','https://cdn.acmcoder.com/release/exam/2.0.5/images/pc_err.png');
            $('.screenMonitor span.hoverTip').html(ACM.lang.photo.screenCaptureErr);
            $(".header ul li.screenMonitor").addClass('err').removeClass('succ');
            if(window.ACMGlobal.recordingScreen!=0){
                $(".header ul li.screenMonitor").removeClass('hide');
            }
        });
    }
}
window.screenCaptureAfterIntro = function(){
    if(navigator.mediaDevices && navigator.mediaDevices.getDisplayMedia){
        //检查是否intro完毕
        if(window.ACM && window.ACM.IntroCheck){
            window.getLuping();
        }else{
            setTimeout(function(){
                window.screenCaptureAfterIntro();
            },500);
        }
    }
}
window.screenCaptureActive = function(){
    if(window.screenCaptureActiveTimer){
        window.clearInterval(window.screenCaptureActiveTimer);
    }
    if(window.ACMGlobal.recordingScreen == 0){
        return;
    }
    window.screenCaptureActiveTimer = window.setInterval(function(){
        if((window.screenCapture.stream == null || (window.screenCapture.stream!=null && window.screenCapture.stream.active!=true)) 
            && window.screenCapture.open == false){
            if(window.screenCapture.start){
                $.post('/cand/api/screenInfoRecord',{action:0},function (data) {});
            }
            $(".screenMonitorImg").attr('src','https://cdn.acmcoder.com/release/exam/2.0.5/images/pc_err.png');
            $('.screenMonitor span.hoverTip').html(ACM.lang.photo.screenCaptureErr);
            $(".header ul li.screenMonitor").addClass('err').removeClass('succ');
            window.screenCapture.start = false;
            if(window.ACMGlobal.recordingScreen == 1){
                if(window.screenCaptureActiveTimer){
                    window.clearInterval(window.screenCaptureActiveTimer);
                }
            }
            if(window.ACMGlobal.recordingScreen == 2){
                if(window.screenCapture.timeLimit<1){
                    return;
                }
                cxalert(ACM.lang.hint,ACM.lang.photo.captureCheckTip);
                window.screenCaptureCheck();
            }
        }
    },3000)
}

function dataURLtoBlob(dataurl) {
    var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime });
}