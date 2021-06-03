<template>
  <div class="cistercian-settings">
    <form class="settings">
      <div class="form-title">lines appearence mode</div>
      <div class="transition-mode-buttons-container">
        <button
          class="transition-mode-button"
          :class="{ active: transitionMode === 'together' }"
          @click.prevent="changeTransitionMode('together')"
        >together</button>
        <button
          class="transition-mode-button"
          :class="{ active: transitionMode === 'separately' }"
          @click.prevent="changeTransitionMode('separately')"
        >separately</button>
      </div>
    </form>
    <form class="settings">
      <div class="form-title">lines color</div>
      <div class="lines-color-buttons-container">
        <button
          class="lines-color-button"
          v-for="(color, name) in linesColorPalette"
          :key="name"
          :class="{ active: linesColor === color }"
          :style="{ 'background-color': color }"
          @click.prevent="changeLinesColor(color)"
        ></button>
      </div>
    </form>
  </div>
</template>

<script>
import { DEFAULT_TRANSITION_MODE, DEFAULT_LINES_COLOR, LINES_COLOR_PALETTE } from 'root/config';

export default {
  data: () => ({
    transitionMode: localStorage.getItem('transition-mode') || DEFAULT_TRANSITION_MODE,
    linesColor: localStorage.getItem('lines-color') || DEFAULT_LINES_COLOR,
    linesColorPalette: LINES_COLOR_PALETTE,
  }),
  methods: {
    changeTransitionMode(mode) {
      this.transitionMode = mode;
      this.$emit('change-transition-mode', mode);
      localStorage.setItem('transition-mode', mode);
    },
    changeLinesColor(color) {
      this.linesColor = color;
      this.$emit('change-lines-color', color);
      localStorage.setItem('lines-color', color);
    },
  },
};
</script>

<style lang="scss">
  .cistercian-settings {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 40px 20px 100px;

    .settings {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 50px;
    }

    .form-title {
      margin-bottom: 15px;
      font-size: 14px;
    }

    .transition-mode-buttons-container {
      display: flex;
      justify-content: space-around;
      width: 100%;
    }

    .transition-mode-button {
      display: inline-block;
      padding: 0;
      border-bottom: 1px solid white;
      line-height: 15.5px;
      font-size: 16px;
      text-shadow:
        -.5px .5px white,
        -.5px -.5px white,
        .5px -.5px white,
        .5px .5px white;
      cursor: pointer;
      transition: .3s;

      &.active {
        border-color: map-get($colors , 'text');
      }

      &:hover {
        color: map-get($colors, 'light-grey');

        &.active {
          border-color: map-get($colors , 'light-grey');
        }
      }
    }

    .lines-color-buttons-container {
      display: grid;
      grid-template-rows: 1fr 1fr;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 10px;
    }

    .lines-color-button {
      display: block;
      width: 40px;
      height: 40px;
      padding: 0;
      cursor: pointer;
      transition: transform .3s;

      &:hover {
        transform: scale(1.05);
      }
    }
  }

  @media screen and (max-width: map-get($display-breakpoints, 's')) {
    .cistercian-settings {
      .form-title {
        font-size: 11px;
      }

      .transition-mode-button {
        line-height: 11.5px;
        font-size: 12px;
      }

      .lines-color-button {
        width: 35px;
        height: 35px;
      }
    }
  }
</style>
