app.register("practiseController",["$scope","$http","$state","$location","$timeout","App",function($scope,$http,$state,$location,$timeout,App){$("#navTab").show();$timeout(function(){selTab("practise");$(".examtitle .type").hide()});$scope.App=App;window.scrollTo(0,0);$scope.loading=false;$scope.model={};$scope.$on("practise.timeOver",function(e,d){console.log("practise.timeOver");gotoHash("#/main/rules")});$scope.refreshFunc=function(){$scope.loading=true;$http.post("/cand/api/papersForPractise",$scope.model).success(function(data){if(App.checkData(data,$state)){var resultData=[];if($.cookie("lang")){data.data.forEach(function(item){if($.cookie("lang")==2){if(item.belongLan=="en"){resultData.push(item)}}else{if(item.belongLan!="en"){resultData.push(item)}}})}else{resultData=data.data}data=resultData;App.Papers=$scope.model.Papers=data;for(var i=0;i<data.length;i++){App.savePaper(resultData[i]);(function(idx){$http.post("/cand/api/papersQuestion",{paperId:$scope.model.Papers[idx]._id}).success(function(ques){if(App.checkData(ques,$state)){if(Object.isArray(ques)){for(var j=0;j<ques.length;j++){App.saveQues($scope.model.Papers[idx]._id,ques[j])}}}else{}}).error(function(data){console.log("Error: "+data)})})(i)}}else{$scope.model.Papers=null}$scope.loading=false}).error(function(data){console.log("Error: "+data);$scope.loading=false})};$scope.refreshFunc();$scope.prjPromptGet=function(){$http.post("/cand/api/prjPrompt",{}).success(function(data){if(App.checkData(data,$state)){$scope.model.prjPrompt=data}else{$scope.model.prjPrompt=""}$scope.loading=false}).error(function(data){console.log("Error: "+data);$scope.loading=false})};$scope.prjPromptGet();$scope.start=function(mt,pIndex){$http.post("/cand/api/enterPaperNow",{r:Math.random(),paperId:mt._id,rowNumber:0}).success(function(data){if(mt.forCode){var clientWidth=window.innerWidth;if(clientWidth<800){clientWidth=clientWidth-40;$.cxDialog({title:ACM.lang.hint,width:clientWidth,background:"#000",info:'<div style="padding:20px; text-align:center;">'+ACM.lang.start.codeForMobile+"</div>",ok:function(){},okText:ACM.lang.iknow})}else{gotoHash("#/main/onlinecode/{0}/{1}/{2}".Format(mt._id,-1,1))}}else{gotoHash("#/main/answer/{0}/{1}/{2}".Format(mt._id,-1,1))}}).error(function(data){alert(ACM.lang.hint,ACM.lang.practise.f5refresh)})}}]);