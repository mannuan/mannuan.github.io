window.videoMonit = top.startVideoMonit = function(){
	//摄像头视频监控
	if(window.videoMonitStream){
		var chunks = [];
        var blob;

        var options = {
          videoBitsPerSecond : 350000,
          // height:360,
          // width:480
        }

        if(window.top.ACMGlobal && window.top.ACMGlobal.monitVideoStart == undefined){
            window.top.ACMGlobal.monitVideoStart = 0;
        }
        if(window.top.ACMGlobal && window.top.ACMGlobal.monitVideoStart == 1){
            return;
        }

        window.top.ACMGlobal.monitVideoStart == 1

        window.mediaRecorder = new MediaRecorder(window.videoMonitStream,options);

        //开始录制
        window.mediaRecorder.start();
        var fileUrl = '';

        var xhr = '';
        var stateVideo_Change = function(){
        	chunks = [];
        	blob;
            if (xhr.readyState == 4) { // 4 = "loaded"
                if (xhr.status == 200) { // 200 = OK
                    $.post('/cand/api/savevideo',{url:fileUrl},function (data) {
                        if (data) {
                            if(window.top.ACMGlobal && window.top.ACMGlobal.monitVideoStart){
                                window.top.ACMGlobal.monitVideoStart = undefined;                
                            }
                        }
                    });
                }
            }
        	//
        }

        var uploadVdeoFunction = function(accessid, dir, expire, host, policy, signature){
            if (host.indexOf("http://") > -1) { host = host.replace("http://","https://");}
            if(dir!=undefined && dir!==''){ dir=dir.replace(/\\/g,''); }
            
            var videoUrl = top.ACMGlobal.candId + '_' + Date.now() + ".mp4";
            fileUrl = 'https://cdn.acmcoder.com/' + dir + videoUrl;
            var fd = new FormData();
            fd.append("name", videoUrl);
            fd.append("key", dir + videoUrl);
            fd.append("policy", policy);
            fd.append("OSSAccessKeyId", accessid);
            fd.append("success_action_status", "200");
            fd.append("callback", '');
            fd.append("signature", signature);
            fd.append("file", blob, videoUrl);
            xhr = new XMLHttpRequest();
            xhr.timeout = 60000;
            xhr.onreadystatechange = stateVideo_Change;
            xhr.ontimeout  = function(e){}
            xhr.open('POST', host, true);
            xhr.send(fd);
        }

        var saveVideoFile = function(){
            var url = '/cand/api/ossvideo';
            if(top.ACMGlobal && top.ACMGlobal.prjId){
                url += '/' + top.ACMGlobal.prjId;
            }
        	$.get(url,function (data) {
                if (data) {
                    var accessid = data.accessid;
                    var dir = data.dir;
                    var expire = data.expire;
                    var host = data.host;
                    var policy = data.policy;
                    var signature = data.signature;
                    uploadVdeoFunction(accessid, dir, expire, host, policy, signature);
                }
            });
        }

        window.mediaRecorder.onstop = function(e){   
            blob = [];
            blob = new Blob(chunks, { 'type' : 'audio/mp4; codecs=opus' });
        	saveVideoFile();
        }
        window.mediaRecorder.ondataavailable = function(e) {
            chunks.push(e.data);
        }

        //录制十秒
        setTimeout(function(){
            try{
                window.mediaRecorder.stop();
            }
            catch(err){}
        },11000)
	}
}
