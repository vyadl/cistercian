<template>
  <div class="cistercian-numbers">
    <form class="form-number">
      <input
        class="input-number"
        type="number"
        v-model.number="number"
        @input.prevent="updateDigits"
      >
      <div class="message-container">
        <span
          class="message"
          v-if="isValidationMessageShown"
        >max number - 9999</span>
      </div>
    </form>
    <div class="cistercian-number">
      <transition :name="lineTransition">
        <div
          class="central-line"
          v-if="isLineShown && number"
        ></div>
      </transition>
        <div
          class="digit"
          :class="[digit, `numeral-${numeral}`]"
          v-for="(numeral, digit, index) in digits"
          :key="digit"
        >
          <transition :name="`separately-${digitsTransitionsOrder[index]}`">
            <div v-if="isLineShown">
              <div class="line first"></div>
              <div class="line second"></div>
              <div class="line third"></div>
            </div>
          </transition>
        </div>
    </div>
  </div>
</template>

<script>
import { debounce, shuffleArray } from '@/utils/utils';
import { DELAY_ON_INPUT } from 'root/config';

export default {
  data: () => ({
    number: null,
    digits: {
      units: 0,
      tens: 0,
      hundreds: 0,
      thousands: 0,
    },
    isLineShown: false,
    lineTransition: 'separately-central',
    digitsTransitionsOrder: ['1', '2', '3', '4'],
    isValidationMessageShown: false,
  }),
  mounted() {
    if (this.$route.params.number) {
      this.number = +this.$route.params.number;
      this.defineDigits();
    }
  },
  methods: {
    shuffledigitsTransitionsOrder() {
      this.digitsTransitionsOrder = shuffleArray(this.digitsTransitionsOrder);
    },
    defineDigits() {
      if (this.number > 9999) {
        this.number = 9999;
        this.isValidationMessageShown = true;
      }

      if (this.number) {
        this.$router.push({
          name: 'homePageWithNumber',
          params: { number: this.number },
        }).catch(() => {});
      } else {
        this.$router.push({ name: 'homePage' }).catch(() => {});
      }

      this.digits.units = this.number % 10;
      this.digits.tens = Math.floor((this.number % 100) / 10);
      this.digits.hundreds = Math.floor((this.number % 1000) / 100);
      this.digits.thousands = Math.floor(this.number / 1000);

      this.isLineShown = true;
    },
    defineDigitsDebounced: debounce(function defineDigitsForDebounce() {
      this.defineDigits();
    }, DELAY_ON_INPUT),
    updateDigits() {
      this.isLineShown = false;
      this.isValidationMessageShown = false;
      this.shuffledigitsTransitionsOrder();
      this.defineDigitsDebounced();
    },
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
      margin-bottom: 40px;
    }

    .input-number {
      width: 100px;
      margin-bottom: 5px;
      padding-bottom: 3px;
      border-bottom: 1px solid $border-color;
      text-align: center;
      color: $text-color;
      transition: border-color .2s;

      &:focus {
        border-color: $border-focus-color;
      }
    }

    .message-container {
      height: 20px;
    }

    .message {
      font-size: 14px;
    }

    .cistercian-number {
      position: relative;
      width: $digit-block-width * 2;
      height: $digit-block-width * 3;
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
      width: $digit-block-width;
      height: $digit-block-width + 50px;
      overflow: hidden;
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

    .line {
      display: none;
      position: absolute;
      width: 100%;
      height: $line-width;
      border-radius: $border-radius;
      background-color: $line-color;
    }

    .numeral-1 {
      .first {
        display: block;
        top: 0;
        right: 0;
        width: 150%;
      }
    }

    .numeral-2 {
      .first {
        display: block;
        bottom: 50px;
        right: 0;
      }
    }

    .numeral-3 {
      .first {
        display: block;
        top: 0;
        left: 0;
        width: 130%;
        transform-origin: left bottom;
        transform: rotate(45deg) translate(-11px, 2px);
      }
    }

    .numeral-4 {
      .first {
        display: block;
        top: 0;
        right: 0;
        width: 150%;
        transform-origin: right bottom;
        transform: rotate(-45deg);
      }
    }

    .numeral-5 {
      .first {
        display: block;
        top: 0;
        right: 0;
        width: 150%;
      }

      .second {
        display: block;
        top: 0;
        right: 0;
        width: 150%;
        transform-origin: right center;
        transform: rotate(-45deg) translate(1px, -4px);
      }
    }

    .numeral-6 {
      .first {
        display: block;
        top: 0;
        right: 0;
        transform-origin: right top;
        transform: rotate(-90deg) translate(-1px, -100%);
      }
    }

    .numeral-7 {
      .first {
        display: block;
        top: 0;
        right: 0;
        width: 140%;
      }

      .second {
        display: block;
        top: 0;
        right: 0;
        transform-origin: right top;
        transform: rotate(-90deg) translate(-1px, -97%);
      }
    }

    .numeral-8 {
      .first {
        display: block;
        bottom: 50px;
      }

      .second {
        display: block;
        top: 0;
        right: 0;
        transform-origin: right top;
        transform: rotate(-90deg) translate(0, -97%);
      }
    }

    .numeral-9 {
      .line {
        display: block;
      }

      .first {
        top: 0;
        right: 0;
        width: 150%;
      }

      .second {
        bottom: 50px;
        right: 0;
      }

      .third {
        top: 0;
        right: 0;
        transform-origin: right top;
        transform: rotate(-90deg) translate(0, -97%);
      }
    }
  }

  @media screen and (max-width: $mobile-display-width) {
    .cistercian-numbers {
      .cistercian-number {
        width: $digit-block-width-mobile * 2;
        height: $digit-block-width-mobile * 3;
      }

      .digit {
        width: $digit-block-width-mobile;
        height: $digit-block-width-mobile + 50px;
      }
    }
  }
</style>
