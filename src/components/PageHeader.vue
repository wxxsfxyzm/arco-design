<template>
  <a-page-header
    :style="{ background: 'var(--color-bg-2)' }"
    title="ArcoDesign"
  >
    <bread-crumb />

    <template #subtitle>
      <a-space>
        <span>ArcoDesign Vue 2.0</span>
        <a-tag color="red" size="small">Default</a-tag>
      </a-space>
    </template>
    <template #extra>
      <div class="buttonRight">
        <a-space>
          <a-button>Cancel</a-button>
          <a-button type="primary">Save</a-button>
        </a-space>
      </div>
    </template>
  </a-page-header>
</template>

<style>
@media screen and (max-width: 768px) {
  .buttonRight {
    display: none;
  }
}
</style>

<script>
import BreadCrumb from "@/components/BreadCrumb.vue";
export default {
  name: "PageHeader",
  components: {
    BreadCrumb,
  },
};
</script>
