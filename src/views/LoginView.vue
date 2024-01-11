<template>  
    <v-dialog v-model="loginDialog" @click:outside="closeDialogAndGoBack" max-width="600">
      <v-card class="card">
        <div class="title">
          <div class="loginTitle"></div>
          <v-card-title class="loginText">Login</v-card-title>

          <button class="closeButton">
              <v-icon icon="mdi-close" @click="closeLoginDialog"></v-icon>
          </button>
        </div>
        
        <v-card-text>
          <v-sheet width="300" class="mx-auto">
            <v-form @submit.prevent="login" class="form">
              <v-text-field v-model="username" label="Nome de utilizador"></v-text-field>
              <v-text-field v-model="password" type="password" label="Palavra-passe"></v-text-field>
              <v-btn type="submit" block class="loginButton">Entrar</v-btn>
            </v-form>
          </v-sheet>
          <div class="text-center mt-4">
            <v-text @click="openRegisterDialog" class="text-decoration-underline">Ainda não tem uma conta?</v-text>
          </div>
        </v-card-text>
        <v-alert v-if="loginErrorMessage" type="error" dismissible>
          {{ loginErrorMessage }}
        </v-alert>
        <v-alert v-if="loginSuccessMessage" type="success" dismissible>
          {{ loginSuccessMessage }}
        </v-alert>
      </v-card>
    </v-dialog>

    <v-dialog v-model="registerDialog" @click:outside="closeDialogAndGoBack" max-width="600">
      <v-card class="card">
        <div class="title">
          <div class="loginTitle"></div>
          <v-card-title class="loginText">Registo</v-card-title>
          <button class="closeButton">
                <v-icon icon="mdi-close" @click="closeRegisterDialog"></v-icon>
          </button>
        </div>


        <v-card-text>
          <v-sheet width="300" class="mx-auto">
            <v-form @submit.prevent="register" class="form">
              <v-text-field v-model="email" label="Email"></v-text-field>
              <v-text-field v-model="username" label="Nome de utilizador"></v-text-field>
              <v-text-field v-model="password" type="password" label="Palavra-passe"></v-text-field>
              <v-text-field v-model="confirmPassword" type="password" label="Confirmar a palavra-passe"></v-text-field>
              <v-btn type="submit" block class="loginButton">Criar conta</v-btn>
            </v-form>
          </v-sheet>
          <div class="text-center mt-4">
            <v-text @click="openLoginDialog" class="text-decoration-underline">Já tem uma conta?</v-text>
          </div>
        </v-card-text>
        <v-alert v-if="registerErrorMessage" type="error" dismissible>
          {{ registerErrorMessage }}
        </v-alert>
        <v-alert v-if="registerSuccessMessage" type="success" dismissible>
          {{ registerSuccessMessage }}
        </v-alert>
      </v-card>
    </v-dialog>
</template>

<script>
import { useUserStore } from "@/stores/user";
export default {
    data() {
      return {
        userStore: useUserStore(),
        username: "",
        password: "",
        confirmPassword: "",
        email: "",
        loginDialog: false,
        registerDialog: false,
        loginErrorMessage: "",
        loginSuccessMessage: "",
        registerErrorMessage: "",
        registerSuccessMessage: "",
      };
    },
    created(){
      this.openLoginDialog();
    },
    methods: {
      closeDialogAndGoBack() {
      this.loginDialog = false;
      this.registerDialog = false;
      this.$router.go(-1); // Go back to the previous page
      },
      openLoginDialog() {
        if (!this.isUserLoggedIn) {
          this.registerDialog = false;
          this.loginDialog = true;
        } else {
          this.$router.push({ name: "home" });
        }
        
      },
      closeLoginDialog() {
        this.loginDialog = false;
      },
      openRegisterDialog() {
        this.loginDialog = false;
        this.registerDialog = true;
      },
      closeRegisterDialog() {
        this.registerDialog = false;
      },
      login() {
        try {
          this.loggingIn = true; 
          this.userStore.login(this.username, this.password)
          
          this.loginSuccessMessage = "Login bem-sucedido!";
          setTimeout(() => {
            this.loginSuccessMessage = "A entrar na sua conta...";
          }, 2000);
          setTimeout(() => {
            if (this.isLoggedUserBlock) {
              this.$router.push({name: "pageblocked"});
            } else {
              this.$router.push({name: "profile"});
            }
          }, 4000);
        } catch (error) {
          this.loginErrorMessage = `${error.message}`;
        } 
      },
      register() {
        try {
          this.userStore.register(this.email, this.username, this.password, this.confirmPassword)
          this.registerSuccessMessage = "Registo bem-sucedido!";
          setTimeout(() => {
            this.registerSuccessMessage = "A entrar na sua conta...";
          }, 2000);
          setTimeout(() => {
            this.$router.push({name: "profile"});
          }, 4000);
        } catch (error) {
          this.registerErrorMessage = `Erro: ${error.message}`;
        } 
      }
    },
    computed: {
      isUserLoggedIn() {
        return this.userStore.isUser;
      },
      isLoggedUserBlock() {
        return this.userStore.isLoggedUserBlocked;
      }
    },
  };

</script>

<style>
.text-decoration-underline {
  cursor: pointer;
  color: rgba(236, 236, 228, 0.5);
}
.closeButton {
  z-index: 999;
  margin: 0 2% 0 0;
  margin-top: -2em;
  font-size: 1.5em;
}
.title {
  display: flex;
  justify-content: space-between;
  color: #BC9A22 !important; 
  padding-top: 1em !important;
  
}
.loginTitle {
  max-width: 34.5px;
  width: 100%;
}
.card {
  background-color: #00191F !important;
  border-radius: 5% !important; 
}
.form {
  background-color: #00191F !important;
}
.loginText {
  font-size: 3em !important;
  padding-bottom: 1em !important;
}
.loginButton {
  background-color: #00191F !important;
  color: #BC9A22;
  border-radius: 5% !important; 
  border: solid 1px #BC9A22 !important;
  max-width: 20px !important;
  width: 100% !important;
}
.v-btn__content {
  color: #BC9A22;
  font-size: 1.1em;
  font-weight: bold;
}
.v-input__control {
  background-color: rgba(143, 143, 143, 0.7);
  color: rgb(0, 0, 0);
  border-radius: 2%;
}

</style>