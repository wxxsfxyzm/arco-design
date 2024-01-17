<!-- App.vue -->
<template>
  <div id="app">
    <div id="container" class="layout" style="height: 100%; width: 100%">
      <a-layout style="height: 100%">
        <div id="mainContent">
          <a-layout-header><top-menu /></a-layout-header>
          <a-layout-content id="alcontent"><router-view /></a-layout-content>
          <a-layout-footer><bottom-footer /></a-layout-footer>
        </div>
      </a-layout>
    </div>
  </div>
</template>
<style scoped>
#mainContent {
  margin-top: 0px;
  min-height: 280px;
  margin-right: calc(100% - 100vw);
}
#alcontent {
  margin-top: 0px;
  min-height: 100vh;
}
.layout :deep(.arco-layout-content) {
  background-color: var(--color-bg-2);
  display: flex;
  align-items: flex-start;
  vertical-align: top;
  flex-direction: column;
  justify-content: center;
  color: var(--color-text-1);
  font-size: 22px;
  /* font-stretch: condensed; */
  text-align: left;
}
.layout :deep(.arco-layout-header) {
  text-align: center;
}
.layout :deep(.arco-layout-footer) {
  height: 64px;
  background-color: var(--color-bg-2);
  font-size: 12px;
}
</style>
<script>
import TopMenu from "./components/TopMenu.vue";
import BottomFooter from "./components/BottomFooter.vue";
//import UserLogin from '@/components/Login';

export default {
  name: "App",
  components: {
    TopMenu,
    BottomFooter,
    //UserLogin,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  width: 100%;
  text-align: center;
  font-size: 26px;
  color: #2c3e50;
  margin-top: 0px;
  /* overflow-x: hidden; */
}
</style>
