<template>
  <div class="home-page">
    <h1 class="title">numerals</h1>
    <h2 class="subtitle">decimal to cistercian</h2>
    <CistercianNumbers />
  </div>
</template>

<script>
import CistercianNumbers from '@/components/CistercianNumbers.vue';

export default {
  components: {
    CistercianNumbers,
  },
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
      color: $title-color;
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
  }

  @media screen and (max-width: $title-transform-display-breakpoint) {
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
