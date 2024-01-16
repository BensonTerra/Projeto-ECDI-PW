<template>
  <div>
    <div class="filter-container">

      <v-text-field label="Nº de voo" class="inputVoo" v-model="flightNumberFilter"></v-text-field>
      <v-combobox
        v-model="companyFilters"
        :items="filters.companhia"
        label="Companhia"
        multiple
        chips
        clearable
        class="filterCompanhia"
      ></v-combobox>
      <v-combobox
        v-model="destinationFilters"
        :items="filters.destino"
        label="Destino"
        multiple
        chips
        clearable
        class="filterDestino"
      ></v-combobox>
      <v-switch
        v-model="model"
        hide-details
        inset
        :label="switchLabel"
        class="chegadasPartidas"
      ></v-switch>
    </div>
    <div class="centered-title">{{model ? 'Chegadas' : 'Partidas'}}</div>
    <v-table class="tableFlights">
      <thead class="head">
        <tr>
          <th class="text-center" @click="changeOrder('flight.number')">
            Nº de Voo
            {{ renderOrderArrow('flight.number') }}
          </th>
          <th class="text-center" @click="changeOrder('flight.company')">
            Companhia
            {{ renderOrderArrow('flight.company') }}
          </th>
          <th class="text-center"  @click="changeOrder(model ? 'route.origin' : 'route.destination')">
            {{ model ? 'Origem' : 'Destino' }}
            {{ renderOrderArrow(model ? 'route.origin' : 'route.destination') }}
          </th>
          <th class="text-center" @click="changeOrder('gate')">
            Portão
            {{ renderOrderArrow('gate') }}
          </th>
          <th class="text-center">Dia</th>
          <th class="text-center">
            {{ model ? 'Hora de Chegada' : 'Hora de Partida' }}
          </th>
          <th class="text-center" @click="changeOrder('flight.status')">
            Estado
            {{ renderOrderArrow('flight.status') }}
          </th>
          <th class="text-center" @click="changeOrder(model ? 'route.originAirport' : 'route.destinationAirport')">
            Aeroporto
            {{ renderOrderArrow(model ? 'route.originAirport' : 'route.destinationAirport') }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="airplane in orderedTable" :key="airplane.id" @click="showFlightDetails(airplane)">
          <td>{{ airplane.flight.number }}</td>
          <td>{{ airplane.flight.company }}</td>
          <td>{{ model ? airplane.route.origin : airplane.route.destination }}</td>
          <td>{{ airplane.gate }}</td>
          <td>{{ formatDate(airplane.schedule.date)  }}</td>
          <td>{{ model ? airplane.schedule.arrival : airplane.schedule.depart}}</td>
          <td>{{ airplane.flight.status}}</td>
          <td>{{ model ? airplane.route.originAirport : airplane.route.destinationAirport }}</td>
        </tr>
      </tbody>
    </v-table>
    <v-dialog v-model="dialogDetails" max-width="600">
      <v-card
      v-if="selectedFlight"
      class="flight-info-card"
      tile
      color="#00191F"
      >
      <button class="closeButtonX" @click="hideCard">
        <v-icon
          icon="mdi-close"
        ></v-icon></button>
      
      <v-img
        class="align-end text-white"
        height="200"
        :src="selectedFlight.flight.image"
        cover
      ></v-img>
      <v-card-title style="font-size: 1em; color: #ECECE4;">
        Nº do voo: {{ selectedFlight.flight.number}}
      </v-card-title>
      <v-card-title style="font-size: 1em; color: #ECECE4;">
        Companhia: {{ selectedFlight.flight.company}}
      </v-card-title>
      <v-card-title style="font-size: 1em; color: #ECECE4;">
        Aeronave: {{ selectedFlight.flight.name}} ({{ selectedFlight.flight.aircraftCode}})
      </v-card-title>
      <v-card-title style="font-size: 1em; color: #ECECE4;">
        Rota: {{ selectedFlight.route.origin}}({{ selectedFlight.route.originAbbreviation }}) - {{  selectedFlight.route.destination}}({{  selectedFlight.route.destinationAbbreviation }})
      </v-card-title>
      <v-card-title style="font-size: 1em; color: #ECECE4;">
        Aeroporto: ({{ selectedFlight.route.originAirportIATA }})({{  selectedFlight.route.originAirportICAO }}) - ({{  selectedFlight.route.destinationAirportIATA }})({{  selectedFlight.route.destinationAirportICAO }})
      </v-card-title>
      <v-card-title style="font-size: 1em; color: #ECECE4;">
        Horário: Partida({{  selectedFlight.schedule.depart }}) - Chegada({{  selectedFlight.schedule.arrival }})
      </v-card-title>
    </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { useAirplaneStore } from "@/stores/airplane";

export default {
  data() {
    return {
      airplaneStore: useAirplaneStore(),
      flightNumberFilter:"",
      companyFilters: [],
      destinationFilters: [],
      model: false,
      sortOrder:"asc",
      dialogDetails:false,
      selectedFlight: null,
      orderFlag: 1,
      orderType: '',
    };
  },
  created() {
    try {
      this.airplaneStore.fetchAirplane();
    } catch (error) {
      alert(error.message);
    }
  },
  computed: {
    tableData() {
      return this.airplaneStore.getAirplanes || [];
    },
    newTableData() {
      return this.tableData[0]?.airplanes.map(airplane => ({
        id: airplane.id,
        flight: {
          number: airplane.flight.number,
          company: airplane.flight.company,
          status: airplane.flight.status[1],
          image: airplane.flight.image,
          aircraftCode: airplane.flight.aircraftCode,
        },
        route: {
          destination: airplane.route.destination,
          destinationAirport: airplane.route.destinationAirport,
          origin: airplane.route.origin,
          originAirport: airplane.route.originAirport,
          originAirportIATA:airplane.route.originAirportIATA,
          originAirportICAO:airplane.route.originAirportICAO,
          destinationAirportIATA:airplane.route.destinationAirportIATA,
          destinationAirportICAO:airplane.route.destinationAirportICAO,
          originAbbreviation:airplane.route.originAbbreviation,
          destinationAbbreviation:airplane.route.destinationAbbreviation,
        },
        gate: airplane.gate,
        schedule: {
          date: airplane.schedule.date,
          depart: airplane.schedule.depart,
          arrival: airplane.schedule.arrival,
        },
      })) || [];
    },
    filters() {
      const companhiaSet = new Set(this.newTableData.map((airplane) => airplane.flight.company));
      const destinoSet = new Set(this.newTableData.map((airplane) => airplane.route.destination));
      return {
        companhia: Array.from(companhiaSet),
        destino: Array.from(destinoSet),
      };
    },
    filteredTableData() {
      return this.newTableData.filter((airplane) => {
        const flightNumberMatches = String(airplane.flight.number).includes(String(this.flightNumberFilter));
        const companyMatches = this.companyFilters.length === 0 || this.companyFilters.includes(airplane.flight.company);
        const destinationMatches = this.destinationFilters.length === 0 || this.destinationFilters.includes(airplane.route.destination);

        return flightNumberMatches && companyMatches && destinationMatches;
      });
    },
    switchLabel() {
       return this.model ? 'Chegadas' : 'Partidas';
     },
     orderedTable() {
      return this.filteredTableData.sort((airplane1, airplane2) => {
        const value1 = this.getFieldValue(airplane1, this.orderType);
        const value2 = this.getFieldValue(airplane2, this.orderType);

        // Verify if the values are numbers
        const isNumeric = !isNaN(value1) && !isNaN(value2);

        if (isNumeric) {
          // Order numbers
          return (value1 - value2) * this.orderFlag;
        } else {
          // Order strings
          return value1.localeCompare(value2) * this.orderFlag;
        }
      });
    }
  },
  methods: {
      showFlightDetails(airplane) {
      this.dialogDetails = true; // Open the dialog
      this.selectedFlight = airplane;
    },
    hideCard(){
      this.dialogDetails=false
    },
    formatDate(fullDate) {
      // Convert the date string to a Date object
      const dateObj = new Date(fullDate);

      // Get the month (0-11) and add 1 to get the actual month number (1-12)
      const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');

      // Get the day of the month and add 0 to get a leading zero, if needed
      const day = dateObj.getDate().toString().padStart(2, '0');

      // Return the formatted date as "MM/DD"
      return `${month}/${day}`;
    },
    changeOrder(orderType) {
      this.orderFlag = this.orderFlag * -1;
      this.orderType = orderType;
    },
    getFieldValue(airplane, fieldName) {
      // Split the field name by dots to get an array of nested property names
      const fields = fieldName.split('.');
      // Initialize the value to be the entire airplane object
      let value = airplane;

      // Iterate through each field in the array
      for (const field of fields) {
          // Check if the current value has the specified field as a property
        if (value && value.hasOwnProperty(field)) {
          // If yes, update the value to be the value of the nested property
          value = value[field];
        } else {
          // If not, return null (indicating that the field doesn't exist)
          return null;
        }
      }
      // After iterating through all fields, return the final value
      return value;
    },
    renderOrderArrow(orderType) {
      // Check if the current column is the one being sorted
      if (this.orderType === orderType) {
        // If yes, return an upward-pointing arrow ('▲') if ascending, or a downward-pointing arrow ('▼') if descending
        return this.orderFlag === 1 ? '▲' : '▼';
      }
      // If the current column is not the one being sorted, return an empty string
      return '';
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
.tableFlights {
  background-color: #183d3d;
  width: 75rem;
  position: absolute;
  left: 20%;
  margin-top: 3em;
}
th {
  cursor: pointer;
}
.head {
  color: #DEB627;
  text-align: center;
  font-family: IBM Plex Mono;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: capitalize;
}
tbody tr:nth-of-type(odd) {
  background-color: #040d12;
  text-align: center;
  color: #ECECE4;
  text-align: center;
  font-family: IBM Plex Sans;
  font-size: 0.9rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: capitalize;
}
tbody tr:nth-of-type(even) {
  text-align: center;
  color:#ECECE4;
  text-align: center;
  font-family: IBM Plex Sans;
  font-size: 0.9rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: capitalize;
}

tbody tr:nth-of-type(odd):hover,tbody tr:nth-of-type(even):hover{
  border: 2px solid #deb627; /* Add border on hover */
  
}
tbody tr:hover {
  background-color: rgba(222, 182, 39, 0.5); /* Change background color on hover */
  color: #040d12;
  border-left: 2px solid #deb627; /* Add border on hover */
  cursor: pointer;
}

.centered-title {
    display: flex;
    justify-content: center;
    color:  #DEB627;
    font-family: IBM Plex Mono;
    font-size: 2rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-transform: capitalize;
    margin-top: 0em;
}

.filter-container {
  display: flex;
  justify-content: center; 
  max-width: 50vw;
  margin-top: 2em;
  margin-left: 30em;
}

.inputVoo{
  width: 6rem !important;
  text-align: center;
  font-family: IBM Plex Sans;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: capitalize;
  background-color: #ECECE4;
  height: 3em;
  margin: 1em;
  border: 2px solid #DEB627;
}

.filterCompanhia{
  width: 7rem !important;
  text-align: center;
  font-family: IBM Plex Sans;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: capitalize;
  background-color: #ECECE4;
  height: 3em;
  margin: 1em;
  border: 2px solid #DEB627;
}

.filterDestino{
  width: 8rem !important;
  text-align: center;
  font-family: IBM Plex Sans;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: capitalize;
  background-color: #ECECE4;
  height: 3em;
  margin: 1em;
  border: 2px solid #DEB627;
}
.chegadasPartidas{
  width: 2.2rem !important;
  text-align: center;
  font-family: IBM Plex Sans;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: capitalize;
  background-color: #ECECE4;
  margin: 1em;
  border: 2px solid #DEB627;
  height: 3em;
}

.closeButtonX {
    color: #ECECE4;
    position: absolute;
    z-index: 999;
    margin: 1% 0 0 92.5%;
  }
  .hideCard {
    animation: slideOutFromRight 1s ease-in-out forwards; 
  }
  .v-selection-control {
    align-items: center;
    contain: layout;
    display: flex;
    flex: 1 0;
    grid-area: control;
    position: relative;
    user-select: none;
    BACKGROUND-COLOR: aliceblue;
}

.flight-info-card {
  color: #ECECE4;
  font-family: IBM Plex Sans;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: capitalize;
}





</style>
