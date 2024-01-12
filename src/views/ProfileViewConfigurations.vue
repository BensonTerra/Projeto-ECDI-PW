<template>
    <div>
      <side-bar></side-bar>
      <div class="centered-title-configurations">Configurações</div>
      <div class="centered-content-configurations">
        <div class="avatar-container">
          <v-avatar :image="loggedUser.avatar" size="120"></v-avatar>
          <v-icon @click="openChangeAvatarDialog">
            <img class="changeAvatar" src="../assets/icons/changeAvatar.png" alt="Mudar avatar">
          </v-icon>
        </div>
        <h5 class="username">{{ loggedUser.username }}</h5>
        <v-icon @click="openChangeNameDialog">
            <img class="changeName" src="../assets/icons/changeName.png" alt="Mudar nome">
          </v-icon>
        </div>
        <div class="personalInformation">Informações pessoais</div>
        <div class="personalInformationCard">
            <div class="emailInput">
                <p class="emailLabel">Email:</p>
                <v-text-field
                    :label="loggedUser.email"
                    readonly
                     disabled
                >
                </v-text-field>  
                <v-btn class="emailButton" @click="openChangeEmailDialog">Editar</v-btn>
            </div>
            <div class="passwordInput">
                <p class="passwordLabel">Password:</p>
                <v-text-field
                    :label=passwordLabel
                    readonly
                     disabled
                >
                </v-text-field>  
                <v-btn class="passwordButton" @click="openChangePasswordDialog">Editar</v-btn>
            </div>
        </div>

    </div>
    <!--Change avatar dialog-->
    <v-dialog v-model="changeAvatarDialog" max-width="600">
      <v-card class="cardAvatar">
        <div class="titleAvatar">
          <button class="closeButtonAvatar" @click="closeChangeAvatarDialog">
            <v-icon icon="mdi-close"></v-icon>
          </button>
        </div>
        <v-card-text>
          <v-sheet width="300" class="mx-auto">
            <v-form @submit.prevent="changeAvatar" class="formAvatar">
            <img v-if="previewURL" :src="previewURL" alt="Preview do Avatar" class="image-preview">
            <v-file-input 
                v-model="file" 
                label="Escolher ficheiro" 
                accept="image/*" 
                @input="handleFileInput"
                >
            </v-file-input>
            <v-btn type="submit" block class="updateAvatar">Atualizar</v-btn>
            </v-form>
          </v-sheet>
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-snackbar v-model="snackbar" :timeout="timeout" :color="snackbarColor">
        {{ snackbarMessage }}
    </v-snackbar>
    <!--Change name-->
    <v-dialog v-model="changeNameDialog" max-width="600">
      <v-card class="cardName">
        <div class="titleName">
          <button class="closeButtonName" @click="closeChangeNameDialog">
            <v-icon icon="mdi-close"></v-icon>
          </button>
        </div>
        <v-card-text>
          <v-sheet width="300" class="mx-auto">
            <v-form @submit.prevent="changeName" class="formName">
            <v-text-field v-model="newUsername" label="Novo nome de utilizador"></v-text-field>
            <v-btn type="submit" block class="updateName">Atualizar</v-btn>
            </v-form>
          </v-sheet>
        </v-card-text>
      </v-card>
    </v-dialog>
    <!--Change email-->
    <v-dialog v-model="changeEmailDialog" max-width="600">
      <v-card class="cardName">
        <div class="titleName">
          <button class="closeButtonName" @click="closeChangeEmailDialog">
            <v-icon icon="mdi-close"></v-icon>
          </button>
        </div>
        <v-card-text>
          <v-sheet width="300" class="mx-auto">
            <v-form @submit.prevent="changeEmail" class="formName">
            <v-text-field v-model="newEmail" label="Novo email"></v-text-field>
            <v-btn type="submit" block class="updateName">Atualizar</v-btn>
            </v-form>
          </v-sheet>
        </v-card-text>
      </v-card>
    </v-dialog>
    <!--Change password (STEP 1)-->
    <v-dialog v-model="changePassword1Dialog" max-width="600">
      <v-card class="cardName">
        <div class="titleName">
          <button class="closeButtonName" @click="closeChangePassword1Dialog">
            <v-icon icon="mdi-close"></v-icon>
          </button>
        </div>
        <v-card-text>
          <v-sheet width="300" class="mx-auto">
            <v-form @submit.prevent="handlePasswordVerification" class="formName">
            <v-text-field v-model="oldPassword" label="Insira a palavra-passe antiga"></v-text-field>
            <v-btn type="submit" block class="updateName">Verificar</v-btn>
            </v-form>
          </v-sheet>
        </v-card-text>
      </v-card>
    </v-dialog>
    <!--Change password (STEP 2)-->
    <v-dialog v-model="changePassword2Dialog" max-width="600">
      <v-card class="cardName">
        <div class="titleName">
          <button class="closeButtonName" @click="closeChangePassword2Dialog">
            <v-icon icon="mdi-close"></v-icon>
          </button>
        </div>
        <v-card-text>
          <v-sheet width="300" class="mx-auto">
            <v-form @submit.prevent="updatePassword" class="formName">
            <v-text-field v-model="newPassword" label="Insira a nova palavra-passe"></v-text-field>
            <v-text-field v-model="confirmPassword" label="Repita a nova palavra-passe"></v-text-field>
            <v-btn type="submit" block class="updateName">Atualizar</v-btn>
            </v-form>
          </v-sheet>
        </v-card-text>
      </v-card>
    </v-dialog>
  </template>

<script>
import SideBar from '@/components/SideBar.vue';
import { useUserStore } from '@/stores/user';
export default {
    components: {
        SideBar,
    },
    data() {
        return {
            userStore: useUserStore(),
            changeAvatarDialog: false,
            changeNameDialog: false,
            changeEmailDialog: false,
            changePassword1Dialog: false,
            changePassword2Dialog: false,
            file: null, 
            previewImage: null,
            fileName: null,
            snackbar: false,
            timeout: 3000, 
            snackbarMessage: '', 
            snackbarColor: '', 
            newUsername: '',
            newEmail: '',
            oldPassword: '',
            newPassword: '',
            confirmPassword: '',
        }
    },
    computed: {
        loggedUser() {
            return this.userStore.getUser
        },
        previewURL() {
            const url = this.previewImage ? URL.createObjectURL(this.previewImage) : null;
            return url;
        },
        passwordLabel() {
            // Generate a string with the same number of asterisks as the length of the password
            return '*'.repeat(this.loggedUser.password.length);
        },
    },
    methods: {
        // Change avatar logic
        openChangeAvatarDialog() {
            this.changeAvatarDialog = true;
        },
        closeChangeAvatarDialog() {
            this.changeAvatarDialog = false;
        },
        changeAvatar() {
            if (!this.file) {
                this.showSnackbar('Escolha uma foto antes de atualizar.', 'error');
                return;
            }
            this.userStore.changeAvatar(`../src/assets/avatar/${this.fileName}`);
            this.changeAvatarDialog = false;
            this.showSnackbar('Foto alterada com sucesso!', 'success');
        },
        handleFileInput(event) {
            if (event.target.files.length > 0) {
                const file = event.target.files[0];
                this.fileName = file.name;

                const blob = new Blob([file], { type: file.type });
                this.previewImage = blob;
            }
        },
        // Change name logic
        openChangeNameDialog() {
            this.changeNameDialog = true;
        },
        closeChangeNameDialog() {
            this.changeNameDialog = false;
        },
        changeName() {
            try {
                this.userStore.changeUsername(this.newUsername);
                this.changeNameDialog = false;
                this.showSnackbar('Nome de utilizador alterado com sucesso!', 'success');
            } catch (error) {
                this.showSnackbar(error.message, 'error');
            }
        },
        // Informative messages
        showSnackbar(message, color) {
            this.snackbarMessage = message;
            this.snackbarColor = color; 
            this.snackbar = true;
        },
        // Change email logic
        openChangeEmailDialog() {
            this.changeEmailDialog = true;
        },
        closeChangeEmailDialog() {
            this.changeEmailDialog = false;
        },
        changeEmail() {
            try {
                this.userStore.changeEmail(this.newEmail);
                this.changeEmailDialog = false;
                this.showSnackbar('Email alterado com sucesso!', 'success');
            } catch (error) {
                this.showSnackbar(error.message, 'error');
            }
        },
        // Change email logic
        openChangePasswordDialog() {
            this.changePassword1Dialog = true;
        },
        closeChangePasswordDialog() {
            this.changePassword1Dialog = false;
        },
        closeChangePassword2Dialog() {
            this.changePassword2Dialog = false;
        },
        verifyPassword() {
            try {
                const result = this.userStore.verifyPassword(this.oldPassword);
                return result;
            } catch (error) {
                throw error;
            }
        },
        handlePasswordVerification() {
            try {
                const verificationResult = this.verifyPassword();
                if (verificationResult === "correct") {
                    this.showSnackbar('As palavras-passes coincidem', 'success');
                    this.changePassword1Dialog = false;
                    this.changePassword2Dialog = true;
                }
            } catch (error) {
                this.showSnackbar(error.message, 'error');
            }
        },
        updatePassword() {
            try {
                this.userStore.changePassword(this.newPassword, this.confirmPassword);
                this.changePassword2Dialog = false;
                this.showSnackbar('Palavra-passe alterada com sucesso', 'success');
            } catch (error) {
                this.showSnackbar(error.message, 'error');
            }
        }

    },
}
</script>

<style scoped>
@font-face {
    font-family: 'IBM Plex Sans';
    src: url(../assets/fonts/IBMPlexSans-SemiBold.ttf);
}
@font-face {
    font-family: 'IBM Plex Mono';
    src: url(../assets/fonts/IBMPlexMono-Bold.ttf);
}
.centered-title-configurations {
    display: flex;
    justify-content: center;
    color: #ECECE4;
    font-family: 'IBM Plex Mono';
    margin-top: 1em;
    font-size: 3rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-right: 12%;
}
.centered-content-configurations {
    display: flex;
    justify-content: center;
    color: #ECECE4;
    font-family: 'IBM Plex Mono';
    margin-top: 1em;
    font-size: 3rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-right: 40%;
}
.username {
    margin-left: 5%;
    margin-top: 2.5%;
    font-family: 'IBM Plex Sans';
    font-size: 2rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-transform: capitalize;
}
.avatar-container {
  display: flex;
  flex-direction: column; 
  align-items: center; 
}

.personalInformation {
    color: #ECECE4;
    font-family: 'IBM Plex Mono';
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-top: -1.8em;
    margin-left: 9em;
}
.personalInformationCard {
    width: 32.4375rem;
    height: 16rem;
    border-radius: 1.5625rem;
    background-color: #183D3D;
    margin-left: 18em;
    margin-top: 1em;
}

.emailInput {
    padding-top: 1em;
    padding-left: 2em;
    width: 27.18369rem;
    height: 3.375rem;
}

.emailLabel {
    padding-bottom: 1em;
    color:  #93B1A6;
    font-family: 'IBM Plex Sans';
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}

.emailButton {
    width: 7.3125rem;
    height: 4.1em !important;
    background-color: #00191F;
    margin-top: -9.1em;
    margin-left: 20.5em;
}

.passwordInput {
    padding-top: 5em;
    padding-left: 2em;
    width: 27.18369rem;
    height: 3.375rem;
}

.passwordLabel {
    padding-bottom: 1em;
    color:  #93B1A6;
    font-family: 'IBM Plex Sans';
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}

.passwordButton {
    width: 7.3125rem;
    height: 4.1em !important;
    background-color: #00191F;
    margin-top: -9.1em;
    margin-left: 20.5em;
}


/* Change avatar css */
.changeAvatar {
    margin-bottom: 1em;
    margin-left: 1.5em;
    cursor: pointer;
}


.closeButtonAvatar {
  z-index: 999;
  margin: 0 2% 0 0;
  margin-top: -2em;
  font-size: 1.5em;
  color: #BC9A22;
}
.titleAvatar {
    position: absolute;
    right: 4em;
    top: 4em;
}

.cardAvatar {
  background-color: #00191F !important;
  border-radius: 5% !important; 
  height: 500px;
}
.formAvatar {
  background-color: #00191F !important;
}
.image-preview {
  max-width: 100%;
  height: 10em;
  margin-bottom: 1em;
  margin-left: 5em;
  border-radius: 50%;
}

.updateAvatar {
  background-color: #00191F !important;
  color: #BC9A22;
  border-radius: 5% !important; 
  border: solid 1px #BC9A22 !important;
  max-width: 20px !important;
  width: 100% !important;
  margin-top: 1em;
}

/* Change name css */
.changeName {
    margin-top: 0.2em;
    cursor: pointer;
}
.closeButtonName {
  z-index: 999;
  margin: 0 2% 0 0;
  margin-top: -2em;
  font-size: 1.5em;
  color: #BC9A22;
}
.titleName {
    position: absolute;
    right: 2em;
    top: 2em;
}
.cardName {
  background-color: #00191F !important;
  border-radius: 5% !important; 
  height: 20em;
}
.formName {
  background-color: #00191F !important;
}
.updateName {
  background-color: #00191F !important;
  color: #BC9A22;
  border-radius: 5% !important; 
  border: solid 1px #BC9A22 !important;
  max-width: 20px !important;
  width: 100% !important;
  margin-top: 1em;
}


.v-card-text {
    margin-top: 5em;
}

.v-snack {
  bottom: 0;
  right: 0;
  margin: 1em;
}


</style>