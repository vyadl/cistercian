<template>
  <div class="cistercian-numbers">
    <form class="form-number">
      <input
        class="input-number"
        type="number"
        v-model.number="number"
        @input.prevent="defineDigitsDebounced"
      >
      <div
        class="message"
        v-if="number >= 9999"
      >
        <span>максимальное число - 9999</span>
      </div>
    </form>
    <div class="cistercian-number">
      <transition name="fade-central">
        <div
          class="central-line"
          v-if="number > 0"
        ></div>
      </transition>
        <div
          v-for="digit in digitsToRender"
          class="digit"
          :class="[digit.digitClass, digit.numeralClass]"
          :key="digit.digitClass"
        >
          <transition name="fade">
            <div>
              <div class="first-line"></div>
              <div class="second-line"></div>
              <div class="third-line"></div>
            </div>
          </transition>
        </div>
    </div>
  </div>
</template>

<script>
import { debounce } from '@/utils/utils';

const DELAY_ON_INPUT = 1000;

export default {
  data: () => ({
    number: null,
    digits: {
      units: 0,
      tens: 0,
      hundreds: 0,
      thousands: 0,
    },
  }),
  computed: {
    digitsToRender() {
      return [
        {
          digitClass: 'units',
          numeralClass: this.digits.units ? `numeral-${this.digits.units}` : '',
        },
        {
          digitClass: 'tens',
          numeralClass: this.digits.tens ? `numeral-${this.digits.tens}` : '',
        },
        {
          digitClass: 'hundreds',
          numeralClass: this.digits.hundreds ? `numeral-${this.digits.hundreds}` : '',
        },
        {
          digitClass: 'thousands',
          numeralClass: this.digits.thousands ? `numeral-${this.digits.thousands}` : '',
        },
      ];
    },
  },
  mounted() {
    if (this.$route.params.number) {
      this.number = +this.$route.params.number;
      this.defineDigits();
    }
  },
  methods: {
    defineDigits() {
      if (this.number > 9999) {
        this.number = 9999;
      }

      if (this.number) {
        this.$router.push({
          name: 'number',
          params: { number: this.number },
        }).catch(() => {});
      } else {
        this.$router.push({ name: 'homePage' }).catch(() => {});
      }

      this.digits.units = this.number % 10;
      this.digits.tens = Math.floor((this.number % 100) / 10);
      this.digits.hundreds = Math.floor((this.number % 1000) / 100);
      this.digits.thousands = Math.floor(this.number / 1000);
    },
    defineDigitsDebounced: debounce(function defineDigitsForDebounce() {
      this.defineDigits();
    }, DELAY_ON_INPUT),
  },
};
</script>

<style lang="scss">
  .cistercian-numbers {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px;

    .form-number {
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 100px;
    }

    .input-number {
      width: 100px;
      margin-bottom: 5px;

      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        display: none;
      }
    }

    .message {
      font-size: 14px;
    }

    .cistercian-number {
      position: relative;
      width: 290px;
      height: 450px;
    }

    .central-line {
      width: $line-width;
      height: 100%;
      margin-left: auto;
      margin-right: auto;
      border-radius: $border-radius;
      background-color: $line-color;
    }

    .digit {
      position: absolute;
      width: 150px;
      height: 150px;
    }

    .units {
      top: 0;
      right: 0;
    }

    .tens {
      top: 0;
      left: 0;
      transform-origin: center;
      transform: scale(-1, 1);
    }

    .hundreds {
      bottom: 0;
      right: 0;
      transform-origin: center;
      transform: scale(1, -1);
    }

    .thousands {
      bottom: 0;
      left: 0;
      transform-origin: center;
      transform: scale(-1, -1);
    }

    .first-line,
    .second-line,
    .third-line {
      display: none;
      position: absolute;
      width: 100%;
      height: $line-width;
      border-radius: $border-radius;
      background-color: $line-color;
    }

    .numeral-1 {
      .first-line {
        display: block;
        top: 0;
      }
    }

    .numeral-2 {
      .first-line {
        display: block;
        bottom: 0;
      }
    }

    .numeral-3 {
      .first-line {
        display: block;
        top: 0;
        width: 130%;
        transform-origin: center left;
        transform: rotate(44deg) translate(-2px, -5px);
      }
    }

    .numeral-4 {
      .first-line {
        display: block;
        bottom: 0;
        width: 130%;
        transform-origin: top left;
        transform: rotate(-44deg) translateX(-2px);
      }
    }

    .numeral-5 {
      .first-line {
        display: block;
        top: 0;
      }

      .second-line {
        display: block;
        bottom: 0;
        width: 131%;
        transform-origin: top left;
        transform: rotate(-44deg) translateX(-2px);
      }
    }

    .numeral-6 {
      .first-line {
        display: block;
        transform-origin: top right;
        transform: rotate(-90deg) translateY(-100%);
      }
    }

    .numeral-7 {
      .first-line {
        display: block;
        top: 0;
      }

      .second-line {
        display: block;
        transform-origin: top right;
        transform: rotate(-90deg) translateY(-100%);
      }
    }

    .numeral-8 {
      .first-line {
        display: block;
        bottom: 0;
      }

      .second-line {
        display: block;
        transform-origin: top right;
        transform: rotate(-90deg) translateY(-100%);
      }
    }

    .numeral-9 {
      .first-line,
      .second-line,
      .third-line {
        display: block;
      }

      .first-line {
        top: 0;
      }

      .second-line {
        bottom: 0;
      }

      .third-line {
        transform-origin: top right;
        transform: rotate(-90deg) translateY(-100%);
      }
    }
  }
</style>
