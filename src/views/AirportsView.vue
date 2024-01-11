<template>
    <div class="bodyAir">
      <v-row>
        <v-col v-for="airport in airports" :key="airport.id" cols="4">
          <v-card class="mx-auto" max-width="350">
            <v-img class="align-end text-white" height="200" :src="airport.image" cover></v-img>
  
            <div class="airportTitle">
              {{ airport.name }}
            </div>
  
            <v-card-text>
              <div>{{ airport.address }}</div>
            </v-card-text>
  
            <v-card-actions>
              <v-btn color="orange" v-if="isLogged" @click="toggleFavorite(airport)">
                <img
                  :src="isAirportInFavorites(airport) ? '/src/assets/icons/favoriteOn.png' : '/src/assets/icons/favoriteOff.png'"
                  alt="Favorite"
                  style="width: 20px; height: 20px;"
                />
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </template>
  
  <script>
  import { useUserStore } from "@/stores/user";
  
  export default {
    data() {
      return {
        userStore: useUserStore(),
      };
    },
    computed: {
      airports() {
        return this.userStore.getAirports;
      },
      isLogged() {
        return this.userStore.isUser;
      },
    },
    methods: {
      toggleFavorite(airport) {
        if (this.isAirportInFavorites(airport)) {
          this.userStore.removeFavorite(airport);
        } else {
          this.userStore.addFavorite(airport);
        }
      },
      isAirportInFavorites(airport) {
        return this.userStore.getUserFavorites.some((fav) => fav.id === airport.id);
      },
    },
  };
  </script>
  
  <style scoped>
  .bodyAir {
    padding-top: 3rem;
  }
  .mx-auto {
    border-radius: 1rem!important;
    margin: 1rem; /* Adjust the margin as needed */
  }
  
  .v-row {
    padding-left: 14rem;
    padding-right: 14rem;
  }
  .v-card {
    background-color: #183D3D !important;
  }
  .v-card-text {
    color: #ECECE4;
  }
  
  .airportTitle {
    color: #ECECE4;
    font-weight: bold;
    padding: 1rem;
    padding-bottom: 0rem;
  }
  
  .v-card-actions {
    justify-content: flex-end;
  }
  </style>
  