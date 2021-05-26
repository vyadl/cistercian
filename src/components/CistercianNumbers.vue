<template>
  <div class="cistercian-numbers">
    <form class="form-number">
      <input
        class="input-number"
        type="number"
        placeholder="your number"
        v-model.number="number"
        @input.prevent="runConvertation"
      >
      <div class="message-container">
        <span
          class="message"
          v-if="isValidationMessageShown"
        >max number - {{ maxDecimal }}</span>
      </div>
    </form>
      <div
        class="cistercian-numbers-container"
        :class="{ multiple: digits.length > 1 }"
      >
        <div
          class="cistercian-number"
          v-for="(cistercianDigit, index) in digits"
          :key="index"
        >
          <transition :name="`${transitionModeComputed}-central`">
            <div
              class="central-line"
              v-if="isCistercianShown && number"
            ></div>
          </transition>
          <div
            class="digit"
            :class="[digit, `numeral-${numeral}`]"
            v-for="(numeral, digit, index) in cistercianDigit.digitsList"
            :key="digit"
          >
            <transition :name="transitionModeComputed === 'together'
              ? transitionModeComputed : `separately-${cistercianDigit.transitions[index]}`"
            >
              <div v-if="isCistercianShown">
                <div class="line first"></div>
                <div class="line second"></div>
                <div class="line third"></div>
              </div>
            </transition>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import { debounce, shuffleArray } from '@/utils/utils';
import { DELAY_ON_INPUT, DEFAULT_TRANSITION_MODE } from 'root/config';

const MAX_DECIMAL = 999999999999;

export default {
  props: {
    transitionMode: String,
  },
  data: () => ({
    number: null,
    digits: [],
    isCistercianShown: false,
    digitsTransitionsOrder: [1, 2, 3, 4],
    isValidationMessageShown: false,
    maxDecimal: MAX_DECIMAL,
  }),
  computed: {
    transitionModeComputed() {
      return this.transitionMode || DEFAULT_TRANSITION_MODE;
    },
  },
  mounted() {
    if (this.$route.params.number) {
      this.number = +this.$route.params.number;
      this.convertToCistercian();
    }
  },
  methods: {
    validateDecimalNumber() {
      if (this.number > MAX_DECIMAL) {
        this.number = String(this.number).slice(0, MAX_DECIMAL.length);
        this.isValidationMessageShown = true;
      }
    },
    manageRoute() {
      if (this.number) {
        this.$router.push({
          name: 'homePageWithNumber',
          params: { number: this.number },
        }).catch(() => {});
      } else {
        this.$router.push({ name: 'homePage' }).catch(() => {});
      }
    },
    defineDigits() {
      const arrayFromNumber = String(this.number).split('');
      const updatedDigits = [];

      while (arrayFromNumber.length) {
        const cistercianDigit = arrayFromNumber.length >= 4
          ? arrayFromNumber.splice(arrayFromNumber.length - 4, 4).join('')
          : arrayFromNumber.splice(0).join('');

        updatedDigits.unshift({
          digitsList: {
            units: cistercianDigit % 10,
            tens: Math.floor((cistercianDigit % 100) / 10),
            hundreds: Math.floor((cistercianDigit % 1000) / 100),
            thousands: Math.floor(cistercianDigit / 1000),
          },
          transitions: shuffleArray(this.digitsTransitionsOrder),
        });
      }

      this.digits = updatedDigits;
    },
    convertToCistercian() {
      this.validateDecimalNumber();
      this.manageRoute();
      this.defineDigits();
      this.$nextTick(() => {
        this.isCistercianShown = true;
      });
    },
    convertToCistercianDebounced: debounce(function convertToCistercianForDebounce() {
      this.convertToCistercian();
    }, DELAY_ON_INPUT),
    runConvertation() {
      this.isCistercianShown = false;
      this.isValidationMessageShown = false;
      this.convertToCistercianDebounced();
    },
  },
};
</script>

<style lang="scss">
  .cistercian-numbers {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    padding: 40px;

    .form-number {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 40px;
    }

    .input-number {
      width: 180px;
      margin-bottom: 5px;
      padding-bottom: 3px;
      border-bottom: 1px solid map-get($colors, 'dark-grey');
      text-align: center;
      color: map-get($colors, 'text');
      transition: border-color .2s;

      &:focus {
        border-color: map-get($colors, 'dark-grey');

        &::-webkit-input-placeholder {
          color: transparent;
        }
      }

      &::-webkit-input-placeholder {
        font-size: 14px;
        transition: color .2s;
      }
    }

    .message-container {
      height: 20px;
    }

    .message {
      font-size: 14px;
    }

    .cistercian-numbers-container {
      display: flex;
      justify-content: center;

      &.multiple {
        .cistercian-number {
          margin-left: 25px;
          margin-right: 25px;
        }

        .digit {
          width: $digit-block-width * $reducing-coefficient-on-multiple;
          height: $digit-block-width * $reducing-coefficient-on-multiple;
        }

        .cistercian-number {
          width: $digit-block-width * 2 * $reducing-coefficient-on-multiple;
          height: $digit-block-width * 3 * $reducing-coefficient-on-multiple;
        }
      }
    }

    .cistercian-number {
      position: relative;
      width: $digit-block-width * 2;
      height: $digit-block-width * 3;
    }

    .digit {
      position: absolute;
      width: $digit-block-width;
      height: $digit-block-width;
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

    .central-line {
      position: absolute;
      left: 50%;
      width: $line-width;
      height: 100%;
      border-radius: $line-border-radius;
      background-color: map-get($colors, 'line');
      transform: translateX(-50%);
    }

    .line {
      display: none;
      position: absolute;
      width: 100%;
      height: $line-width;
      border-radius: $line-border-radius;
      background-color: map-get($colors, 'line');
    }

    .numeral-1 {
      .first {
        display: block;
        top: 0;
        right: 0;
        border-radius: 0 $line-border-radius $line-border-radius 0;
      }
    }

    .numeral-2 {
      .first {
        display: block;
        bottom: 0;
        right: 0;
        transform: translateY(34%);
      }
    }

    .numeral-3 {
      .first {
        display: block;
        bottom: 0;
        right: 0;
        width: 140%;
        transform-origin: right top;
        transform: translateY(77%) rotate(45deg);
      }
    }

    .numeral-4 {
      .first {
        display: block;
        top: 0;
        right: 0;
        width: 145%;
        transform-origin: right center;
        transform: translateY(-34%) rotate(-45deg);
      }
    }

    .numeral-5 {
      .first {
        display: block;
        top: 0;
        right: 0;
        border-radius: 0 $line-border-radius * .5 $line-border-radius 0;
      }

      .second {
        display: block;
        top: 0;
        right: 0;
        width: 145%;
        transform-origin: right center;
        transform: translateY(-34%) rotate(-45deg);
      }
    }

    .numeral-6 {
      .first {
        display: block;
        top: 0;
        right: 0;
        width: $line-width;
        height: 100%;
      }
    }

    .numeral-7 {
      .first {
        display: block;
        top: 0;
        right: 0;
        border-radius: 0 $line-border-radius $line-border-radius 0;
      }

      .second {
        display: block;
        top: 0;
        right: 0;
        width: $line-width;
        height: 100%;
        border-radius: 0 $line-border-radius $line-border-radius $line-border-radius;
      }
    }

    .numeral-8 {
      .first {
        display: block;
        display: block;
        bottom: 0;
        right: 0;
        transform: translateY(34%);
      }

      .second {
        display: block;
        top: 0;
        right: 0;
        width: $line-width;
        height: 100%;
        border-radius: $line-border-radius $line-border-radius $line-border-radius * .5 0;
      }
    }

    .numeral-9 {
      .line {
        display: block;
      }

      .first {
        top: 0;
        right: 0;
        border-radius: 0 $line-border-radius $line-border-radius 0;
      }

      .second {
        display: block;
        bottom: 0;
        right: 0;
        transform: translateY(34%);
      }

      .third {
        top: 0;
        right: 0;
        width: $line-width;
        height: 100%;
        border-radius: $line-border-radius $line-border-radius $line-border-radius / 2 0;
      }
    }
  }

  @media screen and (max-width: map-get($display-breakpoints, 'xl')) {
    .cistercian-numbers {
      .cistercian-numbers-container {
        &.multiple {
          transform-origin: center top;
          transform: scale(map-get($scale-coefficients, 'xl'));
        }
      }
    }
  }

  @media screen and (max-width: map-get($display-breakpoints, 'l')) {
    .cistercian-numbers {
      .cistercian-numbers-container {
        &.multiple {
          transform-origin: center top;
          transform: scale(map-get($scale-coefficients, 'l'));
        }
      }
    }
  }

  @media screen and (max-width: map-get($display-breakpoints, 'm')) {
    .cistercian-numbers {
      .cistercian-numbers-container {
        &.multiple {
          transform-origin: center top;
          transform: scale(map-get($scale-coefficients, 'm'));
        }
      }
    }
  }

  @media screen and (max-width: map-get($display-breakpoints, 's')) {
    .cistercian-numbers {
      .cistercian-numbers-container {
        &.multiple {
          transform-origin: center top;
          transform: scale(map-get($scale-coefficients, 's'));
        }
      }

      .cistercian-number {
        width: $digit-block-width-s * 2;
        height: $digit-block-width-s * 3;
      }

      .digit {
        width: $digit-block-width-s;
        height: $digit-block-width-s;
      }
    }
  }

  @media screen and (max-width: map-get($display-breakpoints, 'xs')) {
    .cistercian-numbers {
      .cistercian-numbers-container {
        &.multiple {
          transform-origin: center top;
          transform: scale(map-get($scale-coefficients, 'xs'));
        }
      }

      .cistercian-number {
        width: $digit-block-width-xs * 2;
        height: $digit-block-width-xs * 3;
      }

      .digit {
        width: $digit-block-width-xs;
        height: $digit-block-width-xs;
      }
    }
  }
</style>
