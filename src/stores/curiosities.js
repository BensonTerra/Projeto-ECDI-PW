import { defineStore } from "pinia";
export const useCuriositiesStore = defineStore("curiositie", {
  state: () => ({
    curiosities: [
      { id:1, type:'airports', desc: 'O Brasil é o segundo país no mundo em número de aeroportos, com 2.457 aeródromos registados, incluindo grandes, médios e pequenos terminais'},
      { id:2, type:'airports', desc: 'O Aeroporto Internacional Rei Fahd, na Arábia Saudita, é o maior do mundo em área total, cobrindo mais de 780 quilômetros quadrados.'},
      {id:3, type:'airports', desc: '0 Aeroporto Internacional de Incheon é reconhecido por sua ampla  gama de facilidades, incluindo áreas de descanso, spas e até um campo de golfe.'},
      {id:4, type:'airports', desc: 'O primeiro aeroporto do brasil foi o Campo de Marte, localizado em São Paulo. Inaugurado em 1929, hoje funciona apenas a atividades relacionadas com aviação'},
      {id:5, type:'flights', desc: 'Nos anos 50, os dejetos do banheiro eram jogados em voos sobre as cidades abaixo. Hoje os dejetos são armazenados e esvaziados ao fim de cada voo. '},
      {id:6, type:'flights', desc: 'As faixas brancas no céu após aviões são trilhas de condensação. O vapor do motor se mistura com a atmosfera fria, formando nuvens'},
   
    ],
  }),
  getters: {
    getCuriosities: (state) => state.curiosities,
    getCuriositie: (state)=> (id)=>state.curiosities.find(curiositie=>curiositie.id==id),


  },
  actions: {
  
  },  
  persist: true,
});