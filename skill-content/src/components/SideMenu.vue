<template>
  <el-menu
    v-bind:default-active="activeIndex"
    @open="handleOpen"
    @close="handleClose"
    @select="handleSelect"
    unique-opened
    style="height: 100%;"
    class="side-menu"
  >
    <!-- 一级目录 -->
    <el-submenu
      v-for="cont in contents.filter(cont => cont['contents'].length)"
      v-bind:key="cont['index']"
      v-bind:index="cont['index']"
    >
      <template slot="title">
        <span>{{ cont["title"] }}</span>
      </template>
      <!-- 二级目录 -->
      <el-menu-item-group>
        <el-menu-item
          v-for="subcont in cont['contents'].filter(
            sc => !sc['contents'].length
          )"
          v-bind:key="cont['index'] + '-' + subcont['index']"
          v-bind:index="cont['index'] + '-' + subcont['index']"
        >
          {{ subcont["title"] }}
        </el-menu-item>
        <el-submenu
          v-for="subcont in cont['contents'].filter(
            sc => sc['contents'].length
          )"
          v-bind:key="cont['index'] + '-' + subcont['index']"
          v-bind:index="cont['index'] + '-' + subcont['index']"
        >
          <template slot="title">{{ subcont["title"] }}</template>
          <!-- 三级目录 -->
          <el-menu-item
            v-for="subsubcont in subcont['contents']"
            v-bind:key="
              cont['index'] + '-' + subcont['index'] + '-' + subsubcont['index']
            "
            v-bind:index="
              cont['index'] + '-' + subcont['index'] + '-' + subsubcont['index']
            "
          >
            {{ subsubcont["title"] }}
          </el-menu-item>
        </el-submenu>
      </el-menu-item-group>
    </el-submenu>
    <!-- 只有一级目录 -->
    <el-menu-item
      v-for="cont in contents.filter(cont => !cont['contents'].length)"
      v-bind:key="cont['index']"
      v-bind:index="cont['index']"
    >
      <span slot="title">{{ cont["title"] }}</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  computed: {
    contents: function() {
      return this.$store.state.home.sidebar_content_object[
        this.$store.state.home.navigation_selected_index
      ];
    },
    activeIndex: function() {
      if (this.contents.length) {
        return this.contents[0]["index"];
      }
    }
  },
  methods: {
    handleSelect(key) {
      console.log(key);
      // this.$store.commit("setNavigationSelectedIndex", key);
    },
    handleOpen(key, keyPath) {
      console.log(key);
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
    }
  }
};
</script>
