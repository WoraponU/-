<template>
  <main class="main-container">
    <section>
      <FirstContent></FirstContent>
    </section>

    <section>
      <SecondContent></SecondContent>
    </section>

    <section>
      <ThirdContent></ThirdContent>
    </section>

    <section>
      <FourthContent></FourthContent>
    </section>

    <section>
      <FiveContent></FiveContent>
    </section>

    <section>
      <SixContent></SixContent>
    </section>
  </main>
</template>

<script>
  import FirstContent from './FirstContent.vue'
  import SecondContent from './SecondContent.vue'
  import ThirdContent from './ThirdContent.vue'
  import FourthContent from './FourthContent.vue'
  import FiveContent from './FiveContent.vue'
  import SixContent from './SixContent.vue'

  export default {
    components: {
      FirstContent, 
      SecondContent, 
      ThirdContent, 
      FourthContent, 
      FiveContent, 
      SixContent, 
    },
  }
</script>