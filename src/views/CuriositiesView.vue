<template>
    <div class="Body">
        <div class="backgroundImage">
            <img src="../assets/curiositiesBackground.png" usemap="#image-map"  @mousemove="updateHoverPosition($event)">

            <map name="image-map">
                <area :coords="airportCoords" shape="rect" @mouseover="showAreaName('AEROPORTOS')" @mouseout="hideAreaName" class="areamap"  @click="toggleCarousel">
                <area :coords="flightsCoords" shape="rect" @mouseover="showAreaName('VOOS')" @mouseout="hideAreaName" class="areamap">
                <area :coords="airplaneCoords" shape="rect" @mouseover="showAreaName('AVIÕES')" @mouseout="hideAreaName" class="areamap">
            </map>

            <div class="hoverContainer" v-if="showArea" :style="{ top: hoverY + 'px', left: hoverX + 'px' }">
            <p>{{ areaName }}</p>
             </div>

        </div>

        <div v-if="showCarousel" v-for="curiositie in curiosities" :key="curiositie.id"  class="carouselCuriosities">
                <img class="closeButton" src="../assets/close.png"  @click="closeCarousel">
                <h2>AEROPORTOS</h2>
                <v-carousel  class="smallCarousel" :height="carouselHeight" hide-delimiters color="#00191F">
                <v-carousel-item>
                    <v-card
                    class="mx-auto"
                    max-width="400"
                    >
                    <v-img
                    class="align-end text-white"
                    height="200"
                    src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                    cover
                    >
        
                    </v-img>
            
                    <v-card-text>

                    <div>O Brasil é o segundo país no mundo em número de aeroportos, com 2.457 aeródromos registados, incluindo grandes, médios e pequenos terminais</div>
                    </v-card-text>
                </v-card>
                
                </v-carousel-item>
                <v-carousel-item>
                    <v-card
                    class="mx-auto"
                    max-width="400"
                    >
                    <v-img
                    class="align-end text-white"
                    height="200"
                    src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                    cover
                    >
        
                    </v-img>
            
                    <v-card-text>

                    <div>As faixas brancas no céu após aviões são trilhas de condensação. O vapor do motor se mistura com a atmosfera fria, formando nuvens.</div>
                    </v-card-text>
                </v-card>
                </v-carousel-item>
                <!-- Add more carousel items with v-card components as needed -->
                </v-carousel>
            </div>
    </div>
</template>

<script>

import { useCuriositieStore } from '../stores/curiosities.js';

export default {
    data() {
        return {
            airportCoords: '403,252,445,294',
            flightsCoords: '477,439,514,475',
            airplaneCoords: '717,76,760,115',
            showArea: false,
            hoverX: 0,
            hoverY: 0,
            areaName: '',
            carouselHeight: 300,
            showCarousel: false,
            
        };
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

        toggleCarousel() {
            this.showCarousel = !this.showCarousel; // Toggle the carousel flag
        },
        closeCarousel() {
            this.showCarousel = false;
        },
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

.closeButton {
  position: absolute;
  top: 2.5em;
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
}
.v-btn__overlay {
    transition: none;
    background-color: yellow;
}

</style>
