<script>
import { useAirplaneStore } from "@/stores/airplane";

export default {
  data() {
    return {
      airplaneStore: useAirplaneStore(),
      vueCanvas: null,
      c: null,
      map: new Image(),
      hoveredCallsign: null,
      clickedAirplane: null,
      isFlightInfoVisible: false,
      index2: 0,
      tooltip: {
        content: '',
        top: 0,
        left: 0,
        show: false,
      },
    };
  },
  created() {
    // Fetching airplane data when the component is created
    this.airplaneStore.fetchAirplane().then(() => {
      // console.log(this.airplaneStore.getAirplanes);
      // Loading the map after fetching data
      this.loadMap();
    });
  },
   mounted() {
    // Getting the canvas element and context when the component is mounted
    var c = document.getElementById("c");
    var ctx = c.getContext("2d");    
    this.c = c;
    this.vueCanvas = ctx;
  }, 
  computed: {
    tableData() {
      return this.airplaneStore.getAirplanes
    },
    flightTime() {
      return function(airplane) {
        const departureTime = new Date(`${airplane.schedule.date} ${airplane.schedule.depart}:00`).getTime();
        const arrivalTime = new Date(`${airplane.schedule.date} ${airplane.schedule.arrival}:00`).getTime();

        const timeDiff = arrivalTime - departureTime;
        const hours = Math.floor(timeDiff / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));


        if (hours > 0 && minutes > 0) {
          return `${hours} horas e ${minutes} minutos`;
        } else if (hours > 0) {
          return `${hours} horas`;
        } else {
          return `${minutes} minutos`;
        }
      };
    },
  },
  methods: {
     loadMap() {
      this.map.src = "src/assets/homeMap/map.png";
     
      // Handling the map load event
      this.map.onload = () => {
        // Drawing the map on the canvas
        this.vueCanvas.drawImage(this.map, 0, 0, this.c.width, this.c.height);
        // Initiating the animation
        this.animate()
        
      };
    }, 
    animate() {
        this.tableData[0].airplanes.forEach((airplane) => {
          // console.log(`Current Speed Array Length -> ${airplane.flight.currentSpeed.length}`);
          //  console.log(`Last Element Speed -> ${airplane.flight.currentSpeed[airplane.flight.currentSpeed.length - 1]}`);
          //  console.log("");
          //  console.log(`Status Array Length -> ${airplane.flight.status.length}`);
          //  console.log(`Last Element Speed -> ${airplane.flight.status[airplane.flight.status.length - 1]}`);
          //  console.log("");
          //  console.log(`Position x Array Length -> ${airplane.position.current.x.length}`);
          //  console.log(`Position y Array Length -> ${airplane.position.current.y.length }`);
          //  console.log("");

          let index=0;

          const animateStep = () => {
            // Clearing the canvas
            this.vueCanvas.clearRect(0, 0, this.c.width, this.c.height);
            // Redrawing the map
            this.vueCanvas.drawImage(this.map, 0, 0, this.c.width, this.c.height);

            // Drawing each airplane
            this.tableData[0].airplanes.forEach((currentAirplane) => {
              let image = new Image()
              image.src = currentAirplane.icon

              this.vueCanvas.drawImage(image, currentAirplane.position.current.x[index], currentAirplane.position.current.y[index], image.width, image.height);
            });

            index++;
            this.index2 = index;

            if (index < airplane.position.current.x.length) {
              setTimeout(animateStep, 5000);
            }
          };

          animateStep(); 
        });
    },
    handleMouseMove(event) {
      const rect = this.c.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      let foundHoveredAirplane = false;

      this.tableData[0].airplanes.forEach((currentAirplane) => {
        const image = new Image();
        image.src = currentAirplane.icon;

        const airplaneX = currentAirplane.position.current.x[this.index2];
        const airplaneY = currentAirplane.position.current.y[this.index2];

        if (
          x >= airplaneX  &&
          x <= airplaneX + image.width &&
          y >= airplaneY  &&
          y <= airplaneY + image.height
        ) {

          if (!this.hoveredAirplane || this.hoveredAirplane.flight.callSign !== currentAirplane.flight.callSign) {
            
            this.hoveredAirplane = currentAirplane;
            // console.log(`Mouse sobre o avião com call sign: ${currentAirplane.flight.callSign}`);
          }

          /*
            const borderWidth = 2;
            this.vueCanvas.lineWidth = borderWidth;
            this.vueCanvas.strokeStyle = 'red';
            this.vueCanvas.strokeRect(
              airplaneX - margin - borderWidth,
              airplaneY - 50 + borderWidth,
              image.width + 2 * margin + 2 * borderWidth,
              image.height + 2 * margin + 2 * borderWidth
            );
          */

            this.tooltip.content = `Indicativo da aeronave: ${currentAirplane.flight.callSign}`;
            this.tooltip.top = event.clientY + 10; 
            this.tooltip.left = event.clientX + 10; 
            this.tooltip.show = true;

          foundHoveredAirplane = true;
        }
        
      });

      if (!foundHoveredAirplane) {
        this.hoveredAirplane = null;
        this.tooltip.show = false;
      }
    },
    handleMouseClick(event) {
      const rect = this.c.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      this.tableData[0].airplanes.forEach((currentAirplane) => {
        const image = new Image();
        image.src = currentAirplane.icon;

        const airplaneX = currentAirplane.position.current.x[this.index2];
        const airplaneY = currentAirplane.position.current.y[this.index2];

        if (
          x >= airplaneX &&
          x <= airplaneX + image.width &&
          y >= airplaneY &&
          y <= airplaneY + image.height
        ) {
          this.clickedAirplane = currentAirplane;
          this.isFlightInfoVisible = true;
          this.drawCircles()
          // console.log(`Clicked on plane with call sign: ${currentAirplane.flight.callSign}`);

        }
      });
    },
    drawCircles() {
      if (this.clickedAirplane) {
        const circleRadius = 8;
        const planeWidth = this.clickedAirplane.width / 2;
        const planeHeight = this.clickedAirplane.height / 2;
        const circleColor = "#DEB627";
        const dashColor = "#DEB627";
        const dashLength = 5;

        const startX = this.clickedAirplane.position.current.x[0] + planeWidth;
        const startY = this.clickedAirplane.position.current.y[0] + planeHeight;
        const endX = this.clickedAirplane.position.current.x[this.clickedAirplane.position.current.x.length - 1] + planeWidth;
        const endY = this.clickedAirplane.position.current.y[this.clickedAirplane.position.current.x.length - 1] + planeHeight;

        this.vueCanvas.beginPath();
        this.vueCanvas.arc(startX, startY, circleRadius, 0, 2 * Math.PI);
        this.vueCanvas.fillStyle = circleColor;
        this.vueCanvas.fill();

        this.vueCanvas.beginPath();
        this.vueCanvas.arc(endX, endY, circleRadius, 0, 2 * Math.PI);
        this.vueCanvas.fillStyle = circleColor;
        this.vueCanvas.fill();

        this.vueCanvas.beginPath();
        this.vueCanvas.setLineDash([dashLength, dashLength]); 
        this.vueCanvas.moveTo(startX, startY);
        this.vueCanvas.lineTo(endX, endY);
        this.vueCanvas.strokeStyle = dashColor;
        this.vueCanvas.stroke();

        this.vueCanvas.setLineDash([]);
      }
    },
    hideCard() {
      document.querySelector(".flight-info-card").classList.add("hideCard");
      setTimeout(() => {
        this.isFlightInfoVisible = false;
      }, 1000);
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="card">
      <v-card
      v-if="isFlightInfoVisible"
      class="flight-info-card"
      tile
      color="#00191F"
      >
      <button class="closeButton" @click="hideCard">
        <v-icon
          icon="mdi-close"
        ></v-icon></button>
      
      <v-img
        class="align-end text-white"
        height="200"
        :src="clickedAirplane.flight.image"
        cover
      ></v-img>
      <v-card-title style="font-size: 1em; color: #ECECE4;">
        Nº do voo: {{ clickedAirplane.flight.number}}
      </v-card-title>
      <v-card-title style="font-size: 1em; color: #ECECE4;">
        Companhia: {{ clickedAirplane.flight.company}}
      </v-card-title>
      <v-card-title style="font-size: 1em; color: #ECECE4;">
        Aeronave: {{ clickedAirplane.flight.name}} ({{ clickedAirplane.flight.aircraftCode}})
      </v-card-title>
      <v-card-title style="font-size: 1em; color: #ECECE4;">
        Rota: {{ clickedAirplane.route.origin}}({{ clickedAirplane.route.originAbbreviation }}) - {{ clickedAirplane.route.destination}}({{ clickedAirplane.route.destinationAbbreviation }})
      </v-card-title>
      <v-card-title style="font-size: 1em; color: #ECECE4;">
        Aeroporto: ({{ clickedAirplane.route.originAirportIATA }})({{ clickedAirplane.route.originAirportICAO }}) - ({{ clickedAirplane.route.destinationAirportIATA }})({{ clickedAirplane.route.destinationAirportICAO }})
      </v-card-title>
      <v-card-title style="font-size: 1em; color: #ECECE4;">
        Horário: Partida({{ clickedAirplane.schedule.depart }}) - Chegada({{ clickedAirplane.schedule.arrival }})
      </v-card-title>
      <v-card-title style="font-size: 1em; color: #ECECE4;">
        Tempo de Voo: {{ flightTime(clickedAirplane) }}
      </v-card-title>
      <v-card-title style="font-size: 1em; color: #ECECE4;">
        Estado: {{ clickedAirplane.flight.status[this.index2] || 'Aterrado' }}
      </v-card-title>
      <v-card-title style="font-size: 1em; color: #ECECE4;">
        Velocidade atual: {{ clickedAirplane.flight.currentSpeed[this.index2] || '0 km/h' }}
      </v-card-title>
    </v-card>
    </div>
    <div id="canvasContainer">
      <canvas id="c" width="584" height="600" @mousemove="handleMouseMove" @click="handleMouseClick"></canvas>
      <div v-if="tooltip.show" class="tooltip" :style="{ top: `${tooltip.top}px`, left: `${tooltip.left}px` }">
        {{ tooltip.content }}
      </div>
    </div>
  </div>
</template>

<style>
  @font-face {
      font-family: 'IBM Plex Sans';
      src: url(../assets/fonts/IBMPlexSans-SemiBold.ttf);
  }
  .container {
    display: flex;
    flex-direction: row;
  }
  .card {
    min-width: 33.3%;
    padding-top: 2em;
    padding-left: 2em;
    font-family: 'IBM Plex Sans';
  }
  #canvasContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding-top: 3em;
  }
  .flight-info-card {
    position: absolute;
    max-width: 25em; 
    width: 100%;
    max-height: 42em;
    height: 100%;
    opacity: 0;
    transform: translateX(-100%); 
    animation: slideInFromLeft 1s ease-out forwards; 
    filter: drop-shadow(0px 8px 4px rgba(0, 0, 0, 1));
    border-radius: 1rem !important ;
  }
  .closeButton {
    color: #ECECE4;
    position: absolute;
    z-index: 999;
    margin: 1% 0 0 92.5%;
  }
  .hideCard {
    animation: slideOutFromRight 1s ease-in-out forwards; 
  }
  .tooltip {
    position: fixed;
    background-color: #ECECE4;
    color: black;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 5px;
    font-size: 12px;
    pointer-events: none; 
  }

  @keyframes slideInFromLeft {
    0% {
      opacity: 0;
      transform: translateX(-100%);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
  @keyframes slideOutFromRight {
    0% {
      opacity: 1;
      transform: translateX(0%);
    }
    100% {
      opacity: 0;
      transform: translateX(-100%);
    }
  }
  
  
  
</style>
