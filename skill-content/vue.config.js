const devBaseUrl = "/";
const proBaseUrl = "/skill-content/dist/";
let baseUrl;
process.env.NODE_ENV === "development"
  ? (baseUrl = devBaseUrl)
  : (baseUrl = proBaseUrl);

module.exports = {
  publicPath: baseUrl,
  outputDir: "dist/"
};
