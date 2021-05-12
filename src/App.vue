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
      let layout = HomeLayout;

      if (this.$route.meta.layout) {
        layout = this.$route.meta.layout;
      }

      return layout;
    },
  },
};
</script>
