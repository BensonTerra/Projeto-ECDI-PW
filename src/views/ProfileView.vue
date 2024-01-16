<template>
  <side-bar></side-bar>
  <div id="containerBrazilMap" class="svg-container">
    <svg
      class="map"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      role="img"
      width="500"
      height="465"
    >
      <g class="model-green">
        <a
          v-for="state in states"
          :key="state.id"
          :class="['state', { 'clicked': state.clicked }]"
          :xlink:href="`#${state.id}`"
          @click="toggleAreaClicked(state)"
          
        >
          <desc class="description">{{ state.name }}</desc>
          <path
            class="shape"
            :class="{ 'clicked-shape': state.clicked }"
            :d="state.path"
            @mousemove="updateHoverPosition"
            @mouseover="showAreaName(state.name)"
            @mouseout="hideAreaName"
            @click="toggleVisited(state)"
           
          ></path>
          <image
            class="pin"
            v-if="state.clicked"
            :xlink:href="state.src" 
            :width="state.width + 'vw'"
            :height="state.height + 'vh'"
            :x="state.x - state.width"
            :y="state.y - state.height"
            @mouseover="showImageInfo(state)"
            @mouseout="hideImageInfo"
          ></image>

          

        </a>
      </g>
    </svg>

   

    <div
      class="hoverState"
      v-if="showArea"
      :style="{ top: hoverY + 'px', left: hoverX + 'px' }"
    >
      <p>{{ areaName }}</p>
    </div>
  </div>


  <div class="card2">
            <v-card
            v-if="hoveredImageInfo"
            tile
            color="#00191F"
            class="tooltip"
            max-width="20vw" 
            
            :style="{ top: '50%', left: '0' }"
            >
          
            <v-img
              class="align-end text-white"
              height="200"
              :src="hoveredImageInfo.src"
              cover
            ></v-img>
            <v-card-title style="font-size: 1em; color: #ECECE4; padding-bottom: 0rem;">
              {{ hoveredImageInfo.title }}
            </v-card-title>
            <v-card-title style="font-size: 0.8em; color: #ECECE4; ">
              {{ hoveredImageInfo.place }}
            </v-card-title>
            <v-card-title style="font-size: 0.8em; color: #8c8c8a; white-space: normal; line-height: 0.9rem; ">
              {{ hoveredImageInfo.desc }}
            </v-card-title>
           
          </v-card>
          </div>

          <div class="info-button">
              <img class="iconInfo"  @click.prevent="openInfo" src="../assets/CuriositiesImgs/infobutton.png" alt="Ver informações" >
        </div>


       
    <v-dialog v-model="isOpenInfo" max-width="600">
      <v-card class="cardInfo">
        <div class="titleInfo">
          <button class="closeInfoIcon" @click="closeInfo">
            <v-icon icon="mdi-close"></v-icon>
          </button>
        </div>
        <v-card-text>
          <p class="titleTextInfo"> Faça um Brasil só seu!</p>
         <p class="contentTextInfo"> Marque os estados que já visitou no mapa! Descubra um ponto turístico em cada capital para tornar suas experiências de viagem ainda mais especiais.</p>
        </v-card-text>
      </v-card>
    </v-dialog>

</template>
  
  <script>
  import SideBar from "@/components/SideBar.vue";
  import { useUserStore } from '../stores/user.js';


  export default {
    components: {
      SideBar,
    },
  
    data() {
      return {
        hoverX: -10,
        hoverY: -10,
        showArea: false,
        areaName: "",
        areaClicked: false,
        nameState:"",
        userStore: useUserStore(),
        hoveredImageInfo: null,
        hideImageInfoTimeout: null,
        isOpenInfo:false,
      };
    },
    
    methods: {
      showAreaName(name) {
        this.showArea = true;
        this.areaName = name;
      },
      hideAreaName() {
        this.showArea = false;
        this.areaName = "";
      },
      updateHoverPosition(event) {
        this.hoverX = event.pageX + -680; 
        this.hoverY = event.pageY - 200;
      },
      toggleAreaClicked(state) {
        state.clicked = !state.clicked;
      },
      toggleVisited(state) {
        console.log("oi");
        if (this.isStateInVisited(state)) {
          this.userStore.removeVisitedState(state);
        } else {
          this.userStore.addVisitedState(state);
        }
      },
      isStateInVisited(state) {
        return this.userStore.getUserVisitedStates.some((visited) => visited.id === state.id);
      },

      showImageInfo(state) {
        console.log("teste");
        // Set the information for the hovered image
        this.hoveredImageInfo = {
          title: state.curiositieTitle,
          place: state.curiositiesPlace,
          desc: state.curiositieDesc,
          src: state.curiositiesSrc
        };
      },
      hideImageInfo() {
        // Clear the information when not hovering
        this.hoveredImageInfo = null;
      },

      openInfo(){
        console.log("openInfo method is called");
        this.isOpenInfo=true
      },

      closeInfo(){
        this.isOpenInfo=false
      },




      
    },

    computed: {
      states() {
        return this.userStore.getStates 
      }
    },
  };
  </script>
  
  <style>

  @font-face {
      font-family: 'IBM Plex Sans';
      src: url(../assets/fonts/IBMPlexSans-SemiBold.ttf);
    }
    
  @font-face {
        font-family: 'IBM Plex Mono';
        src: url(../assets/fonts/IBMPlexMono-Bold.ttf);
  }

  @font-face {
        font-family: 'IBM Plex Sans Regular';
        src: url(..\assets\fonts\IBMPlexSans-Regular.ttf);
  }
  
  #containerBrazilMap {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 10px;
  }
  
  .shape {
    fill: #183d3d;
    transition: fill 0.3s ease; /* Add smooth transition */
    z-index: -1;
  }
  
  .clicked-shape {
    fill: #091d1d;
  }

  .state:not(.clicked):hover .shape {
    fill: #1b4848;
  }
  
  

  .label-state {
    fill: #fff;
  }
  
  .icon-state {
    fill: #183d3d;
  }
  
  .hoverState {
    position: absolute;
    background-color: #ecece4;
    color: #2e5f69;
    padding: 0.35rem;
    font-weight: bolder;
    border: none;
  }
  
  .pin {
    transition: opacity 0.3s ease; /* Add smooth transition for pin */
    z-index: 2;
  }
  

  .tooltip {
      position: absolute;
      padding: 10px;
      z-index: 999;
    }

    .card2 {
    min-width: 33.3%;
    padding-top: 2em;
    padding-left: 2em;
    font-family: 'IBM Plex Sans';}
    
    .info-button {
    position: absolute;
    bottom: 1rem;
    right: 15rem;
    cursor: pointer;
      }

    .iconInfo{
      width: 3.5vw
    }

    .closeInfoIcon{
      color: #ECECE4;
      position: absolute;
      z-index: 999;
      margin: 1% 0 0 92.5%;
    }

    .titleInfo {
      position: absolute;
      right:3rem;
      top: 1rem;
    
    }
  
    .cardInfo{
      background-color: #00191F !important;
      border-radius: 5% !important; 
      height: 30vh;
      width: 30vw;
    }

    .titleTextInfo{
      position: relative;
      text-align: center;
      padding-bottom: 1rem;
      font-size: 1.2rem;
      font-family: 'IBM Plex Sans';
      color: #cca721 ;
      top: 1.5rem;
    }

    .contentTextInfo{
      padding-top: 1.3rem;
      font-size: 0.8rem;
      font-family: 'IBM Plex Sans Regular';
      text-align: center;
    }
  </style>
  