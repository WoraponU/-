<template>
  <v-container>
    <v-row class="fourth-content-head">    
      <v-grid s12 m12 l12>
      <div class="section">
        <h4>Contact Us</h4>
      </div>
      <div class="divider"></div>
      </v-grid>
    </v-row>

    <v-row class="fourth-content-body">    
      <v-grid s12 m6 l4>
        <v-row>
          <div class="card horizontal">
            <div class="card-image card-image-facebook">
              <i class="fa fa-phone center-align" aria-hidden="true"></i>                
            </div>
            <div class="card-stacked">
              <div class="card-content card-content-facebook">
                <p>โทร: 083234342</p>
              </div>
              <div class="card-action">
                <a href="tel:+083234342">โทรเลย!</a>
              </div> 
            </div>
          </div>
        </v-row>

        <v-row>
          <div class="card horizontal">
            <div class="card-image  card-image-line">
              <i class="fa fa-comment" aria-hidden="true"></i>               
            </div>
            <div class="card-stacked">
              <div class="card-content">
                <p>Line: woraponok</p>           
              </div>
              <div class="card-action">
                <a target="_blank" href="http://line.me/ti/p/ZISGttE_L9">แอดเลย!</a>
              </div> 
            </div>
          </div>
        </v-row>
      </v-grid>

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
        <div class="card card-facebook">
          <div class="card-image">
            <div class="fb-page" data-href="https://www.facebook.com/elizabeth.sock1/" data-tabs="timeline" data-height="310" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"></div>
          </div>
        </div>
      </v-grid>
      
    </v-row>
  </v-container>
</template>