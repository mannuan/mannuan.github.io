<template>
  <el-menu
    v-bind:default-active="active_index"
    mode="horizontal"
    @select="handleSelect"
    class="nav-menu"
  >
    <burger class="nav-menu-burger" :is_burger_active="is_burger_active">
    </burger>
    <el-submenu
      v-for="cont in contents.filter(cont => cont['contents'].length)"
      v-bind:key="cont['index']"
      v-bind:index="cont['index']"
      class="nav-menu-item"
    >
      <template slot="title">{{ cont["title"] }}</template>
      <el-menu-item
        v-for="subcont in cont['contents']"
        v-bind:key="cont['index'] + '-' + subcont['index']"
        v-bind:index="cont['index'] + '-' + subcont['index']"
      >
        {{ subcont["title"] }}
      </el-menu-item>
    </el-submenu>
    <el-menu-item
      v-for="cont in contents.filter(cont => !cont['contents'].length)"
      v-bind:key="cont['index']"
      v-bind:index="cont['index']"
      class="nav-menu-item"
    >
      {{ cont["title"] }}
    </el-menu-item>
  </el-menu>
</template>

<script>
import { mapMutations } from "vuex";
import burger from "@/components/Burger.vue";

export default {
  name: "navbar",
  components: {
    burger
  },
  methods: {
    handleSelect(key) {
      this.$store.commit("setNavigationSelectedIndex", key);
    }
  },
  props: {
    contents: {
      type: Array,
      default: []
    },
    active_index: {
      type: String,
      required: true
    },
    is_burger_active: {
      type: Boolean,
      required: true
    }
  }
};
</script>

<style lang="stylus" scoped>
.nav-menu-item
  float right
.nav-menu-burger
  float left
  visibility hidden
@media screen and (max-width: 900px)
  .nav-menu-burger
    visibility visible
@media screen and (max-width: 900px)
  .nav-menu-item
    display none
</style>
