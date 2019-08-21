<template>
  <el-container style="height: 100vh; width:100vw;">
    <el-header>
      <nav class="main-nav">
        <navBar
          :contents="contents"
          :active_index="active_index"
          :is_burger_active="is_burger_active"
        >
        </navBar>
      </nav>
    </el-header>
    <el-container height="100%" style="margin-top: 1px;">
      <el-aside height="100%" width="300px" class="el-aside-sidebar">
        <contentTree
          :contents="contents2"
          :default_expand_all="true"
          :accordion="false"
        >
        </contentTree>
      </el-aside>
      <el-main
        width="100%"
        height="100%"
        style="padding: 0px; overflow:hidden;"
      >
        <iframe
          :src="blog_url"
          style="height: 100%; width: 100%; border-width: 0px;"
        >
        </iframe>
      </el-main>
    </el-container>
    <!-- 只有屏幕的宽度小于900的时候才有可能出现的sidebar -->
    <sideBar>
      <contentTree
        :contents="contents1"
        :default_expand_all="true"
        :accordion="false"
      >
      </contentTree>
    </sideBar>
  </el-container>
</template>

<script>
import navBar from "@/components/NavBar";
import sideBar from "@/components/SideBar";
import contentTree from "@/components/ContentTree";
// 导入目录数据
import contents from "@/assets/data/contents.json";

export default {
  name: "home",
  created() {
    this.$store.commit("setContents", contents[0]["contents"]);
  },
  mounted() {
    document.title = this.$route.meta.title;
  },
  components: {
    navBar,
    sideBar,
    contentTree
  },
  computed: {
    // 隐藏的侧边栏的数据
    contents1: function() {
      return this.$store.state.home.contents;
    },
    // 电脑端侧边栏的数据
    contents2: function() {
      return this.$store.state.home.sidebar_content_object[
        this.$store.state.home.navigation_selected_index
      ];
    },
    // 导航栏的数据
    contents: function() {
      return this.$store.state.home.navigation_content_array;
    },
    // 选择的导航栏的索引
    active_index: function() {
      return this.$store.state.home.navigation_selected_index;
    },
    is_burger_active() {
      return this.$store.state.home.is_sidebar_open;
    },
    blog_url() {
      console.log(this.$store.getters.blog_url);
      return this.$store.getters.blog_url;
    }
  }
};
</script>

<style lang="stylus" scoped>
@media screen and (max-width: 900px)
  .el-aside-sidebar
    display none
</style>
