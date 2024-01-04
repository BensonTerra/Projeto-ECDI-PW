import { defineStore } from 'pinia';
import * as api from '../api/api.js';
import mockData from "@/api/mocks/mocks.js"; 

const API_BASE_URL = 'http://localhost:4000';

export const useAirplaneStore = defineStore('airplane', {
  state: () => ({
    airplanes: [],
  }),
  getters: {
    getAirplanes: (state) => state.airplanes,
  },
  actions: {
    async fetchAirplane() {
      try {
        const data = await api.get(API_BASE_URL, 'airplane');
        this.airplanes = data;
        // console.log(this.airplanes);
      } catch (error) {
        console.error('Error in store fetching objects:', error);
        throw error;
      }
    },
  },
});
