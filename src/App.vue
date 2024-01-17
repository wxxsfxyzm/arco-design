<!-- App.vue -->
<template>
  <div id="app">
    <div class="layout">
      <a-layout>
        <a-layout-header><top-menu /></a-layout-header>
        <a-layout-content><router-view /></a-layout-content>
        <a-layout-footer>Footer</a-layout-footer>
      </a-layout>
    </div>
  </div>
</template>
<style scoped>
.layout :deep(.arco-layout-header),
.layout :deep(.arco-layout-footer),
.layout :deep(.arco-layout-sider-children),
.layout :deep(.arco-layout-content) {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: var(--color-white);
  font-size: 28px;
  font-stretch: condensed;
  text-align: left;
}

.layout :deep(.arco-layout-header),
.layout :deep(.arco-layout-footer) {
  height: 64px;
  background-color: var(--color-primary-light-4);
}

.layout :deep(.arco-layout-sider) {
  width: 206px;
  background-color: var(--color-primary-light-3);
}

.layout :deep(.arco-layout-content) {
  background-color: rgb(var(--arcoblue-6));
}
</style>
<script>
import TopMenu from "./components/TopMenu.vue";
//import UserLogin from '@/components/Login';

export default {
  name: "App",
  components: {
    TopMenu,
    //UserLogin,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-size: 26px;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
