<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
import HomeLayout from '@/layouts/HomeLayout.vue';
import InfoLayout from '@/layouts/InfoLayout.vue';

export default {
  components: {
    HomeLayout,
    InfoLayout,
  },
  computed: {
    layout() {
      return this.$route.meta.layout ? this.$route.meta.layout : 'HomeLayout';
    },
  },
};
</script>
