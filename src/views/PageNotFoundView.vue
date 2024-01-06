<template>
    <div class='mainBody'>
        
        <div class="background"> </div>
        <div class="Content">

            <div class="TitleContent">
                <h1 class="error"> 404 </h1>
                <h1> Perdido nas Nuvens  <br> <img src="..\assets\divederPageNotFound.png">  </h1>
            </div>
            <div class="TextContent">
                <p>Ops, parece que você perdeu-se nas nuvens. <br> 
                    A página solicitada não foi encontrada. <br>
                    Não se preocupe e volte para a página anterior. <br>
                </p>
            </div>

            <div class="buttonsRouter">
                <router-link to="/" class="goToLanding">
                <div class="text-wrapper">Ir a página inicial</div>
                </router-link>

                <div class="backToLastPage" @click="$router.go(-1)">
                <div class="text-wrapper">Voltar</div>
                </div>

            </div>

        </div>

    </div>

</template>

<script>
    export default {
        
    }
</script>

<style >
.mainBody {
  position: relative;
  min-height: 100vh;
}

/*Background Section */
.background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(../assets/PageNotFoundBackground.png);
  background-size: cover;
  background-position: 50%;
  z-index: -1; 
}


/*Content Section */
.Content {
  position: absolute;
  left: 15rem;
  top:10rem;
}

.TitleContent, .TextContent{
    color:#261E3C;
}

.TextContent {
  padding-bottom: 1.5rem;
  margin-top: -1rem; 
}
.error{
    color: #A6A4A4;
}

.TitleContent h1 img {
  margin-bottom: 2rem; 
}

/*Router Buttons Section */

.goToLanding{
    position: absolute;
    width: 13rem;
    height: 3rem;
    background-color: #268CC5;
    border-radius: 1rem;
    overflow: hidden;
}

.text-wrapper{
  position: absolute;
  width: 20rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #ECECE4;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;

}

.goToLanding:hover ,.backToLastPage:hover{
    background-color: #8AB0C5;
}
 
.backToLastPage{
    position: absolute;
    width: 7rem;
    height: 3rem;
    background-color: #268CC5;
    border-radius: 1rem;
    overflow: hidden;
    left:15rem;
}

</style>