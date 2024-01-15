<template>
    <div class="cards-container">
        <!-- Airport Card -->
        <div class="centered-airport-favorites" @click="redirectTo('airports')">
            <div class="aiport-title">Aeroportos</div>
        </div>
    
        <!-- Company Card -->
        <div class="centered-company-card" @click="redirectTo('companies')">
            <div class="company-title">Companhias</div>
        </div>
    </div>
    <!-- Flights Card -->
    <div class="centered-flights-card" @click="redirectTo('flights')">
        <div class="flights-title">Voos</div>
    </div>
  </template>

<script>
export default {
    methods: {
        redirectTo(pathName) {
            this.$router.push({ name: pathName });
        }
    },
}
</script>

<style  scoped>
@font-face {
    font-family: 'IBM Plex Sans';
    src: url(../assets/fonts/IBMPlexSans-SemiBold.ttf);
}
@font-face {
    font-family: 'IBM Plex Mono';
    src: url(../assets/fonts/IBMPlexMono-Bold.ttf);
}
.cards-container {
  display: flex; 
  margin-top: 5em;
}

/* Styles for the Airport Card */
.aiport-title {
    color:  #DEB627;
    font-kerning: none;
    font-family: IBM Plex Mono;
    font-size: 2.9375rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: capitalize;
    z-index: 2;
    position: absolute;
    left: 50%; 
    top: 50%; 
    transform: translate(-50%, -50%); 
}

.centered-airport-favorites {
    position: relative;
    width: 35.4375rem;
    height: 24.8125rem; 
    border-radius: 1.25rem;
    opacity: 0.83;
    background: #00191F;
    margin-left: 20%;
    overflow: hidden; 
    transition: transform 0.3s; 
    z-index: 1;
    cursor: pointer;
    background-image: url('../src/assets/dashboard/airport.png');

}

.centered-airport-favorites::before {
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

.centered-airport-favorites:hover {
    transform: scale(1.05); 
}

/* Styles for the Company Card */
.company-title {
    color: #DEB627;
    font-kerning: none;
    font-family: IBM Plex Mono;
    font-size: 2.9375rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: capitalize;
    z-index: 2;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}
.centered-company-card {
    position: relative;
    width: 27.70206rem;
    height: 24.8125rem;
    border-radius: 1.25rem;
    opacity: 0.83;
    background: #00191F;
    margin-left: 2%; 
    overflow: hidden;
    transition: transform 0.3s;
    z-index: 1;
    cursor: pointer;
    background-image: url('../src/assets/dashboard/company.png'); 
}

.centered-company-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 25, 31, 0.7);
  border-radius: 1.25rem;
  transition: transform 0.3s;
}

.centered-company-card:hover {
  transform: scale(1.05);
}

/* Styles for the Flights Card */
.centered-flights-card {
    position: relative;
    width: 65.625rem;
    height: 10.0625rem;
    border-radius: 1.25rem;
    opacity: 0.83;
    background: #00191F;
    margin-left: 20%; 
    margin-top: 2%; 
    overflow: hidden;
    transition: transform 0.3s;
    z-index: 1;
    cursor: pointer;
    background-image: url('../src/assets/dashboard/flight.png'); 
}

.centered-flights-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 25, 31, 0.7);
  border-radius: 1.25rem;
  transition: transform 0.3s;
}

.centered-flights-card:hover {
  transform: scale(1.05);
}

.flights-title {
    color:  #DEB627;
    font-kerning: none;
    font-family: IBM Plex Mono;
    font-size: 3.2rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: capitalize;
    z-index: 2;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}


</style>