<template>
    <side-bar></side-bar>
    <div class="centered-title-admin">
            Gerir contas
    </div>
    <div class="centered-search-admin">
        <v-col>
            <v-text-field
                        v-model="filterName"
                        :loading="loading"
                        density="compact"
                        variant="solo"
                        label="Procurar utilizadores"
                        append-inner-icon="mdi-magnify"
                        single-line
                        hide-details
            ></v-text-field>
        </v-col>
    </div>
    <div class="centered-table-admin">
        <table>
            <thead>
                <tr>
                    <th>Nome de utilizador</th>
                    <th>Estado da conta</th>
                    <th>Bloquear conta</th>
                    <th>Apagar conta</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in filteredUserSearch" :key="user.id">
                    <td>{{ user.username }}</td>
                    <td>
                        {{ user.isBlocked ? 'Bloqueado' : 'Ativo' }}
                    </td>
                    <td>
                        <button class="blockAccountButton" @click="toggleAccountStatus(user)">
                            {{ user.isBlocked ? 'Desbloquear' : 'Bloquear' }}
                        </button>
                    </td>
                    <td>
                        <button class="blockAccountButton" @click="prepareDelete(user)">
                            Apagar
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <v-dialog v-model="dialogDelete" max-width="400">
            <v-card class="cardDelete">
                <button class="closeButtonDelete">
                        <v-icon icon="mdi-close" @click="cancelDelete"></v-icon>
                    </button>
                <div class="titleDelete">
                    <div class="DeleteTitleDelete"></div>
                    <v-card-title class="deleteText">Pretende mesmo apagar a conta '{{ userToDelete ? userToDelete.username : '' }}'?</v-card-title>
                </div>
                <v-card-actions>
                    <div class="deleteButtons"></div>
                    <button @click="deleteAccount" class="yesButtonDelete">Sim</button>
                    <button @click="cancelDelete" class="yesButtonDelete">Não</button>
                </v-card-actions>
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
            dialogDelete: false,
            userToDelete: null,
            filterName: "",
        }
    },
    computed: {
        users() {
            return this.userStore.getUserArray 
        },
        filteredUsers() {
            const loggedUser = this.userStore.getUser; 
            return this.users.filter(user => user.id !== loggedUser.id);
        },
        filteredUserSearch() {
            return this.filteredUsers.filter(user => user.username.toLowerCase().startsWith(this.filterName.toLowerCase()))
        }
    },
    methods: {
        toggleAccountStatus(user) {
            this.userStore.block(user);
        },
        prepareDelete(user) {
            this.userToDelete = user;
            this.dialogDelete = true;
        },
        deleteAccount() {
            if (this.userToDelete) {
                console.log(this.userToDelete.id);
                this.userStore.deleteAccount(this.userToDelete.id);
                this.dialogDelete = false;
                this.userToDelete = null; 
            }
        },
        cancelDelete() {
            this.dialogDelete = false;
            this.userToDelete = null; 
        },
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
.centered-title-admin {
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
.centered-table-admin {
    display: flex;
    justify-content: center;
    color: #ECECE4;
    margin-top: 3em;  
    margin-right: 12%;
  
}
.centered-search-admin {
    margin-top: 2em;  
    margin-right: 45%;
    margin-left: 35%;
}
table {
    width: 60%; 
    color: #ECECE4; 
    border-collapse: collapse; 
}

tr:nth-child(even) {
    background-color: #183D3D; 
}

tr:nth-child(odd) {
    background-color: #040D12; 
}

th {
    background-color: #183D3D;    
    color: #DEB627;
    text-align: center;
    font-family: 'IBM Plex Mono';
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    padding: 1rem; 
}
td {
    text-align: center;
    font-family: 'IBM Plex Sans';
    font-size: 1rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    padding: 0.5rem; /* Add padding to create spacing between rows */

}
.blockAccountButton {
    border: 2px solid #ECECE4;
    border-radius: 10px;
    padding: 1rem;
    color: #ECECE4
}
.blockAccountButton:hover {
    border: 2px solid #93B1A6;
    color: #93B1A6
}

.cardDelete {
  background-color: #00191F !important;
  border-radius: 5% !important; 
  height: 40vh;
  font-family: 'IBM Plex Sans';
}
.closeButtonDelete {
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
.titleDelete {
  display: flex;
  justify-content: center;
  color: #BC9A22 !important; 
  padding-top: 5em !important;
}
.deleteText {
  font-size: 1.5em !important;
  font-weight: bold;
  color: #ECECE4;
  width: fit-content;
  text-align: center;
  white-space: normal;
}
.yesButtonDelete {
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
.yesButtonDelete:hover {
    background-color: #B4B390;
}
</style>