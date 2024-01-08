import { defineStore } from "pinia";
export const useUserStore = defineStore("user", {
  state: () => ({
    isUserAuthenticated: false,
    user: null,
    users: [
      { email: "simao@gmail.com", username: "simao", password: "12345", isAdmin: false, isBlocked: true },
      { email: "luisa@gmail.com", username: "luisa", password: "12345", isAdmin: false, isBlocked: false },
      { email: "nelson@gmail.com", username: "nelson", password: "12345", isAdmin: false, isBlocked: false },
    ],
  }),
  getters: {
    getUser: (state) => state.user,
    isUser: (state) => state.isUserAuthenticated,
    isLoggedUserBlocked: (state) => state.user.isBlocked
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

      const newUser = { email, username, password, isAdmin: false, isBlocked: false };
      this.users.push(newUser);

      this.login(username, password);
    },
    logout() {
      this.isUserAuthenticated = false;
      this.user = null;
    },
  },  
  persist: true,
});