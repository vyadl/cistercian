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
export default {
  data: () => ({
    transitionMode: 'separately',
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
      padding: 10px;
      font-size: 16px;
      cursor: pointer;
      transition: all .3s;

      &.active {
        font-weight: 500;
      }

      &:hover {
        text-shadow: 0px 3px 3px map-get($colors, 'shadow');
      }
    }
  }

  @media screen and (max-width: map-get($display-breakpoints, 's')) {
    .cistercian-settings {
      .form-title {
        font-size: 11px;
      }

      .transition-mode-button {
        font-size: 14px;
      }
    }
  }
</style>
