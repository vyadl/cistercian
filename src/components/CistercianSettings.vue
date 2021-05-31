<template>
  <div class="cistercian-settings">
    <form class="settings-form">
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
  </div>
</template>

<script>
import { DEFAULT_TRANSITION_MODE } from 'root/config';

export default {
  data: () => ({
    transitionMode: DEFAULT_TRANSITION_MODE,
  }),
  methods: {
    changeTransitionMode(mode) {
      this.transitionMode = mode;
      this.$emit('change-transition-mode', mode);
    },
  },
};
</script>

<style lang="scss">
  .cistercian-settings {
    .settings-form {
      display: flex;
      flex-direction: column;
      align-items: center;
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
    }
  }
</style>
