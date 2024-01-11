import { defineStore } from "pinia";
export const useUserStore = defineStore("user", {
  state: () => ({
    isUserAuthenticated: false,
    user: null,
    users: [
      {id: 1, email: "simao@gmail.com", username: "simao", password: "12345", isAdmin: false, isBlocked: false, avatar: '../src/assets/avatar/defaultAvatar.jpg' },
      {id: 2, email: "luisa@gmail.com", username: "luisa", password: "12345", isAdmin: false, isBlocked: false, avatar: '../src/assets/avatar/defaultAvatar.jpg' },
      {id: 3, email: "nelson@gmail.com", username: "nelson", password: "12345", isAdmin: false, isBlocked: false, avatar: '../src/assets/avatar/defaultAvatar.jpg' },
      {id: 4, email: "admin@gmail.com", username: "admin", password: "admin", isAdmin: true, isBlocked: false, avatar: '../src/assets/avatar/avatar4.png' },
      {id: 5, email: "blocked@gmail.com", username: "blocked", password: "blocked", isAdmin: false, isBlocked: true, avatar: '../src/assets/avatar/defaultAvatar.jpg' },
    ],
  }),
  getters: {
    getUser: (state) => state.user,
    isUser: (state) => state.isUserAuthenticated,
    isLoggedUserBlocked: (state) => state.user.isBlocked,
    isLoggedUserAdmin: (state) => state.user.isAdmin,
    getUserArray: (state) => state.users
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
      const newUser = {id: id, email, username, password, isAdmin: false, isBlocked: false, avatar: '../src/assets/avatar/defaultAvatar.jpg'};
      this.users.push(newUser);

      this.login(username, password);
    },
    logout() {
      this.isUserAuthenticated = false;
      this.user = null;
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