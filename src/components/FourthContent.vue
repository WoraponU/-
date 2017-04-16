<template>
  <v-container>
    <v-row class="third-content">    
      <v-grid s12 m12 l12>
      <div class="section">
        <h4>Contact Me</h4>
      </div>
      <div class="divider"></div>
      </v-grid>
    </v-row>

    <v-row>
      <v-grid s12 m6 l4>
         <div class="card">
            <div class="card-image">
              <div id="map"></div>  
              <a target="_blank" href="https://www.google.com/maps/@14.5578957,100.196959,19.7z" class="btn-floating halfway-fab waves-effect waves-light red">
                <i class="material-icons">search</i>
              </a>
            </div>
            <div class="card-content">
              <span class="card-title">แผนที่</span>
              <p>อ.เมือง จ.สุพรรณบุรี</p>
            </div>
          </div>
      </v-grid>

      <v-grid s12 m6 l4>
         <div class="card">
            <div class="card-image">
              <img src="http://qr-image.visualead.com/blog/wp-content/uploads/2014/03/Logo-QR-code.png">
            </div>
            <div class="card-content">
              <span class="card-title">Line</span>            
              <p>woraponok</p>
            </div>
          </div>
      </v-grid>

      <v-grid s12 m6 l4>
         <div class="card">
            <div class="card-image">
              <img src="http://materializecss.com/images/sample-1.jpg">
              <span class="card-title">Card Title</span>
            </div>
            <div class="card-content">
              <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
            </div>
            <div class="card-action">
              <a href="#">This is a link</a>
            </div>
          </div>
      </v-grid>
    </v-row>
  </v-container>
</template>