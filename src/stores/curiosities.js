import { defineStore } from "pinia";
export const useCuriositiesStore = defineStore("curiositie", {
  state: () => ({
    curiosities: [
      { id:1, 
        type:'AEROPORTOS', 
        desc: 'O Brasil é o segundo país no mundo em número de aeroportos, com 2.457 aeródromos registados, incluindo grandes, médios e pequenos terminais',
        img: 'src/assets/curiosidade1.jpeg'
      },
      { id:2, 
        type:'AEROPORTOS', 
        desc: 'O Aeroporto Internacional Rei Fahd, na Arábia Saudita, é o maior do mundo em área total, cobrindo mais de 780 quilômetros quadrados.',
        img: 'src/assets/curiosidade2.jpeg'
      },
      { id:3, 
        type:'AEROPORTOS', 
        desc: '0 Aeroporto Internacional de Incheon é reconhecido por sua ampla  gama de facilidades, incluindo áreas de descanso, spas e até um campo de golfe.',
        img: 'src/assets/curiosidade3.jpeg'
      },
      { id:4, 
        type:'AEROPORTOS', 
        desc: 'O primeiro aeroporto do brasil foi o Campo de Marte, localizado em São Paulo. Inaugurado em 1929, hoje funciona apenas a atividades relacionadas com aviação',
        img: 'src/assets/curiosidade4.jpeg'
      },
      { id:5, 
        type:'VOOS', 
        desc: 'Nos anos 50, os dejetos do banheiro eram jogados em voos sobre as cidades abaixo. Hoje os dejetos são armazenados e esvaziados ao fim de cada voo. ',
        img: 'src/assets/curiosidade5.jpeg'
      },
      { id:6, 
        type:'VOOS', 
        desc: 'As faixas brancas no céu após aviões são trilhas de condensação. O vapor do motor se mistura com a atmosfera fria, formando nuvens.',
        img: 'src/assets/curiosidade6.jpeg'
      },
      { id:7, 
        type:'VOOS', 
        desc: 'Bebés já nasceram durante um voo. Na maioria dos casos, a nacionalidade da criança é determinada pelo país sobrevoado no momento do nascimento.',
        img: 'src/assets/curiosidade7.jpeg'
      },
      { id:8, 
        type:'AVIÕES', 
        desc: 'O Antonov An-225 Mriya ostenta o título de maior avião do mundo, com uma envergadura de asa de incríveis 88,4 metros. Este gigante das alturas foi projetado na Ucrânia para missões de carga estratégica.',
        img: 'src/assets/curiosidade8.jpeg'
      },
      { id:9, 
        type:'AVIÕES', 
        desc: 'O avião mais rápido do mundo é o North American X-15, atingindo 7.273 km/h. Criado pela NASA na década de 1960, estabeleceu recordes de velocidade em voos de alta altitude.',
        img: 'src/assets/curiosidade9.jpeg'
      },
      { id:10, 
        type:'AVIÕES', 
        desc: 'Aviões são o meio de transporte mais seguro, com estatísticas de acidentes mínimas. O constante aprimoramento em segurança torna a aviação uma opção confiável para viajar.',
        img: 'src/assets/curiosidade10.jpeg'
      },
   
    ],
  }),
  created() {
      const types = this.curiosityTypes;
      console.log(types);
  },
  getters: {
    getCuriosities: (state) => state.curiosities,
    getCuriositiesByType: (state) => (type) => state.curiosities.filter(curiositie => curiositie.type === type),
     getAllTypesCuriosities: (state) => {
      return state.curiosities.reduce((types, curiosity) => {
        if (!types.includes(curiosity.type)) {
          types.push(curiosity.type);
        }
        return types;
      }, []);
    },

  },
  actions: {
    addCuriosity(newCuriosity) {
      const newId = this.curiosities.length + 1; // Increment the ID for the new curiosity
      const addedCuriosity = {
        id: newId,
        type: newCuriosity.type,
        desc: newCuriosity.desc,
        img: newCuriosity.img,
      };
      this.curiosities.push(addedCuriosity); // Add the new curiosity to the array

      console.log(this.curiosities);
    },
  },
   
  persist: true,
});