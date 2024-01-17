<template>
  <div
    :style="{
      //background: 'var(--color-fill-2)',
      width: '70%',
      margin: '0 auto',
    }"
  >
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
        <a-space>
          <a-button>Cancel</a-button>
          <a-button type="primary">Save</a-button>
        </a-space>
      </template>
    </a-page-header>
    <a-typography :style="{ marginTop: '-40px' }">
      <a-typography-title> Design system </a-typography-title>
      <a-typography-paragraph>
        A design is a plan or specification for the construction of an object or
        system or for the implementation of an activity or process, or the
        result of that plan or specification in the form of a prototype, product
        or process. The verb to design expresses the process of developing a
        design.
      </a-typography-paragraph>
      <a-typography-paragraph>
        In some cases, the direct construction of an object without an explicit
        prior plan (such as in craftwork, some engineering, coding, and graphic
        design) may also be considered
        <a-typography-text bold>to be a design activity.</a-typography-text>
      </a-typography-paragraph>
      <a-typography-title :heading="2">ArcoDesign</a-typography-title>
      <a-typography-paragraph>
        The ArcoDesign component library defines a set of default particle
        variables, and a custom theme is to
        <a-typography-text mark>customize</a-typography-text> and
        <a-typography-text underline>overwrite</a-typography-text> this variable
        list.
      </a-typography-paragraph>
      <a-typography-paragraph blockquote>
        A design is a plan or specification for the construction of an object or
        system or for the implementation of an activity or process, or the
        result of that plan or specification in the form of a
        <a-typography-text code>prototype</a-typography-text>,
        <a-typography-text code>product</a-typography-text> or
        <a-typography-text code>process</a-typography-text>. The verb to design
        expresses the process of developing a design.
      </a-typography-paragraph>
      <a-typography-paragraph mark underline delete
        >A design is a plan or specification for the construction of an object
        or system or for the implementation of an activity or
        process.</a-typography-paragraph
      >
      <a-typography-paragraph>
        <ul>
          <li>
            Architectural blueprints
            <ul>
              <li>Architectural blueprints</li>
            </ul>
          </li>
          <li>Engineering drawings</li>
          <li>Business processes</li>
        </ul>
      </a-typography-paragraph>
      <a-typography-paragraph>
        <ol>
          <li>Architectural blueprints</li>
          <li>Engineering drawings</li>
          <li>Business processes</li>
        </ol>
      </a-typography-paragraph>
    </a-typography>
  </div>
</template>

<script>
//import router from '@/router';
import BreadCrumb from "@/components/BreadCrumb.vue";
export default {
  name: "HomePage",
  components: {
    BreadCrumb,
  },
};
</script>
