<template>
    <side-bar></side-bar>
    <div class="centered-title-favorites">Aeroportos Favoritos</div>
    <v-row>
        <v-col v-for="airport in favoriteAirports" :key="airport.id" cols="6">
            <v-card class="rounded-card" max-width="400">
                <v-img class="rounded-image" :src="airport.image" height="400" cover></v-img>
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
                    <v-btn class="favorite-btn" @click="prepareDelete(airport)">
                        <img src='/src/assets/icons/favoriteOn.png' alt="Favorite" style="width: 2em; height: 2em;" />
                    </v-btn>
                </div>
            </v-card>
        </v-col>
    </v-row>
    <v-dialog v-model="dialogDelete" max-width="400">
            <v-card class="cardDelete">
                <button class="closeButtonDelete">
                        <v-icon icon="mdi-close" @click="cancelDelete"></v-icon>
                    </button>
                <div class="titleDelete">
                    <div class="DeleteTitleDelete"></div>
                    <v-card-title class="deleteText">Pretende mesmo apagar o '{{ airportToDelete ? airportToDelete.name : '' }}' dos favoritos?</v-card-title>
                </div>
                <v-card-actions>
                    <div class="deleteButtons"></div>
                    <button @click="deleteAccount" class="yesButtonDelete">Sim</button>
                    <button @click="cancelDelete" class="yesButtonDelete">Não</button>
                </v-card-actions>
            </v-card>
    </v-dialog>
    <v-snackbar v-model="snackbar" :timeout="timeout" :color="snackbarColor">
        {{ snackbarMessage }}
    </v-snackbar>
</template>

<script>
import SideBar from '@/components/SideBar.vue';
import { useUserStore } from '@/stores/user';

export default {
    components: {
        SideBar,
    },
    data() {
        return {
            userStore: useUserStore(),
            dialogDelete: false,
            airportToDelete: null,
            snackbar: false,
            timeout: 3000, 
            snackbarMessage: '', 
            snackbarColor: '', 
        }
    },
    computed: {
        favoriteAirports() {
            return this.userStore.getUserFavoriteAirports
        }
    },
    methods: {
        prepareDelete(user) {
            this.airportToDelete = user;
            this.dialogDelete = true;
        },
        deleteAccount() {
            if (this.airportToDelete) {
                this.userStore.deleteAirportFromFavorites(this.airportToDelete.id);
                this.dialogDelete = false;
                this.airportToDelete = null; 
                this.showSnackbar('Aeroporto removido com sucesso!', 'success')
            }
            
        },
        cancelDelete() {
            this.dialogDelete = false;
            this.airportToDelete = null; 
        },
        // Informative messages
        showSnackbar(message, color) {
            this.snackbarMessage = message;
            this.snackbarColor = color; 
            this.snackbar = true;
        },
    },
    
}
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
.centered-title-favorites {
    display: flex;
    justify-content: center;
    color: #ECECE4;
    font-family: 'IBM Plex Mono';
    margin-top: 0.1em;
    font-size: 3rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-right: 12%;
}

.rounded-card {
    position: relative;
    border-radius: 1.5rem;
    overflow: hidden;
    margin-top: 1rem;
    margin-left: 10em;
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

.favorite-btn {
    background: transparent;
}

.favorite-btn img {
    transition: transform 0.3s;
}

.favorite-btn:hover img {
    transform: scale(1.2);
}

.v-col-6 {
    flex: 0 0 40% !important;
}

.cardDelete {
  background-color: #00191F !important;
  border-radius: 5% !important; 
  height: 50vh;
  font-family: 'IBM Plex Sans';
}
.closeButtonDelete {
  z-index: 999;
  margin: 2% 2% 0 0;
  font-size: 1.5em;
  width: 50px;
  position: fixed;
  right: 0;
  background-color: transparent;
  color: #BC9A22;
  font-weight: bold;
}
.titleDelete {
  display: flex;
  justify-content: center;
  color: #BC9A22 !important; 
  padding-top: 5em !important;
}
.deleteText {
  font-size: 1.5em !important;
  font-weight: bold;
  color: #ECECE4;
  width: fit-content;
  text-align: center;
  white-space: normal;
}
.yesButtonDelete {
  padding: 8px;
  max-width: 5em;
  width: 100%;
  background-color: #ECECE4;
  color: #00191F;
  border: none;
  cursor: pointer;
  border-radius: 10px;
  font-size: 18px;
  font-weight: bold;
  margin-left: 4em;
  margin-top: 2em;
}
.yesButtonDelete:hover {
    background-color: #B4B390;
}

.v-snack {
  bottom: 0;
  right: 0;
  margin: 1em;
}
</style>
