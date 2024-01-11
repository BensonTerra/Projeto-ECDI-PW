import { defineStore } from "pinia";
export const useUserStore = defineStore("user", {
  state: () => ({
    isUserAuthenticated: false,
    user: null,
    users: [
      { email: "simao@gmail.com", username: "simao", password: "12345", isAdmin: false, isBlocked: true ,favoriteAirports:[]},
      { email: "luisa@gmail.com", username: "luisa", password: "12345", isAdmin: false, isBlocked: false ,favoriteAirports:[] },
      { email: "nelson@gmail.com", username: "nelson", password: "12345", isAdmin: false, isBlocked: false ,favoriteAirports:[] },
    ],
    airports: [
      { id:1,name: "Aeroporto Internacional de Guarulhos (GRU)", address: " Rod. Hélio Smidt, s/nº - Aeroporto, Guarulhos - SP, 07190-100, Brasil", image:"/src/assets/airports/guarulhos.jpg" },
      { id:2,name: "Aeroporto Internacional Antônio Carlos Jobim (GIG)", address: " Av. Vinte de Janeiro, s/nº - Ilha do Governador, Rio de Janeiro - RJ, 21941-900, Brasil", image:"/src/assets/airports/antoniocarlos.jpg" },
      { id:3,name: "Aeroporto Internacional de Salvador Luís Eduardo Magalhães (SBSV)", address: " Pr. Gago Coutinho, S/N - São Cristóvão, Salvador - BA, 41510-045, Brasil", image:"/src/assets/airports/salvador.jpg" },
      { id:4,name: "Aeroporto Internacional Presidente Jucelino Kubitschek (BSB)", address: " Rod. Pres. Juscelino Kubitschek, s/n - Lago Sul, Brasília - DF, 71608-900, Brasil", image:"/src/assets/airports/brasilia.jpg" },
      { id:5,name: "Aeroporto de Teresina - Senador Petrônio Portela (SBTE)", address: " Av. Centenário - Aeroporto, Teresina - PI, 64006-012, Brasil", image:"/src/assets/airports/teresina.jpg" },
      { id:6,name: "Aeroporto Internacional do Recife/Guararapes - Gilberto Freyre (REC)", address: " Praça Min. Salgado Filho, s/n - Imbiribeira, Recife - PE, 51210-902, Brasil", image:"/src/assets/airports/recife.jpg" },
      { id:7,name: "Aeroporto Internacional de Palmas (PMW)", address: " Avenida Joaquim Teotônio Segurado, s/n - Plano Diretor Expansão Sul, Palmas - TO, 77061-900, Brasil", image:"/src/assets/airports/palmas.jpg" },
      { id:8,name: "Aeroporto Internacional de Manaus - Eduardo Gomes (MAO)", address: " Av. Santos Dumont, 1350 - Tarumã, Manaus - AM, 69041-000, Brasil", image:"/src/assets/airports/manaus.jpg" },
      { id:9,name: "Aeroporto Internacional de Cuiabá - Marechal Rondon (CGB)", address: " Av. João Ponce de Arruda, s/n - Vila Pirineu, Várzea Grande - MT, 78110-900, Brasil", image:"/src/assets/airports/cuiaba.jpg" },
      { id:10,name: "Aeroporto Internacional de Porto Velho - Governador Jorge Teixeira de Oliveira (PVH)", address: " R. Silvania, S/N - Aeroporto, Porto Velho - RO, 76803-970, Brasil", image:"/src/assets/airports/porto.jpg" },
      { id:10,name: "Aeroporto Internacional Afonso Pena (CWB)", address: " Av. Rocha Pombo - Águas Belas, São José dos Pinhais - PR, 83010-900, Brasil", image:"/src/assets/airports/afonso.jpg" },
      
      
    ],
  }),
  getters: {
    getUser: (state) => state.user,
    isUser: (state) => state.isUserAuthenticated,
    isLoggedUserBlocked: (state) => state.user.isBlocked,
    getAirports:(state) => state.airports,
    getUserFavorites: (state) => state.user.favoriteAirports,
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
  },  
  persist: true,
});