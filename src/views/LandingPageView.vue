<template>


<div class="navbar">
    <router-link to="/home">Entrar</router-link>
    <a href="#"  @click="scrollSobreNos">Sobre nós</a>
  </div>

  <div class="highlight">
    <img src="../assets/background.png">
    <div class="content">
      <h1>Consulte nossos voos em<br> tempo real.</h1>
      <p> Acompanhe os voos de sua familia e descubra todas as <br>suas informações na nossa companhia! </p>
       <router-link to="/home" class="boto-entrar">
      <div class="text-wrapper">Entrar</div>
    </router-link>
    </div>
  </div>

  <div class="arrowGoDown" v-show="showArrow" @click="arrowGoDown">
  <img src="../assets/arrow.png">
  </div>

  <div id="scrollTarget">
  <div class="Filter">
    <img src="../assets/filtrarFoto.png">
    <div class="filterContent">
      <h1>Filtre pelas suas <br> preferências.</h1>
      <p>Escolha o aeroporto e o destino para <br> achar o seu voo rapidamente!</p>
    </div>
  </div>
</div>

  <div class="BrazilMap">
    <img src="..\assets\backgroundPersonalize.png">
    <div class="BrazilMapContent">
      <h1>Personalize seu mapa <br> com suas viagens.</h1>
      <p>Explore a opção de marcar no mapa <br> e crie um Brasil só seu <br> com cada estado que já visitou!</p>
    </div>
  </div>

  <div class='curiosities'>
   <img src="..\assets\curiosidadesFoto.png" class="curiositiesImage">
   <div class="curiositiesContent">
    <h1>Descubra novas curiosidades <br>sobre aviação.</h1>
    <p>Aprenda curiosidades divertidas sobre aviação e compartilhe <br>com os seus colegas os nossos fatos divertidos!</p>
   </div>
  </div>

  <div class="MeetUs">
  <img src="../assets/sobrenósBackground.png">
  <div class="MeetUsContent">
    <h1>Agora que sabe um pouco sobre o que <br> temos para si, venha conhecer-nos!</h1>
    <p>Embarque nesta viagem connosco e conheça um pouco sobre nós e o projeto!</p>
     <h2 id="sobreNos">Sobre nós</h2>
  </div>

     
  <div class="MeetUsContentDark">
    <img src="../assets/Nós.png">
    <div class="MeetUsDetails">
  
      <p>Somos uma nova empresa dedicada <br> a tornar sua experiência mais pessoal.
        <br>Acompanhe os voos de seus entes queridos, <br>divirta-se com curiosidades e explore nosso <br>mapa interativo.
       Esperamos que aproveitem!
      </p>
     
    </div>
  </div>

  <router-link to="/home" class="boto-entrar-on-image">
      <div class="text-wrapper">Entrar</div>
    </router-link>

    <div class="arrowGoUp"  @click="arrowGoUp" >
    <img src="../assets/arrowUp.png">
    </div>

</div>


</template>

<script>
export default {
    data() {
      return {
        showArrow: true,
    
      };
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },
    beforeUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
      handleScroll() {
        const currentScrollPosition = window.scrollY;
        if (currentScrollPosition == 0) {
          this.showArrow = true; // Show arrow only when at the top
        } else {
          this.showArrow = false;
        }
      },
      arrowGoDown() {
        const filterSection = document.querySelector("#scrollTarget");
        if (filterSection) {
          filterSection.scrollIntoView({ behavior: "smooth" });
        }
      },
      scrollSobreNos() {
      const sobreNosSection = document.getElementById('sobreNos');
      if (sobreNosSection) {
        sobreNosSection.scrollIntoView({ behavior: 'smooth' });
      }
    },

    arrowGoUp() {
        const highlightSection = document.querySelector(".navbar");
        if (highlightSection) {
          highlightSection.scrollIntoView({ behavior: "smooth" });
        }
      },
    }
  }
</script>

<style >

@font-face {
      font-family: 'IBM Plex Sans';
      src: url(../assets/fonts/IBMPlexSans-SemiBold.ttf);
  }

body {
  margin: 0;
  font-family: 'IBM Plex Sans';
  background-color: #ECECE4 !important; /* fundo da página */
}
#app {
  padding: 0 !important;
}

.navbar {
  position: absolute;
  top: 0;
  right: 0;
  padding: 20px;
  z-index: 2; 
}

.navbar a {
  color: #00191F !important; /* cor do texto */
  text-decoration: none!important;
  margin-left: 1rem !important;
}

.navbar a:hover {
  color:#215C5C !important;
  text-decoration: underline !important;
  text-decoration-color: #215C5C !important;
}

.highlight {
  position: relative;
}

.highlight img {
  width: 100%;
  max-width: 100%;
  max-height: 100%;
  z-index: -1;
}

.content {
  position: absolute;
  color:#2E2E2E;
  top: 30%;
  left:4.5%;
  text-align: left;
  z-index: 1;
}


.content h1 {
  font-size: 2.5rem; 
  line-height: 1.2; /* Espaçamento entre as linhas do título */
  margin-bottom: 2rem; /* Espaçamento inferior */
}

.content p {
  font-size: 1.2rem; /* Tamanho do parágrafo */
  line-height: 1.6; /* Espaçamento entre as linhas do parágrafo */
  margin-bottom: 2rem; /* Espaçamento inferior */
}

.boto-entrar {
  position: absolute;
  width: 6rem;
  height: 3rem;
  background-color: #183D3D;
  border-radius: 2.5rem;
  overflow: hidden;
}

.text-wrapper {
  position: absolute;
  width: 111px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #ECECE4;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
}

.boto-entrar:hover {
  background-color: #215C5C;
}

.arrowGoDown {
  position: fixed;
  bottom: 0.6rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
}

.arrowGoDown img {
  cursor: pointer;
  display: block;
}

.arrowGoDown:hover img {
  transform: translateY(-5px); /* Adjust the value to change the amount of movement */
  transition: transform 0.3s ease; /* Smooth transition for the animation */
}

/* Filter Section */
.Filter {
  display: flex;
  align-items: center;
  margin-top: 10rem;
  margin-left: 12rem;
}

.filterContent {
  color: #2E2E2E;
  margin-left: 10rem;
  margin-bottom: 20rem;
}

.filterContent h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.filterContent p {
  font-size: 1.2rem;
}

/* Brazil Map Section */
.BrazilMap {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 80vh;
  margin-top: 10rem;
}

.BrazilMap img {
  max-width: 75%;
  z-index: -1;
}

.BrazilMapContent {
  position: absolute;
  color: #2E2E2E;
  left: 20%;
  text-align: left;
  z-index: 1;
  margin-bottom: 15rem;
}

.BrazilMapContent h1 {
  font-size: 2.5rem;
  margin-bottom: 8rem;
}

.BrazilMapContent p {
  font-size: 1.2rem;
  line-height: 1.4;
}

/* Curiosities Section */
.curiosities {
  display: flex;
  align-items: center;
  margin-top: 10rem;
  margin-left: 12rem;
}

.curiositiesImage {
  max-width: 300px;
  margin-right: 4rem;
}

.curiositiesContent {
  color: #2E2E2E;
  margin-bottom: 10rem;
}

.curiositiesContent h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.curiositiesContent p {
  font-size: 1.2rem;
  line-height: 1.6;
}

.MeetUs {
  position: relative;
  margin-top: 10rem;
}

.MeetUs img {
  width: 100%;
  display: block;
}

.MeetUsContent {
  position: absolute;
  top: 10%;
  left: 15%;
  color: #2E2E2E;
  text-align: left;
  z-index: 1;
}

.MeetUsContent h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  line-height: 1.4;
}

.MeetUsContent p {
  font-size: 1.2rem;
  line-height: 1.6;
}

.MeetUsContent h2 {
  position: absolute;
  color: #D2AD28;
  left: 60%;
  font-size: 2.5rem;
  margin-top: 30rem;
  line-height: 1.4;
}

.MeetUsContentDark {
  display: flex;
  align-items: flex-start; /* Align items at the start */
  position: absolute;
  top: 65%; /* Adjust this value to position the section */
  left: 20%; /* Adjust left position as needed */
  z-index: 2; /* Ensure it's above the MeetUsContent */
}

.MeetUsContentDark img {
  max-width: 30rem; /* Adjust image size */
  margin-right: 2rem; /* Spacing between image and text */
}

.MeetUsDetails {
  color: #ECECE4; /* Yellow text color */
  display: flex;
  flex-direction: column; /* Align content in a column */
  width: 50%; /* Set width for the text content */
}

.MeetUsDetails h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  line-height: 1.4;
}

.MeetUsDetails p {
  font-size: 1.2rem; /* Tamanho do parágrafo */
  margin-top: 2.5rem;
  line-height: 1.6; 
}

.boto-entrar-on-image {
  position: absolute;
  width: 6rem;
  height: 3rem;
  background-color: #183D3D;
  border-radius: 2.5rem;
  overflow: hidden;
  z-index: 2; /* Ensure it's above the image */
  bottom: 8rem; /* Adjust the position from the bottom as needed */
  left: 50%; /* Adjust left position */
  transform: translateX(-50%);
}

.boto-entrar-on-image .text-wrapper {
  position: absolute;
  width: 111px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #ECECE4;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
}

.boto-entrar-on-image:hover {
  background-color: #215C5C;
}


/* Add or update the styles for the arrowGoUp class */
.arrowGoUp {
  position: absolute;
  bottom: 3rem;
  right: 3rem;
  z-index: 3;
}

.arrowGoUp img {
  cursor: pointer;
  display: block;
}

.arrowGoUp:hover img {
  transform: translateY(-5px); 
  transition: transform 0.3s ease; 
}


</style>