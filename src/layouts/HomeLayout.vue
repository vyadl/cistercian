<template>
  <div class="home-layout">
    <div class="title-container">
      <h1 class="title">numerals</h1>
      <h2 class="subtitle">decimal to cistercian</h2>
    </div>
    <slot />
  </div>
</template>

<style lang="scss">
  .home-layout {
    .title-container {
      position: absolute;
      z-index: -1;
      width: 100%;
      padding: 30px 40px;
    }

    .title,
    .subtitle {
      width: fit-content;
      color: rgba($text-color, 0.3)
    }

    .title {
      margin-bottom: 10px;
      font-size: 25px;
    }

    .subtitle {
      font-size: 15px;
    }
  }

  @media screen and (max-width: $title-transform-display-breackpoint) {
    .home-layout{
      .title-container {
        display: flex;
        justify-content: space-between;
      }

      .title {
        transform-origin: right bottom;
        transform: rotate(-90deg) translate(10px, -300%);
      }

      .subtitle {
        transform-origin: right bottom;
        transform: rotate(-90deg) translate(20px, 50%);
      }
    }
  }
</style>
