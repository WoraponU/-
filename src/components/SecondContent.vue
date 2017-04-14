<template>
  <v-row class="second-content">
    <Parallax photoSrc="https://cdn.suwalls.com/wallpapers/abstract/grey-wood-floor-27062-1920x1080.jpg">
      <v-container>
        <v-row>
          <v-grid s12 m12 l12>
            <h3>คำอธิบาย</h3>
          </v-grid>        
        </v-row>
      
        <v-row>
          <v-grid s12 m4 l4>
            <div class="icon-block">
              <h2 class="center light-blue-text"><i class="material-icons">flash_on</i></h2>
              <h5 class="center">Speeds up development</h5>

              <p class="light">We did most of the heavy lifting for you to provide a default stylings that incorporate our custom components. Additionally, we refined animations and transitions to provide a smoother experience for developers.</p>
            </div>
          </v-grid>

          <v-grid s12 m4 l4>
            <div class="icon-block">
              <h2 class="center light-blue-text"><i class="material-icons">flash_on</i></h2>
              <h5 class="center">Speeds up development</h5>
              <p class="light">We did most of the heavy lifting for you to provide a default stylings that incorporate our custom components. Additionally, we refined animations and transitions to provide a smoother experience for developers.</p>
            </div>
          </v-grid>

          <v-grid s12 m4 l4>
            <div class="icon-block">
              <h2 class="center light-blue-text"><i class="material-icons">flash_on</i></h2>
              <h5 class="center">Speeds up development</h5>
              <p class="light">We did most of the heavy lifting for you to provide a default stylings that incorporate our custom components. Additionally, we refined animations and transitions to provide a smoother experience for developers.</p>
            </div>
          </v-grid>
        </v-row>
      </v-container>
    </Parallax>
    
  </v-row>
</template>

<script>
  import Parallax from './Parallax.vue'

  export default {
    components: {
      Parallax,
    },
    data () {
      return {
        test: '',
      }
    },
  }
</script>