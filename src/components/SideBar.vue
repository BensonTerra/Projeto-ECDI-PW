<template>
      <div class="blue-sidebar">
        <v-avatar :image=getLoggedUser.avatar size="60"></v-avatar>
        <span class="username">{{ getLoggedUser.username }}</span>
        <div class="buttonSpacing"></div>
        <button class="sideBarButtons">Favoritos</button>
        <button class="sideBarButtons">Configurações</button>
        <button class="sideBarButtons" v-if="isAdmin">Admin - Contas</button>
        <button class="sideBarButtons" @click="confirmLogout">Sair</button>
      </div>
      <v-dialog v-model="dialogLogout" max-width="400">
        <v-card class="cardLogout">
            <button class="closeButtonLogout">
                    <v-icon icon="mdi-close" @click="cancelLogout"></v-icon>
                </button>
            <div class="titleLogout">
                <div class="logoutTitleLogout"></div>
                <v-card-title class="logoutText">Pretende mesmo sair?</v-card-title>
            </div>
            <v-card-actions>
                <div class="logoutButtons"></div>
                <button @click="performLogout" class="yesButtonLogout">Sim</button>
                <button @click="cancelLogout" class="yesButtonLogout">Não</button>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>
  
<script>
import { useUserStore } from '@/stores/user';
export default {
    data() {
        return {
            userStore: useUserStore(),
            dialogLogout: false,
        }
    },
    computed: {
        getLoggedUser() {
            return this.userStore.getUser 
        },
        isAdmin() {
            return this.userStore.isLoggedUserAdmin
        },
    },
    methods: {
        confirmLogout() {
            this.dialogLogout = true;
        },
        cancelLogout() {
            this.dialogLogout = false;
        },
        performLogout() {
            this.userStore.logout();
            this.$router.push({ name: "landingPage" });
            this.dialogLogout = false;
        },
    },
}
</script>
  
<style scoped> 
.blue-sidebar {
    max-width: 15vw;
    width: 100%;
    background-color: #00191F;
    color: #ECECE4;
    padding: 20px;
    height: 100vh; 
    box-sizing: border-box; 
    position: fixed; 
    top: 0; 
    right: 0; 
}
.username {
  font-size: 16px; 
  font-weight: bold; 
  margin-left: 1em;
}
.sideBarButtons {
  display: block;
  margin-top: 10px;
  padding: 8px;
  width: 100%;
  background-color: #ECECE4;
  color: #00191F;
  border: none;
  cursor: pointer;
  border-radius: 10px;
  font-size: 18px;
  font-weight: bold;
  margin-top: 2em; 

}

.sideBarButtons:hover {
  background-color: #B4B390;
}
.sideBarButtons:focus {
    background-color: #DEB627;
}
.buttonSpacing{
    margin-top: 8em;
}
.cardLogout {
  background-color: #00191F !important;
  border-radius: 5% !important; 
  height: 40vh;
}
.closeButtonLogout {
  z-index: 999;
  margin: 2% 2% 0 0;
  font-size: 1.5em;
  width: 50px;
  position: fixed;
  right: 0;
  background-color: transparent;
  color: #BC9A22;
  font-weight: bold;
}
.titleLogout {
  display: flex;
  justify-content: center;
  color: #BC9A22 !important; 
  padding-top: 5em !important;
  
}
.logoutTitle {
  max-width: 34.5px;
  width: 100%;
}
.logoutText {
  font-size: 1.5em !important;
  font-weight: bold;
  color: #ECECE4;
}
.yesButtonLogout {
  padding: 8px;
  max-width: 5em;
  width: 100%;
  background-color: #ECECE4;
  color: #00191F;
  border: none;
  cursor: pointer;
  border-radius: 10px;
  font-size: 18px;
  font-weight: bold;
  margin-left: 4em;
  margin-top: 2em;
}
.yesButtonLogout:hover {
    background-color: #B4B390;
}

</style>
  