<template>
  <header>
    <v-nav>
      <v-container>
        <a href="#!" class="brand-logo" slot="logo">Logo</a>
        <ul slot="items" class="right">
          <li v-for="n in 3">
          <a href="#!">Item</a>
          </li>
        </ul>
        <v-side-nav id="side" slot="side-nav">fdsa</v-side-nav>
      </v-container>
    </v-nav>
  </header>
</template>

<script>
  export default {
    data () {
      return {
        // items: [],
      }
    }
  }
</script>