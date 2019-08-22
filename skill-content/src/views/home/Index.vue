<template>
<div style="height:100%; width:100%;">
<el-container style="height: 100%">
  <el-header class="el-header">
    <navBar 
      :contents="contents"
      :active_index="active_index"
      :is_burger_active="is_burger_active"
      ></navBar>
  </el-header>
  <el-container style="height: 100%">
    <el-aside class="el-aside" style="height: 100%">
      <contentTree
          :contents="contents2"
          :default_expand_all="true"
          :accordion="false"
        >
      </contentTree>
    </el-aside>
    <!-- 使移动端可以滚动 -->
    <el-main style="height: 100%; padding: 0px; -webkit-overflow-scrolling: touch;">
        <iframe
          ref="iframe"
          :src="blog_url"
          width="100%"
          height="100%"
          scrolling="no"
          frameBorder="0"
          >
        </iframe>
        <!-- <iframe
          ref="iframe"
          src="/mock/iframe.html"
          width="100%"
          height="100%"
          scrolling="no"
          frameBorder="0"
          >
        </iframe> -->
    </el-main>
  </el-container>
</el-container>
<sideContainer
  :is_sidebar_open="is_sidebar_open">
  <contentTree
    :contents="contents1"
    :default_expand_all="false"
    :accordion="true"
  >
  </contentTree>
</sideContainer>
</div>
</template>

<script>
import request from "@/plugins/axios.js";
import navBar from "@/components/NavBar";
import contentTree from "@/components/ContentTree";
import sideContainer from "@/components/SideContainer";

export default {
  name: "index",
  components: {
    navBar,
    contentTree,
    sideContainer
  },
  computed: {
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
    // 电脑端侧边栏的数据
    contents2: function() {
      return this.$store.state.home.sidebar_content_object[
        this.$store.state.home.navigation_selected_index
      ];
    },
    // 获取博客链接
    blog_url() {
      console.log(this.$store.getters.blog_url);
      return this.$store.getters.blog_url;
    },
    is_sidebar_open() {
      return this.$store.state.home.is_sidebar_open;
    },
    // 隐藏的侧边栏的数据
    contents1: function() {
      return this.$store.state.home.contents;
    },
  },
  created() {
    request({
      url: "/contents.json",
      method: "get"
    }).then(res => {
      let contents = res.data;
      this.$store.commit("setContents", contents[0]["contents"]);
    });
  },
  methods: {
    handleMessage(event) {
      const data = event.data;
      switch (data.cmd) {
        case "returnHeight":
          if (data.params.success) {
            this.$store.state.home.iframe_instance.height = data.params.data;
          }
      }
    }
  },
  mounted() {
    document.title = this.$route.meta.title;
    // 监听整个网页的messge消息
    window.addEventListener("message", this.handleMessage);
    // iframe在挂载之前才创建好, 把iframe句柄存放在store中
    this.$store.commit("setIframeInstance", this.$refs.iframe);
  }
}
</script>

<style lang="stylus" scoped>
@media screen and (max-width: 900px)
  .el-aside
    display none
</style>