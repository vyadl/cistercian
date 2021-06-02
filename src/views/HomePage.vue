<template>
  <div class="home-page">
    <h1 class="title">numerals</h1>
    <h2 class="subtitle">decimal to cistercian</h2>
    <div
      class="main-content"
      :class="{ parallax: isSidebarShown }"
    >
      <CistercianNumbers
        :transition-mode="transitionMode"
        :lines-color="linesColor"
      />
    </div>
    <Sidebar
      @change-sidebar-state="isSidebarShown = $event"
      @change-transition-mode="transitionMode = $event"
      @change-lines-color="linesColor = $event"
    />
  </div>
</template>

<script>
import CistercianNumbers from '@/components/CistercianNumbers.vue';
import Sidebar from '@/components/Sidebar.vue';

export default {
  components: {
    CistercianNumbers,
    Sidebar,
  },
  data: () => ({
    isSidebarShown: false,
    transitionMode: '',
    linesColor: '',
  }),
};
</script>

<style lang="scss">
  .home-page {
    width: 100%;

    .title,
    .subtitle {
      position: absolute;
      z-index: 1;
      left: 25px;
      width: fit-content;
      color: map-get($colors, 'title');
      cursor: default;
    }

    .title {
      top: 15px;
      font-size: 20px;
    }

    .subtitle {
      top: 45px;
      font-size: 12px;
    }

    .main-content {
      transition: transform .5s;
      &.parallax {
        transform: translateX(-20px);
      }
    }
  }

  @media screen and (max-width: map-get($display-breakpoints, 'l')) {
    .home-page {
      .title {
        font-size: 16px;
        transform-origin: right top;
        transform: translateX(-115%) rotate(-90deg);
      }

      .subtitle {
        top: 15px;
        left: auto;
        right: 30px;
        transform-origin: right top;
        transform: rotate(-90deg);
      }
    }
  }
</style>
