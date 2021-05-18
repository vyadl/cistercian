<template>
  <div class="home-page">
    <div class="title-container">
      <h1 class="title">numerals</h1>
      <h2 class="subtitle">decimal to cistercian</h2>
    </div>
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
    .title-container {
      position: absolute;
      z-index: -1;
      width: 100%;
      padding: 30px 40px;
    }

    .title,
    .subtitle {
      width: fit-content;
      color: $title-color;
      cursor: default;
    }

    .title {
      margin-bottom: 10px;
      font-size: 25px;
    }

    .subtitle {
      font-size: 15px;
    }
  }

  @media screen and (max-width: $title-transform-display-breakpoint) {
    .home-page {
      .title-container {
        display: flex;
        justify-content: space-between;
      }

      .title {
        transform-origin: right bottom;
        transform: rotate(-90deg) translate(10px, -400%);
      }

      .subtitle {
        transform-origin: right bottom;
        transform: rotate(-90deg) translate(20px, 120%);
      }
    }
  }
</style>
