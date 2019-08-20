import request from "@/plugins/axios.js";
import $ from "jquery";

export function getBlog(url) {
  return request({
    url: url,
    method: "get"
  })
    .then(res => {
      // 创建一个虚拟dom节点
      let el = document.createElement("html");
      let result = "";
      el.innerHTML = res.data;
      // $("head > link[rel='stylesheet']", el).each(function() {
      //   result += this.outerHTML;
      // });
      $("#sidebar", el).remove();
      $("#main-menu", el).remove();
      $("body > div > div.main > div", el).remove();
      $("#header", el).remove();
      $("#content > nav", el).remove();
      $("#content > article > footer", el).remove();
      $("#footer", el).remove();
      // $("script", el).remove();
      result += el.outerHTML;
      // console.log(result);
      return result;
    })
    .catch(error => {
      return error;
    });
}
