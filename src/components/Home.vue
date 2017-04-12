<template>
  <main class="main-container">
    <section>
      <FirstParallax></FirstParallax>
    </section>

    <section>
      <SecondParallax></SecondParallax>
    </section>

    <section>
      <ThirdParallax></ThirdParallax>
    </section>
  </main>
</template>

<script>
  import FirstParallax from './FirstParallax.vue'
  import SecondParallax from './SecondParallax.vue'
  import ThirdParallax from './ThirdParallax.vue'

  export default {
    components: {
      FirstParallax, 
      SecondParallax, 
      ThirdParallax, 
    },
  }
</script>