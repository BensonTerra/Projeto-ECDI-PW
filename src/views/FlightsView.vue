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
      
      class="chegadasPartidas"
    ></v-switch>
    <v-table class="tableFlights">
      <thead class="head">
        <tr>
           <th class="text-center">Nº de Voo</th>
          <th class="text-center">Companhia</th>
          <th class="text-center">{{ model ? 'Origem' : 'Destino' }}</th>
          <th class="text-center">Portão</th>
          <th class="text-center">Dia</th>
          <th class="text-center">Hora</th>
          <th class="text-center">Estado</th>
          <th class="text-center">Aeroporto</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="airplane in filteredTableData" :key="airplane.id">
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
        },
        route: {
          destination: airplane.route.destination,
          destinationAirport: airplane.route.destinationAirport,
          origin: airplane.route.origin,
          originAirport: airplane.route.originAirport,
        },
        gate: airplane.gate,
        schedule: {
          date: airplane.schedule.date,
          depart: airplane.schedule.depart,
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
    
  },
};
</script>

<style scoped>
.tableFlights {
  background-color: #183d3d;
  width: 70rem;
  position: absolute;
  margin: 6rem;
  margin-top: 10rem;
  left: 16%;
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
  left:21%;
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
  left:75%;
}
</style>
