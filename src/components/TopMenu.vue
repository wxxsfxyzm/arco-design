<template>
  <div id="pageHeader">
    <a-row
      class="grid"
      style="
        display: flex;
        align-items: center;
        background-color: var(--color-bg-2);
      "
    >
      <a-col flex="auto">
        <div class="menu" justify="start">
          <a-menu
            v-model="selectedKey"
            mode="horizontal"
            :selected-keys="[selectedKey]"
          >
            <a-menu-item key="0" :style="{ padding: 0, marginRight: '38px' }">
              <div
                :style="{
                  width: '80px',
                  height: '30px',
                  borderRadius: '2px',
                  background: 'var(--color-fill-3)',
                  cursor: 'text',
                }"
              />
            </a-menu-item>
            <a-menu-item key="/" @click="navigator('/')">主页</a-menu-item>
            <a-menu-item key="/article" @click="navigator('/article')"
              >文章</a-menu-item
            >
            <a-menu-item key="/class" @click="navigator('/class')"
              >分类</a-menu-item
            >
            <a-menu-item key="/about" @click="navigator('/about')"
              >关于</a-menu-item
            >
          </a-menu>
        </div>
      </a-col>
      <a-col flex="auto">
        <div>auto</div>
      </a-col>
      <a-col flex="auto" style="display: flex; align-items: center">
        <a-space>
          <a-button type="primary" @click="login">登录</a-button>
          <a-button @click="register">注册</a-button>
        </a-space>
      </a-col>
    </a-row>

    <!-- <router-view/> -->
  </div>
</template>

<script>
import router from "@/router";
export default {
  computed: {
    selectedKey: {
      get() {
        if (this.$route.path === "/home") {
          return "/";
        }
        return this.$route.path;
      },
      set(key) {
        console.log(key);
        this.$router.push({ key });
      },
    },
  },

  methods: {
    navigator(path) {
      router.push({ path: path });
    },
    login() {
      // 登录逻辑
      console.log("登录按钮被点击");
    },
    register() {
      // 注册逻辑
      console.log("注册按钮被点击");
    },
  },
  name: "PageHeader",
  components: {},
};
</script>
