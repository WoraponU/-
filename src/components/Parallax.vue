<template>
  <div class="parallax-custom" :style="srctest">
    <slot></slot>
  </div>
  
</template>

<script>
  export default {
    props: ['photoSrc'],
    data () {
      return {
        srctest: `background-image: url("${this.photoSrc}")`,
      }
    },
    mounted() {

      console.log(this.srctest);
    }
  }
</script>

<style lang="scss">
    @import "../assets/css/parallax.scss";
</style>