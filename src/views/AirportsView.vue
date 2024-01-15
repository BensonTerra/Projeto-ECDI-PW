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
          <v-card class="rounded-card" max-width="400">
            <v-img class="rounded-image" height="400" :src="airport.image" cover></v-img>
            <div class="card-content">
                  <div class="text-container">
                      <div class="airport-title">
                          {{ airport.name }}
                      </div>
                      <div class="descriptionState">
                          Estado: {{ airport.estado }}
                      </div>
                      <div class="descriptionAddress">
                          Endereço: {{ airport.address }}
                      </div>
                  </div>
                  <v-btn class="favorite-btn" v-if="isLogged" @click="toggleFavorite(airport)">
                        <img
                      :src="isAirportInFavorites(airport) ? '/src/assets/icons/favoriteOn.png' : '/src/assets/icons/favoriteOff.png'"
                      alt="Favorite"
                      style="width: 2em; height: 2em;"
                    />
                  </v-btn>
            </div>   
          </v-card>
        </v-col>
      </v-row>
    </div>
    <v-snackbar v-model="snackbar" :timeout="timeout" :color="snackbarColor">
        {{ snackbarMessage }}
    </v-snackbar>
  </template>
  
  <script>
  import { useUserStore } from "@/stores/user";
  
  export default {
    data() {
      return {
        userStore: useUserStore(),
        selectedState: 'Todos', // Default to show all airports
        snackbar: false,
        timeout: 3000, 
        snackbarMessage: '', 
        snackbarColor: '', 
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
          this.showSnackbar(`${airport.name} removido com sucesso aos favoritos!`, 'success')
        } else {
          this.userStore.addFavoriteAirport(airport);
          this.showSnackbar(`${airport.name} adicionado com sucesso aos favoritos!`, 'success')
        }
      },
      isAirportInFavorites(airport) {
        return this.userStore.getUserFavoriteAirports.some((fav) => fav.id === airport.id);
      },
      filterAirports(selectedState) {
        this.selectedState = selectedState;
      },
      // Informative messages
      showSnackbar(message, color) {
            this.snackbarMessage = message;
            this.snackbarColor = color; 
            this.snackbar = true;
      },
    },
  };
  </script>
  
  <style scoped>
  @font-face {
    font-family: 'IBM Plex Sans';
    src: url(../assets/fonts/IBMPlexSans-SemiBold.ttf);
  }
  @font-face {
      font-family: 'IBM Plex Mono';
      src: url(../assets/fonts/IBMPlexMono-Bold.ttf);
  }
  .bodyAir {
    padding-top: 3rem;
  }
  .rounded-card {
    position: relative;
    border-radius: 1.5rem;
    overflow: hidden;
    margin-top: 1rem;
    margin-left: auto; /* Center the cards horizontally */
    margin-right: auto; /* Center the cards horizontally */
    cursor: pointer;
  } 

  .rounded-image {
    border-radius: 1.5rem 1.5rem 0 0;
  } 

  .card-content {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 1rem;
    background: rgba(0, 25, 31, 0.8);
    border-radius: 0 0 1.5rem 1.5rem;
    display: flex;
    justify-content: space-between; 
}

.descriptionState {
  display: none;
  color: rgba(236, 236, 228, 0.8);
  font-family: IBM Plex Mono;
  font-size: 0.9rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 1em;
}

.descriptionAddress {
  display: none;
  color: rgba(236, 236, 228, 0.5);
  font-family: IBM Plex Mono;
  font-size: 0.9rem;
  font-style: normal;
  font-weight: 100;
  line-height: normal;
}

.card-content:hover .descriptionState,
.card-content:hover .descriptionAddress {
  display: block;
}
.text-container {
    flex-grow: 1; 
}
.airport-title {
    color: #ECECE4;
    font-family: IBM Plex Mono;
    font-size: 1.3125rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-align: center;
}
  
.v-col-4 {
    flex: 0 0 30% !important;
}
  
.favorite-btn {
    background: transparent;
}

.favorite-btn img {
    transition: transform 0.3s;
}

.favorite-btn:hover img {
    transform: scale(1.2);
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

.v-row {
  margin-left: 10% !important;
}

.v-snack {
  bottom: 0;
  right: 0;
  margin: 1em;
}
  
  </style>
  