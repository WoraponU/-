<template>
  <div class="parallax-custom" :style="srcParallax">
    <slot></slot>
  </div>
  
</template>

<script>
  export default {
    props: ['photoSrc'],
    data () {
      return {
        srcParallax: `background-image: url("${this.photoSrc}")`,
      }
    },
  }
</script>

<style lang="scss">
    @import "../assets/css/parallax.scss";
</style>