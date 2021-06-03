<template>
  <div class="cistercian-about">
    <div class="text">
      <h3 class="text-part-title">What is it?</h3>
      <p class="text-part">
        A numeral system that represents any number up to 9999 in one sign.<br>
        More info in
         <a
          class="wiki-link"
          href="https://en.wikipedia.org/wiki/Cistercian_numerals"
         >Wikipedia</a>.
      </p>

      <h3 class="text-part-title">How does it work above 9999?</h3>
      <p class="text-part">
        We use this numeral system as decamillesimal numeral system<br>
         (system with 10000 distinct symbols).<br>
        It means that "10000" in decimal system
         converts into two separate cistercian signs one by one - "1" and "0".<br>
        Like decimal "8" is "10" in octal system or decimal "16" is "10" in hexadecimal.
      </p>
    </div>
  </div>
</template>

<style lang="scss">
  .cistercian-about {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;

    .text {
      font-size: 12px;
      line-height: 1.7;
    }

    .text-part-title {
      margin-bottom: 10px;
      font-size: 15px;
      text-shadow: .5px 0 map-get($colors, 'grey' );
      font-weight: 300;
      color: map-get($colors, 'text');
    }

    .text-part {
      margin-top: 0;
      margin-bottom: 15px;
    }

    .wiki-link {
      text-decoration: underline;
      transition: color .2s;

      &:hover {
        color: map-get($colors, 'light-grey' );
      }
    }
  }
</style>
