<template>
  <div>
    <v-table class="tableFlights">
      <thead class="head">
        <tr>
          <th class="text-left">Nº de Voo</th>
          <th class="text-left">Companhia</th>
          <th class="text-left">Destino</th>
          <th class="text-left">Portão</th>
          <th class="text-left">Dia</th>
          <th class="text-left">Hora</th>
          <th class="text-left">Estado</th>
          <th class="text-left">Aeroporto</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="airplane in newTableData" :key="airplane.id">
          <td>{{ airplane.flight.number }}</td>
          <td>{{ airplane.flight.company }}</td>
          <td>{{ airplane.route.destination }}</td>
          <td>{{ airplane.gate }}</td>
          <td>{{ airplane.schedule.date }}</td>
          <td>{{ airplane.schedule.depart }}</td>
          <td>{{ airplane.flight.status}}</td>
          <td>{{ airplane.route.destinationAirport }}</td>
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
        },
        gate: airplane.gate,
        schedule: {
          date: airplane.schedule.date,
          depart: airplane.schedule.depart,
        },
      })) || [];
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
  left: 17%;
}
.head {
  color: #deb627;
  font-weight: bolder;
  font-size: 1rem;
}
tbody tr:nth-of-type(odd) {
  background-color: #040d12;
  color: #ECECE4;
}
tbody tr:nth-of-type(even) {
  color: #ECECE4;
}
</style>
