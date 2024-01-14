<template>
    <div class="bodyCom">
      <v-row>
        <v-col v-for="company in companies" :key="company.id" cols="4">
          <v-card class="mx-auto" max-width="350">
            <v-img class="align-end text-white" height="200" :src="company.image" cover></v-img>
  
            <div class="companyTitle">
              {{ company.name }}
            </div>
  
            <v-card-subtitle class="comSub">
              <div>{{ company.fullname }}</div>
            </v-card-subtitle>
            
            <v-card-text>
              <div><b>Hub: </b>{{ company.hub }}</div>
            </v-card-text>

            <v-card-text>
              <div><b>Website:</b> {{ company.website }}</div>
            </v-card-text>
  
            <v-card-actions>
              <v-btn color="orange" v-if="isLogged" @click="toggleFavorite(company)">
                <img
                  :src="isCompanyInFavorites(company) ? '/src/assets/icons/favoriteOn.png' : '/src/assets/icons/favoriteOff.png'"
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
        } else {
          this.userStore.addFavoriteCompany(company);
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
    },
  };
  </script>
  
  <style scoped>
  .bodyCom {
    padding-top: 3rem;
  }
  .mx-auto {
    border-radius: 1rem !important;
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
    background-color: #183D3D !important;
    
  }
  
  .companyTitle {
    color: #ECECE4;
    font-weight: bold;
    padding: 1rem;
    padding-bottom: 0rem;
  }
  
  .v-card-actions {
    justify-content: flex-end;
  }
  
  .comSub{
    color: #ECECE4;
  }
  
  </style>
  