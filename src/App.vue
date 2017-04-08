<template>
  <div id="app">
    <PageHeader></PageHeader>
    <router-view></router-view>
    <PageFooter></PageFooter>    
  </div>
</template>

<script>
  import PageHeader from './components/PageHeader.vue'
  import PageFooter from './components/PageFooter.vue'

  export default {
    name: 'app',
    components: {
      PageHeader,
      PageFooter,
    },
    data () {
      return {
        // msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<style lang="scss">
    @import "../src/assets/css/main.scss";
</style>
