<template>
  <div
    :style="{
      //background: 'var(--color-fill-2)',
      margin: '0 auto',
    }"
  >
    <page-header />
    <div
      :style="{
        //background: 'var(--color-fill-2)',
        width: '90%',
        margin: '0 auto',
      }"
    >
      <a-typography :style="{ marginTop: '-40px' }">
        <a-typography-title>For other uses, see Design</a-typography-title>
        <a-typography-paragraph>
          A design is a plan or specification for the construction of an object
          or system or for the implementation of an activity or process, or the
          result of that plan or specification in the form of a prototype,
          product or process. The verb to design expresses the process of
          developing a design. In some cases, the direct construction of an
          object without an explicit prior plan (such as in craftwork, some
          engineering, coding, and graphic design) may also be considered to be
          a design activity. The design usually has to satisfy certain goals and
          constraints, may take into account aesthetic, functional, economic, or
          socio-political considerations, and is expected to interact with a
          certain environment. Major examples of designs include architectural
          blueprints,engineering drawings, business processes, circuit diagrams,
          and sewing patterns.Major examples of designs include architectural
          blueprints,engineering drawings, business processes, circuit diagrams,
          and sewing patterns.
        </a-typography-paragraph>
      </a-typography>
    </div>
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader.vue";
export default {
  name: "ArticlePage",
  components: {
    PageHeader,
  },
};
</script>
