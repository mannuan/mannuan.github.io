const home = {
  state: {
    contents: [], // 总目录
    navigation_content_array: [], // 导航目录
    sidebar_content_object: {}, // 侧边目录 {navigation_selected_index: sidebar_content}
    navigation_selected_index: "", // 选中的导航目录的关键字
    is_sidebar_open: false,
    default_blog_id: "20180731192512", // 缺省的博客的id
    blog_id: "20180731192512", // 博客的id
    blog_section: "", // 博客的节
    default_blog_url: "/html/skill-content-404.html" // 默认的博客页面
  },
  getters: {
    blog_url: state => {
      if (state.blog_id) {
        return (
          "/post/" +
          state.blog_id +
          "/?mode=skill-content#" +
          state.blog_section
        );
      } else {
        return "/html/skill-content-404.html";
      }
    }
  },
  mutations: {
    setContents: (state, contents) => {
      let navigation_content_array = state.navigation_content_array;
      let sidebar_content_object = state.sidebar_content_object;
      // 遍历生成一级目录
      contents.forEach((e1, i1) => {
        navigation_content_array.push({
          index: e1["index"],
          title: e1["title"]
        });
        if (e1["contents"].length > 0) {
          navigation_content_array[i1]["contents"] = [];
          // 遍历生成二级目录
          e1["contents"].forEach((e2, i2) => {
            if (e2["index"] !== undefined && e2["title"] !== undefined) {
              navigation_content_array[i1]["contents"].push({
                index: e2["index"],
                title: e2["title"]
              });
              let navigation_selected_index = e1["index"] + "-" + e2["index"];
              if (i1 === 0) {
                // 取出contents列表的第一个navigation_selected_index
                state.navigation_selected_index = navigation_selected_index;
              }
              sidebar_content_object[navigation_selected_index] =
                e2["contents"];
              if (i2 === 0) {
                state.contents.push(e1);
              }
            } else {
              // 出现这个的判断的原因是设置为一级目录
              sidebar_content_object[e1["index"]] =
                e1["contents"][0]["contents"];
              if (i2 === 0) {
                state.contents.push({
                  index: e1["index"],
                  title: e1["title"],
                  contents: e1["contents"][0]["contents"]
                });
              }
            }
          });
        } else {
          // 出现这个的原因是这个栏目正在更新没有内容,一般不会出现这种情况
          sidebar_content_object[e1["index"]] = [];
          state.contents.push(e1);
        }
      });
    },
    setNavigationSelectedIndex: (state, _navigation_selected_index) => {
      state.navigation_selected_index = _navigation_selected_index;
    },
    toggleSide: state => {
      state.is_sidebar_open = !state.is_sidebar_open;
    },
    setBlog: (state, blog) => {
      state.blog_id = blog["id"];
      state.blog_section = blog["section"];
    }
  }
};

export default home;
