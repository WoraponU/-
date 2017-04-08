<template>
  <main class="main-container">
    <section>
      <v-row class="aa">
        <Parallax photoSrc="http://materializecss.com/images/parallax1.jpg">
           <v-container class="center">
              <v-row>
                <v-grid s12 m12 l12>
                  <h2 class="header">Roboto 2.0</h2>                  
                </v-grid>
              </v-row>
              <v-row>
                <v-grid s12 m12 l12>
                  <p class="caption">
                    The standard font Material Design uses is Roboto. We have included the font files with our framework.
                  </p>                 
                </v-grid>
              </v-row>
           </v-container>
        </Parallax>
      </v-row>
    </section>

    <section>
      <v-container>
        <v-row>
          <v-grid s12 m4 l4>
            content
          </v-grid>
          <v-grid s12 m4 l4>
            content
          </v-grid>
          <v-grid s12 m4 l4>
            content
          </v-grid>
        </v-row>
      </v-container>
    </section>
  </main>
</template>

<script>
  import Parallax from './Parallax.vue'

  export default {
    components: {
      Parallax,
    },
  }
</script>