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

let args = getQueryStringArgs(location.href);
if(JSON.stringify(args) !== "{}"){
    if(args["mode"] === "skill-content"){
        document.getElementsByTagName("html")[0].style="width: 100%; height: 100%;";
        document.getElementsByTagName("body")[0].style="width: 100%; height: 100%;padding: 20px;";
        document.querySelector("body > div").style="width: 100%; height: 100%;";
        document.getElementById("sidebar").outerHTML = "";
        document.querySelector("body > div > div.main").style="margin-left: 10px; width: 100%; height: 100%;padding: 0px;margin: 0px;";
        document.getElementById("content").style="width: 100%; height: 100%;margin: 0px; padding: 0px;";
        document.getElementsByTagName("article")[0].style="width: 100%; height: 100%;";
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
    }
}
