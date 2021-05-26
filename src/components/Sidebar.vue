<template>
  <div
    class="sidebar"
    :class="{ 'show': isSidebarShown }"
  >
    <div class="buttons-container">
      <button
        class="open-button"
        @click="showSidebar"
      >settings</button>
    </div>
    <div class="sidebar-content">
      <CistercianSettings @change-transition-mode="changeTransitionMode"/>
    </div>
  </div>
</template>

<script>
import CistercianSettings from '@/components/CistercianSettings.vue';

export default {
  components: {
    CistercianSettings,
  },
  data: () => ({
    isSidebarShown: false,
  }),
  mounted() {
    document.addEventListener('click', event => {
      if (!event.target.closest('.sidebar')) {
        this.isSidebarShown = false;
        this.$emit('change-sidebar-state', false);
      }
    });
  },
  methods: {
    showSidebar() {
      this.isSidebarShown = true;
      this.$emit('change-sidebar-state', true);
    },
    changeTransitionMode($event) {
      this.$emit('change-transition-mode', $event);
    },
  },
};
</script>

<style lang="scss">
  .sidebar {
    position: fixed;
    z-index: 1;
    top: 0;
    right: 0;
    width: 300px;
    background-color: white;
    transform: translateX(300px);
    transition:
      transform .5s,
      box-shadow .7s;

    &.show {
        transform: translateX(0);
        box-shadow: 15px 0 30px 0 map-get($colors, 'shadow');
    }

    .buttons-container {
      position: fixed;
      bottom: 130px;
      left: 0;
      transform-origin: right bottom;
      transform: translateX(-100%) rotate(-90deg);
    }

    .open-button {
      padding: 10px 15px;
      font-size: 16px;
      cursor: pointer;
    }

    .sidebar-content {
      height: 100vh;
      padding: 40px 30px 100px;
      overflow: auto;
    }
  }

  @media screen and (max-width: map-get($display-breakpoints, 's')) {
    .sidebar {
      width: 200px;
      transform: translateX(200px);
    }
  }
</style>
