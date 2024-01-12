import { defineStore } from "pinia";
export const useUserStore = defineStore("user", {
  state: () => ({
    isUserAuthenticated: false,
    user: null,
    users: [
      {id: 1, email: "simao@gmail.com", username: "simao", password: "12345", isAdmin: false, isBlocked: false, avatar: '../src/assets/avatar/defaultAvatar.jpg', favoriteAirports:[] },
      {id: 2, email: "luisa@gmail.com", username: "luisa", password: "12345", isAdmin: false, isBlocked: false, avatar: '../src/assets/avatar/defaultAvatar.jpg',favoriteAirports:[]  },
      {id: 3, email: "nelson@gmail.com", username: "nelson", password: "12345", isAdmin: false, isBlocked: false, avatar: '../src/assets/avatar/defaultAvatar.jpg', favoriteAirports:[]  },
      {id: 4, email: "admin@gmail.com", username: "admin", password: "admin", isAdmin: true, isBlocked: false, avatar: '../src/assets/avatar/avatar4.png', favoriteAirports:[]  },
      {id: 5, email: "admin2@gmail.com", username: "admin2", password: "admin2", isAdmin: true, isBlocked: false, avatar: '../src/assets/avatar/avatar4.png', favoriteAirports:[]  },
      {id: 6, email: "blocked@gmail.com", username: "blocked", password: "blocked", isAdmin: false, isBlocked: true, avatar: '../src/assets/avatar/defaultAvatar.jpg', favoriteAirports:[]  },
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

      const newUser = { email, username, password, isAdmin: false, isBlocked: false , favoriteAirports:[]};
      const id = this.users[this.users.length - 1].id + 1;
      const newUser = {id: id, email, username, password, isAdmin: false, isBlocked: false, avatar: '../src/assets/avatar/defaultAvatar.jpg'};
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
    }
  },  
  persist: true,
});