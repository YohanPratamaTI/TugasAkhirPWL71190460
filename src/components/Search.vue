<template>
  <v-app>
    <div class="search">


      <!-- Hasil Pencarian -->
      <v-container>
        <v-card class="pa-4 mt-5 mb-10" elevation="10">
          <v-card-title>Hasil Pencarian : </v-card-title>

          <!-- Isi pencarian -->
          <v-row>
            <v-col sm="3" md="3" >
              <v-card elevation="5">          
                <v-card-title></v-card-title>
                <v-card-subtitle></v-card-subtitle>
                  <v-card-text>
                    <v-row
                      align="center"
                      class="mx-0"
                    >

                      <div class="grey--text ms-4">
                      
                      </div>
                    </v-row>
                  </v-card-text>
                  <v-card-text><h3>Rp </h3></v-card-text>
                  <!-- <v-action> -->
                    <v-btn class="mt-3" block x-large color="blue">Add to Cart</v-btn>
                    
                  <!-- </v-action> -->
              </v-card>
            </v-col>
          </v-row>
          
          <!-- akhir isi pencarian -->

        </v-card>

      </v-container>
      <!-- HASIL PENCARIAN -->

    </div>
  </v-app>
</template>
