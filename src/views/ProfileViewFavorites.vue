<template>
    <side-bar></side-bar>
    <div class="centered-title-favorites">Favoritos</div>
    <div class="centered-airport-favorites" @click="redirectTo('profileFavoritesAirports')">
        <div class="aiport-title" >Aeroportos</div>
    </div>
    <div class="centered-companies-favorites" @click="redirectTo('profileFavoritesCompanies')">
        <div class="aiport-title" >Companhias</div>
    </div>
</template>

<script>
import SideBar from '@/components/SideBar.vue';
export default {
    components: {
        SideBar,
    },
    methods: {
        redirectTo(pathName) {
            this.$router.push({ name: pathName });
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
.centered-title-favorites {
    display: flex;
    justify-content: center;
    color: #ECECE4;
    font-family: 'IBM Plex Mono';
    margin-top: 1.5em;
    font-size: 3rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-right: 12%;
}

.centered-airport-favorites,
.centered-companies-favorites {
    position: relative;
    width: 58.4375rem;
    height: 15.4375rem;
    border-radius: 1.25rem;
    opacity: 0.83;
    background: #00191F;
    margin-left: 20%;
    margin-top: 1.5em;
    overflow: hidden; 
    transition: transform 0.3s; 
    z-index: 1;
    cursor: pointer;
}

.centered-airport-favorites::before,
.centered-companies-favorites::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 25, 31, 0.7); ;
    border-radius: 1.25rem;
    transition: transform 0.3s; 
}

.centered-airport-favorites:hover,
.centered-companies-favorites:hover {
    transform: scale(1.05); 
}

.centered-airport-favorites {
    margin-top: 0.5em;
    background-image: url('../src/assets/favorites/airport.png');
}

.centered-companies-favorites {
    margin-top: 2em;
    background-image: url('../src/assets/favorites/company.png');
}

.aiport-title {
    color: #ECECE4;
    font-family: IBM Plex Sans;
    font-size: 2.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    z-index: 2;
    position: absolute;
    left: 0.5em;
    top: 0.5em;
}





</style>