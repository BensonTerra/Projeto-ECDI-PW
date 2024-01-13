import { defineStore } from "pinia";
export const useUserStore = defineStore("user", {
  state: () => ({
    isUserAuthenticated: false,
    user: null,
    users: [
      {id: 1, email: "simao@gmail.com", username: "simao", password: "12345", isAdmin: false, isBlocked: false, avatar: '../src/assets/avatar/defaultAvatar.jpg', favoriteAirports:[],visitedStates:[], },
      {id: 2, email: "luisa@gmail.com", username: "luisa", password: "12345", isAdmin: false, isBlocked: false, avatar: '../src/assets/avatar/defaultAvatar.jpg',favoriteAirports:[], visitedStates:[], },
      {id: 3, email: "nelson@gmail.com", username: "nelson", password: "12345", isAdmin: false, isBlocked: false, avatar: '../src/assets/avatar/defaultAvatar.jpg', favoriteAirports:[], visitedStates:[], },
      {id: 4, email: "admin@gmail.com", username: "admin", password: "admin", isAdmin: true, isBlocked: false, avatar: '../src/assets/avatar/avatar4.png', favoriteAirports:[], visitedStates:[], },
      {id: 5, email: "admin2@gmail.com", username: "admin2", password: "admin2", isAdmin: true, isBlocked: false, avatar: '../src/assets/avatar/avatar4.png', favoriteAirports:[], visitedStates:[], },
      {id: 6, email: "blocked@gmail.com", username: "blocked", password: "blocked", isAdmin: false, isBlocked: true, avatar: '../src/assets/avatar/defaultAvatar.jpg', favoriteAirports:[], visitedStates:[], },
    ],
    airports: [
      { id: 1, name: "Aeroporto Internacional de Guarulhos (GRU)", estado: "São Paulo", address: "Rod. Hélio Smidt, s/nº - Aeroporto, Guarulhos - SP, 07190-100, Brasil", image: "/src/assets/airports/guarulhos.jpg" },
      { id: 2, name: "Aeroporto Internacional Antônio Carlos Jobim (GIG)", estado: "Rio de Janeiro", address: "Av. Vinte de Janeiro, s/nº - Ilha do Governador, Rio de Janeiro - RJ, 21941-900, Brasil", image: "/src/assets/airports/antoniocarlos.jpg" },
      { id: 3, name: "Aeroporto Internacional de Salvador Luís Eduardo Magalhães (SBSV)", estado: "Bahia", address: "Pr. Gago Coutinho, S/N - São Cristóvão, Salvador - BA, 41510-045, Brasil", image: "/src/assets/airports/salvador.jpg" },
      { id: 4, name: "Aeroporto Internacional Presidente Juscelino Kubitschek (BSB)", estado: "Distrito Federal", address: "Rod. Pres. Juscelino Kubitschek, s/n - Lago Sul, Brasília - DF, 71608-900, Brasil", image: "/src/assets/airports/brasilia.jpg" },
      { id: 5, name: "Aeroporto de Teresina - Senador Petrônio Portela (SBTE)", estado: "Piauí", address: "Av. Centenário - Aeroporto, Teresina - PI, 64006-012, Brasil", image: "/src/assets/airports/teresina.jpg" },
      { id: 6, name: "Aeroporto Internacional do Recife/Guararapes - Gilberto Freyre (REC)", estado: "Pernambuco", address: "Praça Min. Salgado Filho, s/n - Imbiribeira, Recife - PE, 51210-902, Brasil", image: "/src/assets/airports/recife.jpg" },
      { id: 7, name: "Aeroporto Internacional de Palmas (PMW)", estado: "Tocantins", address: "Avenida Joaquim Teotônio Segurado, s/n - Plano Diretor Expansão Sul, Palmas - TO, 77061-900, Brasil", image: "/src/assets/airports/palmas.jpg" },
      { id: 8, name: "Aeroporto Internacional de Manaus - Eduardo Gomes (MAO)", estado: "Amazonas", address: "Av. Santos Dumont, 1350 - Tarumã, Manaus - AM, 69041-000, Brasil", image: "/src/assets/airports/manaus.jpg" },
      { id: 9, name: "Aeroporto Internacional de Cuiabá - Marechal Rondon (CGB)", estado: "Mato Grosso", address: "Av. João Ponce de Arruda, s/n - Vila Pirineu, Várzea Grande - MT, 78110-900, Brasil", image: "/src/assets/airports/cuiaba.jpg" },
      { id: 10, name: "Aeroporto Internacional de Porto Velho - Governador Jorge Teixeira de Oliveira (PVH)", estado: "Rondônia", address: "R. Silvania, S/N - Aeroporto, Porto Velho - RO, 76803-970, Brasil", image: "/src/assets/airports/porto.jpg" },
      { id: 11, name: "Aeroporto Internacional Afonso Pena (CWB)", estado: "Paraná", address: "Av. Rocha Pombo - Águas Belas, São José dos Pinhais - PR, 83010-900, Brasil", image: "/src/assets/airports/afonso.jpg" },
      { id: 12, name: "Aeroporto Internacional de Boa Vista - Atlas Brasil Cantanhede (BVB)", estado: "Roraima", address: "Praça Santos Dumont, 100 angar gollog - Aeroporto, Boa Vista - RR, 69304-650, Brasil", image: "/src/assets/airports/boavista.jpg" },
      { id: 13, name: "Aeroporto Internacional de Rio Branco - Plácido de Castro (RBR)", estado: "Acre", address: "Avenida Plácido de Castro, s/n - Vila Aeroporto, Rio Branco - AC, 69923-900, Brasil", image: "/src/assets/airports/riobranco.jpg" },
      { id: 14, name: "Aeroporto Internacional Salgado Filho (POA)", estado: "Rio Grande do Sul", address: "Av. Severo Dullius, 90.010 - Anchieta, Porto Alegre - RS, 90200-310, Brasil", image: "/src/assets/airports/salgado.jpg" },
      { id: 15, name: "Aeroporto Internacional de Macapá - Alberto Alcolumbre (MCP)", estado: "Amapá", address: "R. Hildemar Maia, S/N - Jesus de Nazaré, Macapá - AP, 68908-119, Brasil", image: "/src/assets/airports/macapa.jpg" },
      { id: 16, name: "Aeroporto Internacional de Florianópolis - Hercílio Luz (FLN)", estado: "Santa Catarina", address: "Rod. Ac. ao Aeroporto, 6.200 - Carianos, Florianópolis - SC, 88047-902, Brasil", image: "/src/assets/airports/florianopolis.jpg" },
      { id: 17, name: "Aeroporto Internacional de Belém (BEL)", estado: "Pará", address: "Av. Júlio César, s/n - Val-de-Cães, Belém - PA, 66115-970, Brasil", image: "/src/assets/airports/belem.jpg" },
      { id: 18, name: "Aeroporto Internacional de São Luís (SLZ)", estado: "Maranhão", address: "Av. dos Libaneses, 3503 - Tirirical, São Luís - MA, 65056-480, Brasil", image: "/src/assets/airports/saoluis.jpg" },
      { id: 19, name: "Aeroporto Internacional de Campo Grande (CGR)", estado: "Mato Grosso do Sul", address: "Av. Duque de Caxias, s/n - Vila Serradinho, Campo Grande - MS, 79101-901, Brasil", image: "/src/assets/airports/campogrande.jpg" },
      { id: 20, name: "Aeroporto Internacional de Fortaleza - Pinto Martins (FOR)", estado: "Ceará", address: "Av. Senador Carlos Jereissati, 3000 - Serrinha, Fortaleza - CE, 60741-900, Brasil", image: "/src/assets/airports/fortaleza.jpg" },
      { id: 21, name: "Aeroporto Internacional de Maceió - Zumbi dos Palmares (MCZ)", estado: "Alagoas", address: "Tabuleiro do Pinto, Rio Largo - AL, 57100-000, Brasil", image: "/src/assets/airports/alagoas.jpg" },
      { id: 22, name: " Aeroporto Internacional de Vitória – Eurico de Aguiar Salles (VIX)", estado: "Espírito Santo", address: "Av. Roza Helena Schorling Albuquerque, S/N - Aeroporto, Vitória - ES, 29075-685, Brasil", image: "/src/assets/airports/espirito.jpg" },
      { id: 23, name: " Aeroporto Internacional de Goiânia - Santa Genoveva (GYN)", estado: "Goiás", address: "Alameda 4, s/n - Santa Genoveva, Goiânia - GO, Brasil", image: "/src/assets/airports/goias.jpg" },
      { id: 24, name: " Aeroporto Internacional de Belo Horizonte/Confins – Tancredo Neves (CNF)", estado: "Minas Gerais", address: "LMG-800, 76 - Rodoviario, Confins - MG, 33500-000, Brasil", image: "/src/assets/airports/belohorizonte.jpg" },
      { id: 25, name: " Aeroporto Internacional de João Pessoa - Presidente Castro Pinto (JPA)", estado: "Paraíba", address: "Av. Mal. Rondon, s/n, Bayeux - PB, 58308-901, Brasil", image: "/src/assets/airports/paraiba.jpg" },
      { id: 26, name: " Aeroporto Internacional de Natal (NAT)", estado: "Rio Grande do Norte", address: "Av. Dr. Ruy Pereira dos Santos, 3100 - Aeroporto, São Gonçalo do Amarante - RN, 59290-000, Brasil", image: "/src/assets/airports/natal.jpg" },
      { id: 27, name: " Aeroporto Internacional de Aracaju - Santa Maria (AJU)", estado: "Sergipe", address: "Av. Sen. Júlio César Leite, 1440 - Aeroporto, Aracaju - SE, 49037-580, Brasil", image: "/src/assets/airports/aracaju.jpg" },

    ],

    states:[
      {id:1, name:'Bahia', clicked: false, src:"/src/assets/bahiaPin.png", x:320, y:180, path:"m 396.7483,280.14568 c 0.71501,-2.34867 2.32435,-8.20598 2.77544,-10.88304 1.06631,-4.36755 3.22976,-8.56454 2.89307,-13.15018 0.24433,-9.74093 0.23297,-19.53715 1.88542,-29.15165 -1.15228,-2.73068 4.27262,-3.15317 1.98097,-5.4068 -1.73917,-0.58345 0.40641,-3.0821 1.62874,-3.43559 1.53619,-0.44426 2.9396,0.42062 4.0554,2.55291 1.73062,0.80718 2.10721,-1.34658 3.44153,-2.3963 1.76038,-3.59872 4.5629,-7.82465 6.35375,-9.78217 -2.85539,-2.53678 -4.39697,-3.48364 -5.47699,-5.95478 -1.15551,-2.64388 -2.51321,-6.38726 -0.69554,-8.62811 0.8232,-1.01486 3.09325,0.53899 3.88851,-0.49791 1.1238,-1.46527 -0.15589,-3.75867 -0.74511,-5.48947 -1.13553,-3.33554 -2.18056,-8.25892 -3.93647,-11.01495 -1.1871,-1.86324 -2.8669,-3.41295 -4.68577,-4.65245 -1.85469,-1.26391 -3.96204,-2.60677 -6.16293,-2.71187 -2.38216,-0.11376 -4.32187,2.50569 -6.51221,3.70588 -2.22637,1.21993 -3.59855,3.30495 -6.73716,3.55179 -2.5361,0.19943 -4.2372,-1.37704 -4.99484,-3.97769 -1.27754,-2.23433 -2.44172,-3.74646 -4.4687,-3.83434 -1.22531,-0.0531 -2.13234,1.21325 -3.13497,1.91584 -1.84821,1.29512 -3.35747,3.05441 -5.28854,4.22383 -2.25784,1.3673 -4.62557,2.88087 -7.24986,3.19641 -4.15038,0.49906 -7.72576,-3.98224 -11.99836,-2.01778 -1.36462,0.62742 -0.32681,2.83249 -0.58534,4.30555 -0.33094,1.88625 -0.65365,3.87203 -1.6678,5.49956 -1.355,2.17451 -3.19835,4.27941 -5.45026,5.51555 -2.29861,1.26176 -5.1901,2.01727 -7.79672,1.71113 -2.61965,-0.30767 -5.09356,-1.52312 -7.08001,-3.18076 -1.74634,-1.45727 -2.82984,-5.60291 -3.86531,-5.62313 -1.87079,-0.0365 -3.74146,7.10626 -5.89576,11.98985 -0.63247,1.43375 3.11949,4.1232 3.31557,6.66498 0.12788,1.65771 -1.66882,3.00996 -1.75071,4.67058 -0.10329,2.09443 1.48709,2.87468 1.61775,6.07936 0.0931,2.28225 -0.95868,4.37663 -1.04047,6.60343 -0.12668,3.44858 0.0489,6.69098 0.85673,10.31719 0.72509,3.2546 3.17304,5.19269 -0.24445,10.0002 5.13924,1.05891 11.15958,-5.0548 16.30713,-7.39931 2.60854,-0.70728 4.8401,-1.06363 6.82943,0.0373 1.54993,0.85775 1.35847,3.49706 2.83011,4.48183 2.27406,1.5217 5.47244,0.63594 8.09762,1.41941 5.655,1.68766 6.77439,7.11151 16.25437,6.99917 2.75517,-0.0327 3.16261,4.36921 5.5539,5.73076 3.11222,2.36598 11.11558,0.63149 12.80505,4.85243 2.29565,5.73537 -7.71302,12.19482 -7.12466,15.98706 0.43899,2.82945 3.71881,5.52173 6.1833,7.75474 0.97504,0.88346 2.13673,2.26039 3.46556,2.05997 0.51461,-0.0776 0.78079,-0.71097 1.04711,-1.15809 0.26778,-0.44957 0.52248,-1.48034 0.52248,-1.48034 z"},
      {id:2, name:'Sergipe', clicked: false, src:"/src/assets/bahiaPin.png",x:320, y:180, path:"m 426.78167,203.57812 c 1.64447,-3.64352 3.42828,-4.24703 5.65355,-5.03924 0.7999,-0.47026 1.75861,-1.31119 2.62132,-2.07247 1.41405,-0.97145 2.25072,-1.02012 3.68672,-1.58986 -4.04896,-2.86239 -7.79503,-5.819 -11.61154,-8.83301 -1.44855,-1.14396 -2.89164,-2.2969 -4.28272,-3.51008 -1.8488,-1.61237 -4.21709,-3.83037 -5.39571,-5.00464 -0.68913,0.29035 0.62068,3.13542 1.40885,5.58396 0.91366,2.83838 1.4495,3.92905 2.02235,5.94236 0.72816,2.55913 0.69119,4.41636 0.47121,5.49087 -0.14526,0.70943 -0.74247,1.41382 -1.42358,1.66008 -1.08126,0.39093 -2.12116,-1.61768 -3.33247,-0.28322 -0.98648,1.08677 -0.0189,3.2511 0.65831,4.66967 1.22373,2.5632 2.30258,5.60329 5.81317,6.23013 0.68452,0.11035 1.33713,-0.37081 2.00568,-0.5562 0.74465,-0.75158 1.28679,-1.71089 1.70483,-2.68835 z"},
      {id:3, name:'Pernambuco', clicked: false, src:"/src/assets/bahiaPin.png", x:320, y:180, path:"m 441.9826,173.10391 c 2.36676,-0.70977 4.58715,-0.13527 7.22191,0.13138 1.82638,0.18483 3.44025,0.87342 4.41808,0.23325 1.00624,-0.65877 1.63869,-4.51633 1.41834,-6.31378 0.0595,-3.34539 0.21633,-6.20496 0.15389,-9.22199 -1.73161,0 -3.46321,0 -5.19482,0 -0.54521,0.77482 -1.3153,1.48135 -2.16966,1.94193 -1.10574,0.5961 -2.3991,0.78957 -3.64305,0.96443 -1.73074,0.24329 -3.59216,-0.46872 -5.24218,0.10758 -2.19267,0.76583 -1.94183,2.81779 -5.54043,4.22519 -2.04335,-0.2539 -2.45818,-0.42452 -3.34444,-1.21233 -0.956,-0.84979 -1.55304,-1.59561 -1.72159,-3.42942 0.2967,-1.83175 1.09129,-3.04116 2.01034,-4.62397 -0.37066,-2.15268 -1.6376,-2.3687 -2.34872,-1.43263 -3.06771,3.52234 -5.81468,4.79938 -9.80446,5.49254 -3.67278,0.6381 -5.45493,-3.31495 -7.97288,-2.75408 -7.44533,1.65844 -6.67752,-2.83728 -10.27057,-3.86914 -3.15212,-0.77802 -5.03805,1.98704 -8.53566,1.1163 -2.65553,-0.6611 0.0134,5.24326 -1.27421,7.49682 -0.84237,1.47427 -1.81076,1.77483 -4.15158,2.95161 -1.29847,0.65276 -3.05831,0.95663 -3.13529,2.23844 -0.091,1.51555 2.29776,1.99001 3.36363,3.07127 1.273,1.29138 1.98102,3.53737 3.61016,4.06947 4.89624,1.5992 8.71339,-6.05409 13.73053,-6.17679 2.60291,-0.0637 5.00739,1.56698 7.27159,2.85251 2.13919,1.21455 4.21629,3.73116 5.83486,4.51839 1.78404,-0.50316 4.35199,-2.38062 6.52333,-2.43443 4.34574,-0.10769 7.64389,4.75741 12.03796,4.32411 2.42901,-0.92385 4.30578,-3.53218 6.75492,-4.26666 z"},
      {id:4, name:'Alagoas', clicked: false, src:"/src/assets/bahiaPin.png", x:320, y:180, path:"m 453.46387,177.17818 c 0.29049,-0.78832 0.95205,-1.88642 -1.08674,-2.2741 -1.84328,-0.19775 -7.57404,-1.02914 -10.51605,0.28446 -1.68548,0.75255 -2.34466,2.27573 -4.10208,3.09228 -4.41746,3.01846 -8.11775,-1.68491 -12.32575,-3.00427 -1.23213,-0.35909 -2.95429,-0.58741 -4.0963,0 -1.51768,0.78064 -1.81516,0.71019 -2.84926,1.57671 5.65758,4.10096 10.23737,8.17407 15.37059,12.24282 1.89201,1.49966 3.79987,3.17707 5.6867,4.48548 1.39908,-1.39976 3.19423,-3.10758 4.59331,-4.50733 3.16784,-3.85441 7.67462,-7.41578 9.32558,-11.89605 z"},
    ],

    
  }),
  getters: {
    getUser: (state) => state.user,
    isUser: (state) => state.isUserAuthenticated,
    isLoggedUserBlocked: (state) => state.user.isBlocked,
    getAirports:(state) => state.airports,
    getUserFavorites: (state) => state.user.favoriteAirports,
    isLoggedUserAdmin: (state) => state.user.isAdmin,
    getUserArray: (state) => state.users,
    isAdmin: (state) => { return state.user ? state.user.isAdmin : false;},
    getUserVisitedStates: (state) => state.user.visitedStates, 
    getStates: (state)=> state.states,
  },
  actions: {
    login(username, password) {
      const user = this.users.find(
        (user) => user.username == username && user.password == password
      );
      if (user) {
        this.isUserAuthenticated = true;
        this.user = user;
      } else {
        throw Error("O utilizador não existe");
      }
    },
    register(email, username, password, confirmPassword) {                      
      if (password !== confirmPassword) {
        throw new Error("As senhas não coincidem.");
      }

      if (!email || !username || !password || !confirmPassword) {
        throw new Error("Preencha os campos todos.");
      }

      const existingUser = this.users.find((user) => user.email === email || user.username === username);
      if (existingUser) {
        throw new Error("Utilizador com esse email ou nome de utilizador já existe.");
      }

      const id = this.users[this.users.length - 1].id + 1;
      const newUser = {id: id, email, username, password, isAdmin: false, isBlocked: false, avatar: '../src/assets/avatar/defaultAvatar.jpg', favoriteAirports:[]};
      this.users.push(newUser);

      this.login(username, password);
    },
    logout() {
      this.isUserAuthenticated = false;
      this.user = null;
    },
    addFavorite(object) {
      
      try {
        
        this.user.favoriteAirports.push(object)
      } catch (error) {
        console.log("NÃO ENTROU NOS FAVORITOS")
      }
    },
    removeFavorite(object) {
      try {
        const indexToRemove = this.user.favoriteAirports.findIndex((fav) => fav.id === object.id);
    
        if (indexToRemove !== -1) {
          this.user.favoriteAirports.splice(indexToRemove, 1);
        } else {
          console.log("Airport not found in favorites");
        }
      } catch (error) {
        console.error("Error removing from favorites:", error);
      }
    },
    block(user) {
        user.isBlocked = !user.isBlocked;
    },
    deleteAccount(id) {
      this.users = this.users.filter((user) => user.id != id);
    },
    changeAvatar(newAvatar) {
        this.user.avatar = newAvatar;
    },
    changeUsername(newUsername) {
      try {
        const existingUser = this.users.find((user) => user.username === newUsername);
        if (existingUser) {
          throw Error("Esse nome de utilizador já existe")
        }

        this.user.username = newUsername;
      } catch (error) {
        throw error; 
      }
    },
    changeEmail(newEmail) {
      try {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(newEmail)) {
          throw new Error("Por favor, insira um email válido.");
        }
        const existingUser = this.users.find((user) => user.email === newEmail);
        if (existingUser) {
          throw Error("Esse email já existe")
        }

        this.user.email = newEmail;
      } catch (error) {
        throw error; 
      }
    },
    verifyPassword(oldPassword) {
      try {
        if (this.user.password == oldPassword) {
          return "correct"
        } else {
          throw new Error("As palavras passes não coincidem.");
        }
      } catch (error) {
        throw error; 
      }
    },
    changePassword(newPassword, confirmNewPassword) {
      try {
        if (newPassword !== confirmNewPassword) {
            throw new Error("As palavras-passe não coincidem.");
        } else if (newPassword.length < 8) {
            throw new Error("A palavra-passe deve ter pelo menos 8 caracteres.");
        } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(newPassword)) {
            throw new Error("A palavra-passe deve conter pelo menos um caracter especial.");
        } else if (this.user.password == newPassword) {
            throw new Error("A nova palavra-passe é igual à antiga.");
        } else {
          this.user.password = newPassword;
        }
      } catch (error) {
          throw error; 
      }
    },
    addVisitedState(state) {
      try {
        this.user.visitedState.push(state)
      } catch (error) {
        console.log("NÃO ENTROU NOS VISITADOS")
      }
    },

    removeVisitedState(object) {
      try {
        const indexToRemove = this.user.visitedStates.findIndex((visited) => visited.id === object.id);

        if (indexToRemove !== -1) {
          this.user.visitedStates.splice(indexToRemove, 1);
        } else {
          console.log("State not found in visited");
        }
      } catch (error) {
        console.error("Error removing from visited:", error);
      }
    },

  },  
  persist: true,
});