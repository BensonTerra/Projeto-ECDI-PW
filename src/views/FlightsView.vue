<template>
  <div>
    <v-text-field label="Nº de voo" class="inputVoo" v-model="flightNumberFilter"></v-text-field>
    <v-combobox
      v-model="companyFilters"
      :items="filters.companhia"
      label="Companhia"
      multiple
      chips
      class="filterCompanhia"
    ></v-combobox>
    <v-combobox
      v-model="destinationFilters"
      :items="filters.destino"
      label="Destino"
      multiple
      chips
      class="filterDestino"
    ></v-combobox>
    <v-switch
      v-model="model"
      hide-details
      inset
      :label="switchLabel"
      class="chegadasPartidas"
    ></v-switch>
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
            Hora
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
        <tr v-for="airplane in orderTaskList" :key="airplane.id" @click="showFlightDetails(airplane)">
          <td>{{ airplane.flight.number }}</td>
          <td>{{ airplane.flight.company }}</td>
          <td>{{ model ? airplane.route.origin : airplane.route.destination }}</td>
          <td>{{ airplane.gate }}</td>
          <td>{{ airplane.schedule.date }}</td>
          <td>{{ airplane.schedule.depart }}</td>
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
     orderTaskList() {
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
.tableFlights {
  background-color: #183d3d;
  width: 75rem;
  position: absolute;
  margin: 6rem;
  margin-top: 10rem;
  left: 14%;
}
th {
  cursor: pointer;
}
.head {
  color: #deb627;
  font-weight: bolder;
  font-size: 1rem;
}
tbody tr:nth-of-type(odd) {
  background-color: #040d12;
  color: #ECECE4;
  text-align: center;
}
tbody tr:nth-of-type(even) {
  color: #ECECE4;
  text-align: center;
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

.inputVoo{
  width: 15rem;
  margin-top: 5rem;
  border-radius: 10rem;
  position:absolute;
  left:19%;
}

.filterCompanhia{
  position:absolute;
  width: 20rem;
  margin-top: 5rem;
  left:35%;
}

.filterDestino{
  position:absolute;
  width: 20rem;
  margin-top: 5rem;
  left:53%;
}
.chegadasPartidas{
  position: absolute;
  margin-top: 5rem;
  left:74%;
  width: 9rem;
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


</style>
