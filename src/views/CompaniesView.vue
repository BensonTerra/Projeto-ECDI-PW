<template>
    <div class="bodyCom">
      <v-row>
        <v-col v-for="company in companies" :key="company.id" cols="4">
          <v-card class="rounded-card" max-width="400">
            <v-img class="rounded-image" :src="company.image" height="400" cover></v-img>
          <div class="card-content">
                  <div class="text-container">
                      <div class="company-title">
                          {{ company.name }}
                      </div>
                      <div class="descriptionFullName">
                          {{ company.fullname }}
                      </div>
                      <div class="descriptionHub">
                          Hub: {{ company.hub }}
                      </div>
                      <div class="descriptionWebsite">
                          Website: <a :href="company.website" target="_blank">{{ company.website }}</a>
                      </div>
                  </div>
                  <v-btn class="favorite-btn" v-if="isLogged" @click="toggleFavorite(company)">
                    <img
                        :src="isCompanyInFavorites(company) ? '/src/assets/icons/favoriteOn.png' : '/src/assets/icons/favoriteOff.png'"
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
        snackbar: false,
        timeout: 3000, 
        snackbarMessage: '', 
        snackbarColor: '', 
      };
    },
    computed: {
      companies() {
          return this.userStore.getCompanies;
      },
      isLogged() {
        return this.userStore.isUser;
      },
    },
    methods: {
      toggleFavorite(company) {
        if (this.isCompanyInFavorites(company)) {
          this.userStore.removeFavoriteCompany(company);
          this.showSnackbar(`${company.name} removida com sucesso aos favoritos!`, 'success')
        } else {
          this.userStore.addFavoriteCompany(company);
          this.showSnackbar(`${company.name} adicionada com sucesso aos favoritos!`, 'success')
        }
      },
      isCompanyInFavorites(company) {
        if (this.userStore.getUserFavoriteCompanies) {
            return this.userStore.getUserFavoriteCompanies.some((fav) => fav.id === company.id);
        } else {
            // If getUserFavoriteCompanies is undefined, no company can be in favorites
            return false;
        }
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
  .bodyCom {
    padding-top: 3rem;
  }
  
  .rounded-card {
    position: relative;
    border-radius: 1.5rem;
    overflow: hidden;
    margin-top: 1rem;
    margin-left: auto; 
    margin-right: auto; 
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

.descriptionFullName {
  display: none;
  color: rgba(236, 236, 228, 0.8);
  font-family: IBM Plex Mono;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 1em;
}

.descriptionHub {
  display: none;
  color: rgba(236, 236, 228, 0.5);
  font-family: IBM Plex Mono;
  font-size: 1rem;
  font-style: normal;
  font-weight: 100;
  line-height: normal;
}

.descriptionWebsite {
  display: none;
  color: rgba(236, 236, 228, 0.5);
  font-family: IBM Plex Mono;
  font-size: 0.8rem;
  font-style: normal;
  font-weight: 100;
  line-height: normal;
}

.card-content:hover .descriptionFullName,
.card-content:hover .descriptionHub,
.card-content:hover .descriptionWebsite {
  display: block;
}
.text-container {
    flex-grow: 1; 
}
.company-title {
    color: #ECECE4;
    font-family: IBM Plex Mono;
    font-size: 1.3125rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-align: center;
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

.v-col-4 {
    flex: 0 0 30% !important;
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
  