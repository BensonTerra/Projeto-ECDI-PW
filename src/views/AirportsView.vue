<template>
    <div class="bodyAir">
      <v-select
          id="mySelect"
          label="Estado"
          @change="filterAirports"
          v-model="selectedState"
          :items="['Todos', 'Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins']"
      ></v-select>
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
        selectedState: 'Todos', // Default to show all airports
      };
    },
    computed: {
      airports() {
        if (this.selectedState === 'Todos') {
          return this.userStore.getAirports;
        } else {
          return this.userStore.getAirports.filter(airport => airport.estado === this.selectedState);
        }
      },
      isLogged() {
        return this.userStore.isUser;
      },
    },
    methods: {
      toggleFavorite(airport) {
        if (this.isAirportInFavorites(airport)) {
          this.userStore.removeFavoriteAirport(airport);
        } else {
          this.userStore.addFavoriteAirport(airport);
        }
      },
      isAirportInFavorites(airport) {
        return this.userStore.getUserFavoriteAirports.some((fav) => fav.id === airport.id);
      },
      filterAirports(selectedState) {
        this.selectedState = selectedState;
      },
    },
  };
  </script>
  
  <style scoped>
  .bodyAir {
    padding-top: 3rem;
  }
  .mx-auto {
    border-radius: 1rem !important;
    margin: 1rem !important; /* Adjust the margin as needed */
  }
  
  .v-row {
    padding-left: 14rem !important;
    padding-right: 14rem !important;
  }
  .v-card {
    background-color: #183D3D !important;
  }
  .v-card-text {
    color: #ECECE4 !important;
    background-color: #183D3D !important;
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

  .v-input {
    display: grid;
    flex: 1 1 auto;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    width: 21rem;
    position: relative;
    left:65%;
    border-radius: 1rem !important;
    
  }
  
  </style>
  