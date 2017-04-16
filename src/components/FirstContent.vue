<template>
  <v-row class="first-content">
    <Parallax photoSrc="http://materializecss.com/images/parallax1.jpg">
        <v-container>
          <v-row>
            <v-grid s12 m12 l12>
              <h2 class="header text-shadow">Roboto 2.0</h2>                  
            </v-grid>
          </v-row>
          <v-row>
            <v-grid s12 m12 l12>
              <p class="caption text-shadow">
                The standard font Material Design uses is Roboto. We have included the font files with our framework.
              </p>                 
            </v-grid>
          </v-row>

          <v-row class="contact">
            <v-grid s12 m12 l12 center>
              <a v-tooltip:left="'http://www.facebook.com'" href="http://www.facebook.com" target="_blank" class="btn btn-floating pulse">
                <i class="fa fa-facebook" aria-hidden="true"></i>
              </a>
              <a v-tooltip:top="'line: woraponok'" class="btn btn-floating pulse" target="_blank" href="http://line.me/ti/p/ZISGttE_L9">
                Line
              </a>
              <a v-tooltip:right="'tel: 082-1234321'" class="btn btn-floating pulse" href="tel:+083234342">
                <i class="fa fa-phone" aria-hidden="true"></i>                
              </a>
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
        social: 'hjlk',
      }
    },
  }
</script>