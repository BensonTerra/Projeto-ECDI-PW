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
          <tr v-for="voo in tableData" :key="voo.id">
            <td>{{ voo.flight.number }}</td>
            <td>{{ voo.flight.company }}</td>
            <td>{{ voo.route.destination }}</td>
            <td>{{ voo.gate }}</td>
            <td>{{ voo.schedule.date }}</td>
            <td>{{ voo.schedule.depart }}</td>
            <td>{{ voo.flight.status[0] }}</td>
            <td>{{ voo.route.destinationAirport }}</td>
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
                airplaneStore:useAirplaneStore(),
            }
        },
        created() {
            try {
                this.airplaneStore.fetchAirplane();
            } catch (error) {
            alert(error.message);
            }
        },
        computed:{
            tableData() {
                const data = this.airplaneStore.getAirplanes;
                console.log(data); // Log the data for debugging purposes
                return data;
            }
        },
        
    }
</script>

<style scoped>

.tableFlights{
    background-color: #183D3D;
    width: 60rem;
    position: absolute;
    margin: 6rem;
    left:20%;
}
.head{
    color: #DEB627;
    font-weight: bolder;
    font-size: 1rem;
}
tbody tr:nth-of-type(odd) {
   background-color: #040D12;
 }


</style>