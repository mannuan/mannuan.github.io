<template>
  <div class="side-tree">
    <el-input
      class="side-tree-search"
      placeholder="输入关键字进行过滤"
      v-model="filterText"
      clearable
    >
    </el-input>

    <el-tree
      class="filter-tree side-tree-tree"
      :data="contents"
      :props="defaultProps"
      highlight-current
      :default-expand-all="default_expand_all"
      :accordion="accordion"
      icon-class="el-icon-plus"
      :filter-node-method="filterNode"
      @node-click="handleNodeClick"
      ref="tree"
    >
    </el-tree>
  </div>
</template>

<script>
export default {
  watch: {
    filterText(val) {
      this.$refs.tree.filter(val);
    }
  },
  methods: {
    filterNode(value, data) {
      if (!value) return true;
      // 大小写不敏感
      return (
        data[this.defaultProps["label"]]
          .toLowerCase()
          .indexOf(value.toLowerCase()) !== -1
      );
    },
    handleNodeClick(data) {
      let blog_obj = {};
      blog_obj["id"] = data["blog_id"] ? data["blog_id"] : "";
      blog_obj["section"] = data["blog_section"] ? data["blog_section"] : "";
      this.$store.commit("setBlog", blog_obj);
    }
  },
  data() {
    return {
      filterText: "",
      defaultProps: {
        children: "contents",
        label: "title"
      }
    };
  },
  props: {
    contents: {
      type: Array,
      default: []
    },
    default_expand_all: {
      type: Boolean,
      required: true
    },
    accordion: {
      type: Boolean,
      required: true
    }
  }
};
</script>

<style lang="stylus" scoped>
.side-tree
    background-color white
    height 100%
    .side-tree-search
        width 260px
        padding 20px 0px
        margin-left 20px
    .side-tree-tree
        width 260px
        padding 20px
</style>
