<template>
  <main class="main-container">
    
    <section>
    <transition>
      <FirstContent></FirstContent>
    </transition>
      
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
  </main>
</template>

<script>
  import FirstContent from './FirstContent.vue'
  import SecondContent from './SecondContent.vue'
  import ThirdContent from './ThirdContent.vue'
  import FourthContent from './FourthContent.vue'

  export default {
    components: {
      FirstContent, 
      SecondContent, 
      ThirdContent, 
      FourthContent, 
    },
  }
</script>