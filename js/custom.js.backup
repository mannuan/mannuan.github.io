/* Custom JS */

function getQueryStringArgs() {
    var qs = (location.search.length > 0 ? location.search.substring(1) : ""), 
        args = {},
        items = qs.length ? qs.split("&") : [],
        item = null,
        name = null,
        value = null,
        i = 0,
        len = items.length;
    for (i=0; i < len; i++){
        item = items[i].split("=");
        name = decodeURIComponent(item[0]);
        value = decodeURIComponent(item[1]);
        if (name.length) {
            args[name] = value;
        }
    }
    return args;
}

function downloadPDF(){
    html2canvas();
}

let args = getQueryStringArgs(location.href);
if(JSON.stringify(args) !== "{}"){
    if(args["mode"] === "skill-content" || args["mode"] === "resume"){
        document.getElementsByTagName("html")[0].style="width: 100%; height: 100%;";
        document.getElementsByTagName("body")[0].style="width: 100%; height: 100%;";
        document.querySelector("body > div").style="width: 100%;";
        document.getElementById("sidebar").outerHTML = "";
        document.querySelector("body > div > div.main").style="margin-left: 10px; width: 100%; height: 100%;padding: 0px;margin: 0px;";
        document.getElementById("content").style="width: 100%; height: 100%;margin: 0px; padding: 0px;display: flex; justify-content: center;";
        document.getElementsByTagName("article")[0].style="width: 100%; height: 100%;max-width: 1024px;padding: 10px 20px 40px 20px;";
        document.getElementsByTagName("header")[0].style="width: 100%;";
        document.querySelector("#content > article > header > div").style="width: auto; max-width: 100%;display: flex; align-items: center;justify-content: center;flex-direction: column;";
        document.querySelector("#content > article > header > div > div.header-info").style="text-align: center;";
        document.getElementById("main-menu").outerHTML = "";
        document.querySelector("body > div > div.main > div").outerHTML = "";
        document.getElementById("header").outerHTML = "";
        document.querySelector("#content > article > header > div > div.entry-meta > span.byline > a").removeAttribute("href");
        document.querySelector("#content > nav").outerHTML = "";
        document.querySelector("#content > article > footer > div > div.categories > a").removeAttribute("href");
        document.querySelector("#content > article > div").style="max-width: 100%;";
        let tags = document.querySelectorAll("#content > article > footer > div > div.tags > a");
        for(let i=0;i<tags.length;i++){
            tags[i].removeAttribute("href");
        }
        document.getElementById("footer").outerHTML = "";
        if(args["mode"] == "resume"){
            document.getElementsByTagName("header")[0].style.display="none";
            document.getElementsByTagName("footer")[0].style.display="none";
            document.getElementById("英文简历").style.display = "none";
            document.getElementById("jsCpn_0_component_0").style.border = "0px;";
            document.getElementsByTagName("article")[0].style.padding = "0px";
            // let downloader = document.createElement("button");
            // downloader.innerText = "下载";
            // downloader.style = "background: skyblue;font-size: 24px;padding: 10px;font-family: Georgia, serif;position:fixed;right:20px;bottom:20px;";
            // document.body.appendChild(downloader);
            // downloader.onclick = downloadPDF;
        }
    }
} else {
    if (location.href.split("/").filter(item => item).length <= 2){
        // 如何访问主页"/"则重定向到skills的页面
        location.href = "/skill-content/dist/";
    }
}

window.parent.postMessage({
    cmd: 'returnHeight',
    params: {
        success: true,
        data: document.body.scrollHeight + 'px'
    }
}, '*');

