import Axios from "axios";
import config from "../../vue.config";

// Axios.defaults.headers.post["Content-Type"] =
//   "application/x-www-form-urlencoded";

// 创建axios实例
const instance = Axios.create({
  baseURL: config.publicPath, // api 的 base_url
  timeout: 30000 // request timeout
});

export default instance;
