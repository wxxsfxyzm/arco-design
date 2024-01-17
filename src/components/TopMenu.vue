<template>
  <div id="pageHeader">
    <div class="menu">
      <a-menu mode="horizontal" :default-selected-keys="['1']" style="">
        <a-menu-item
          key="0"
          :style="{ padding: 0, marginRight: '38px' }"
          disabled
        >
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
        <a-menu-item key="1"
          ><router-link to="/">主页</router-link></a-menu-item
        >
        <a-menu-item key="2"
          ><router-link to="/article">文章</router-link></a-menu-item
        >
        <a-menu-item key="3"
          ><router-link to="/class">分类</router-link></a-menu-item
        >
        <a-menu-item key="4"
          ><router-link to="/about">关于</router-link></a-menu-item
        >
      </a-menu>
    </div>
    <!-- <router-view/> -->
  </div>
</template>

<script>
export default {
  name: "PageHeader",
  components: {},
};
</script>
