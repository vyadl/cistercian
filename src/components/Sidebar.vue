<template>
  <div
    class="sidebar"
    :class="{ 'show': isSidebarShown }"
  >
    <div class="buttons-container">
      <button
        class="open-button"
        :class="{ active: sidebarMode === 'settings' }"
        @click="showSidebar('settings')"
      >settings</button>
      <button
        class="open-button"
        :class="{ active: sidebarMode === 'about' }"
        @click="showSidebar('about')"
      >about</button>
    </div>
    <div class="sidebar-content">
      <transition-group name="sidebar">
        <CistercianSettings
          v-if="sidebarMode === 'settings'"
          @change-transition-mode="changeTransitionMode"
          @change-lines-color="changeLinesColor"
          key="settings"
        />
        <CistercianAbout
          v-if="sidebarMode === 'about'"
          key="about"
        />
      </transition-group>
    </div>
  </div>
</template>

<script>
import CistercianSettings from '@/components/CistercianSettings.vue';
import CistercianAbout from '@/components/CistercianAbout.vue';

export default {
  components: {
    CistercianSettings,
    CistercianAbout,
  },
  data: () => ({
    isSidebarShown: false,
    sidebarMode: null,
  }),
  mounted() {
    document.addEventListener('click', event => {
      if (!event.target.closest('.sidebar')) {
        this.isSidebarShown = false;
        this.sidebarMode = null;
        this.$emit('change-sidebar-state', false);
      }
    });
  },
  methods: {
    showSidebar(mode) {
      this.isSidebarShown = true;
      this.sidebarMode = mode;
      this.$emit('change-sidebar-state', true);
    },
    changeTransitionMode($event) {
      this.$emit('change-transition-mode', $event);
    },
    changeLinesColor($event) {
      this.$emit('change-lines-color', $event);
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
    height: 100vh;
    background-color: white;
    transform: translateX(300px);
    transition:
      transform .5s,
      box-shadow .7s;

    &.show {
        transform: translateX(0);
        box-shadow: 15px 0 30px 0 map-get($colors, 'shadow');

        .open-button {
          padding-bottom: 10px;
        }
    }

    .buttons-container {
      position: fixed;
      bottom: 15px;
      left: 0;
      transform-origin: left bottom;
      transform: rotate(-90deg);
    }

    .open-button {
      padding: 10px 15px 25px;
      font-size: 16px;
      letter-spacing: .6px;
      color: map-get($colors, 'grey');
      cursor: pointer;
      transition:
        text-shadow .2s,
        padding .3s;

      &.active {
        text-shadow:
          .5px 0 map-get($colors, 'grey' ),
          .5px 0 1px map-get($colors, 'grey' );
      }

      &:hover {
        color: black;
      }
    }

    .sidebar-content {
      position: relative;
      width: 100%;
      height: 100%;
      overflow-y: auto;
      overflow-x: hidden;
    }
  }

  @media screen and (max-width: map-get($display-breakpoints, 'xl')) {
    .sidebar {
      .buttons-container {
        bottom: 50px;
      }
    }
  }

  @media screen and (max-width: map-get($display-breakpoints, 'l')) {
    .sidebar {
      .open-button {
        padding-bottom: 10px;
      }
    }
  }

  @media screen and (max-width: map-get($display-breakpoints, 's')) {
    .sidebar {
      width: 200px;
      transform: translateX(200px);
    }
  }
</style>
