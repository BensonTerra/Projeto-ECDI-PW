<template>
    <div class="Body">
        <div class="backgroundImage">
            <img src="../assets/curiositiesBackground.png" usemap="#image-map"  @mousemove="updateHoverPosition($event)">

            <map name="image-map">
                <area :coords="airportCoords" shape="rect" @mouseover="showAreaName('AEROPORTOS')" @mouseout="hideAreaName" class="areamap" @click="toggleCarousel('AEROPORTOS')">
                <area :coords="flightsCoords" shape="rect" @mouseover="showAreaName('VOOS')" @mouseout="hideAreaName" class="areamap" @click="toggleCarousel('VOOS')">
                <area :coords="airplaneCoords" shape="rect" @mouseover="showAreaName('AVIÕES')" @mouseout="hideAreaName" class="areamap" @click="toggleCarousel('AVIÕES')">
            </map>

            <div class="hoverContainer" v-if="showArea" :style="{ top: hoverY + 'px', left: hoverX + 'px' }">
            <p>{{ areaName }}</p>
             </div>

        </div>

        <transition name="fade" mode="out-in">
        <div class="carouselCuriosities" v-if="showAirportCarousel">
                <img class="closeButtonCuriosities" src="../assets/close.png"  @click="closeCarousel">
                <h2>AEROPORTOS</h2>
                <v-carousel  class="smallCarousel" :height="carouselHeight" hide-delimiters color="#00191F">
                <v-carousel-item v-for="curiosite in curiositiesAirports" :key="curiosite.id">
                    <v-card
                    class="mx-auto"
                    max-width="400"
                    >
                    <v-img
                    class="align-end text-white"
                    height="200"
                    :src="curiosite.img"
                    cover
                    >
        
                    </v-img>
            
                    <v-card-text>

                    <div>{{ curiosite.desc }}</div>
                    </v-card-text>
                    </v-card>
                
                </v-carousel-item>
               
                </v-carousel>
        </div>
        </transition>


        <transition name="fade" mode="out-in">
        <div class="carouselCuriosities" v-if="showFlightsCarousel">
                <img class="closeButtonCuriosities" src="../assets/close.png"  @click="closeCarousel">
                <h2 class="voosTitle">VOOS</h2>
                <v-carousel  class="smallCarousel" :height="carouselHeight" hide-delimiters color="#00191F">
                <v-carousel-item v-for="curiosite in curiositiesFlights" :key="curiosite.id">
                    <v-card
                    class="mx-auto"
                    max-width="400"
                    >
                    <v-img
                    class="align-end text-white"
                    height="200"
                    :src="curiosite.img"
                    cover
                    >
        
                    </v-img>
            
                    <v-card-text>

                    <div>{{ curiosite.desc }}</div>
                    </v-card-text>
                    </v-card>
                
                </v-carousel-item>
               
                </v-carousel>
        </div>
        </transition>

        <transition name="fade" mode="out-in">
        <div class="carouselCuriosities" v-if="showAirplanesCarousel">
                <img class="closeButtonCuriosities" src="../assets/close.png"  @click="closeCarousel">
                <h2 class="voosTitle" >AVIOES</h2>
                <v-carousel  class="smallCarousel" :height="carouselHeight" hide-delimiters color="#00191F">
                <v-carousel-item v-for="curiosite in curiositiesAirplanes" :key="curiosite.id">
                    <v-card
    
                    max-width="400"
                    >
                    <v-img
                    height="200"
                    :src="curiosite.img"
                    cover
                    >
        
                    </v-img>
            
                    <v-card-text>

                    <div>{{ curiosite.desc }}</div>
                    </v-card-text>
                    </v-card>
                
                </v-carousel-item>
                
                </v-carousel>
        </div>
        </transition>

        <div class="AdminAdd" v-if="isAdmin">
           <img class='addCuriositie' src="../assets/addCuriosities.png"  @click="toggleAddCuriositiesForm">
        </div>

        <transition name="fade" mode="out-in">
        <div class="AddCuriositiesForm" v-show="showAddCuriositiesForm" >
            <img class="closeButtonCuriosities" src="../assets/close.png"  @click="closeCarousel">
            <h2 class="addTitle">Adicionar Curiosidade</h2>
            <v-form ref="form"  validate-on="submit" @submit.prevent>
            <label for="curiosityType">Selecione o tipo de curiosidade:</label>
            <v-select
            id="curiosityType"
            clearable 
            :items="curiosityTypes"
            v-model="selectedType"
            required
            ></v-select>
            <label for="srcImage">Insira o caminho da imagem:</label>    
            <v-text-field
            v-model="imgSrc"
            required
          ></v-text-field>

            <br />
            <label for="curiosityDescription">Insira a curiosidade (Max-150 caracteres):</label>
            <v-textarea clearable required   v-model="curiosityDescription" id="curiosityDescription" maxlength="150" ></v-textarea>
            <br /><br />
            <button type="submit"  @click="addNewCuriosity">
                <img class="addButton" src="../assets/adicionarCuriosidadesBotao.png">
            </button>
            </v-form>
        </div>
        </transition>

        <v-snackbar v-model="snackbar" :timeout="timeout" :color="snackbarColor">
            {{ snackbarMessage }}
        </v-snackbar>
    </div>
</template>

<script>

import { useCuriositiesStore } from '../stores/curiosities.js';
import { useUserStore } from '../stores/user.js';

export default {
    data() {
        return {
            curiositieStore:useCuriositiesStore(),
            Userstore: useUserStore(),
            airportCoords: '403,252,445,294',
            flightsCoords: '477,439,514,475',
            airplaneCoords: '717,76,760,115',
            showArea: false,
            hoverX: 0,
            hoverY: 0,
            areaName: '',
            carouselHeight: 300,
            showAirportCarousel: false,
            showFlightsCarousel: false,
            showAirplanesCarousel: false,
            showAddCuriositiesForm: false,
            snackbar: false,
            timeout: 3000, 
            snackbarMessage: '', 
            snackbarColor: '',
            selectedType: '',
            curiosityDescription: '',
            imgSrc:'',
            errorMessage:'',
            
            
        };
    },
    
    computed: {
        curiositiesAirports(){
            return this.curiositieStore.getCuriositiesByType('AEROPORTOS');
        },
        curiositiesFlights(){
            return this.curiositieStore.getCuriositiesByType('VOOS');
        },
        curiositiesAirplanes(){
            return this.curiositieStore.getCuriositiesByType('AVIÕES');
        },

        isAdmin(){
            return this.Userstore.isAdmin
        },
        curiosityTypes() {
            return this.curiositieStore.getAllTypesCuriosities;
        },


    },
    methods: {
        showAreaName(name) {
            this.showArea = true;
            this.areaName = name;
        },
        hideAreaName() {
            this.showArea = false;
            this.areaName = '';
        },
        updateHoverPosition(event) {
            this.hoverX = event.pageX + 10; // Adjust offset as needed
            this.hoverY = event.pageY - 20; // Adjust offset as needed
        },

        toggleCarousel(area) {
            this.showAirportCarousel = area === 'AEROPORTOS';
            this.showFlightsCarousel = area === 'VOOS';
            this.showAirplanesCarousel = area === 'AVIÕES';
        },
        closeCarousel() {
            this.showAirportCarousel = false;
            this.showFlightsCarousel = false;
            this.showAirplanesCarousel = false;
            this.showAddCuriositiesForm = false;
            this.showSuccessWarn= false;
            this.showErrorWarn = false;
        },
        toggleAddCuriositiesForm() {
            this.showAddCuriositiesForm = true;
           
        },

        showSnackbar(message, color) {
            this.snackbarMessage = message;
            this.snackbarColor = color; 
            this.snackbar = true;
        },

        async addNewCuriosity() {
                // Check if any of the required fields are empty
                if (!this.selectedType || !this.imgSrc || !this.curiosityDescription) {
                    // Display an error message for empty fields
                    this.showAddCuriositiesForm = false;
                    this.showSnackbar("Os campos não podem estar vazios!", 'error');
                    return;
                }

                const newCuriosity = {
                    type: this.selectedType,
                    desc: this.curiosityDescription,
                    img: this.imgSrc,
                };

                try {
                    // Assuming addCuriosity is an async operation returning a promise
                    await this.curiositieStore.addCuriosity(newCuriosity);
                    // Reset form fields or perform any other actions upon success
                    this.selectedType = '';
                    this.curiosityDescription = '';
                    this.imgSrc = '';
                    // Show success message
                    this.showAddCuriositiesForm = false;
                    this.showSnackbar('Curiosidade Adicionada com sucesso!', 'success');

                   
                } catch (error) {
                    // Handle errors
                    console.error('Error adding curiosity:', error);
                    // Optionally, display an error message or perform error-related actions
                    this.showAddCuriositiesForm = false;
                   
                    
                    if (error.message === 'SpecificErrorType') {
                        this.showSnackbar('Erro especifico', 'error');
                    } else {
                        this.showSnackbar('Erro ao adicionar curiosidade. Tente novamente.', 'error');
                    }
                }
            }
          
    }
}
</script>

<style>
.backgroundImage {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90vh;
}

.hoverContainer {
    position: absolute;
    background-color: #ECECE4;
    color: #2E5F69;
    padding: 0.35rem;
    font-weight: bolder;
    border: none;
}

.areamap{
    cursor: pointer;
}

.carouselCuriosities {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  background-color: #00191f;
  padding: 3rem;
  border-radius: 10px;
  display: flex; /* Use Flexbox */
  justify-content: center; /* Center content horizontally */
  align-items: center; /* Center content vertically */
}

.smallCarousel {
  max-width: 25vw; /* Set the maximum width of the carousel */
  
  overflow-y: auto;
}


::v-deep .v-window {
  /* Change the color of the carousel content area */
  background-color: #00191f;
}

.custom-card {
  max-height: 200vh; /* Adjust the maximum height as needed */
  overflow-y: auto; /* Enable vertical scrolling if the content exceeds the height */
}

.closeButtonCuriosities {
  position: absolute;
  top: 1em;
  right: 1rem;
  cursor: pointer;
  z-index: 1001; /* Ensures the button is above the carousel */
  width: 1rem;
}

.carouselCuriosities h2{
  position: absolute;
  top: 0.2em;
  right: 19rem;
  color: #ECECE4;
  width: 1rem;
}
.v-card .v-card-text {
    line-height: 1.25rem;
    background-color: #00191f;
    color: #ECECE4;
    min-width: 25vw;
}
.v-btn__overlay {
    transition: none;
    background-color: yellow;
}

.voosTitle{
    position: absolute;
  top: 0.2em;
  right: 16rem !important;
  color: #ECECE4;
  width: 1rem;
}


.AdminAdd {
  position: absolute;
  bottom: 3rem;
  right: 22rem;
 
}

.addCuriositie {
  width: 3vw; /* Adjust the width as needed */
  height: auto; /* Maintain aspect ratio */
  cursor: pointer;
}

.AddCuriositiesForm {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  background-color: #00191f;
  padding: 3rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color:#666D6F
}

/* Additional styles for form elements */
textarea {
  resize: vertical;
  width: 300px;
  max-width: 100%;
  height: 100px;
}
.addButton{
    position: absolute;
    width: 8vw;
    right: 8.5rem;
    bottom:3rem;
    cursor: pointer;
}

.addTitle{
    padding-bottom: 3rem;
    color:#ECECE4
}

.divWarning {
  position: relative;
}

.successWarning, .ErrorWarning {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center; /* Centraliza o conteúdo horizontalmente */
  z-index: 10000;
}

.SuccessIcon, .ErrorIcon {
  position: relative;
  right: 13.3rem;
  bottom: 10rem;
}

.successP, .errorP {
    position: relative;
  right: 1rem;
  bottom: 8rem;
  color: #ECECE4;
}


.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}


.v-snack {
  bottom: 0;
  right: 0;
  margin: 1em;
}

</style>
