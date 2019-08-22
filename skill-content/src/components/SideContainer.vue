<template id="sidebar">
  <div class="sidebar">
    <!-- 要使用v-show这样就可以保留之前点击的状态 -->
    <div
      class="sidebar-backdrop"
      @click="closeSidebarPanel"
      v-show="is_sidebar_open"
    ></div>
    <transition name="slide">
      <div v-show="is_sidebar_open" class="sidebar-panel">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "sidebar",
  methods: {
    ...mapMutations(["toggleSide"]),
    closeSidebarPanel: function() {
      this.toggleSide();
    }
  },
  props: {
    is_sidebar_open: {
      type: Boolean,
      required: true
    }
  }
};
</script>

<style>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.2s ease;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(-100%);
  transition: all 150ms ease-in 0s;
}

.sidebar-backdrop {
  background-color: rgba(19, 15, 64, 0.4);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  cursor: pointer;
}

.sidebar-panel {
  overflow-y: auto;
  /* background-color: #130f40; */
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  z-index: 999;
  /* padding: 3rem 20px 2rem 20px; */
  width: 300px;
}
</style>
