const devBaseUrl = "/";
const proBaseUrl = "/knowledge-summary/frontend/dist/";
let baseUrl;
process.env.NODE_ENV === "development"
  ? (baseUrl = devBaseUrl)
  : (baseUrl = proBaseUrl);
module.exports = {
  baseUrl: baseUrl
};
