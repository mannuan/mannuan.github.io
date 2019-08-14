const devPublicPath = "/";
const proPublicPath = "/knowledge-architecture/dist/";
let publicPath;
process.env.NODE_ENV === "development"
  ? (publicPath = devPublicPath)
  : (publicPath = proPublicPath);
module.exports = {
  publicPath: publicPath
};
