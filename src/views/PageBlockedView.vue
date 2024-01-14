<template>
    <div class='mainBodyBlocked'>
        
        <div class="backgroundBlocked"> </div>
        <div class="ContentBlocked">

            <div class="TitleContentBlocked">
                <img class="iconBlocked" src="../assets/pageBlocked/blocked.png">
                <h1> Check-In Negado   <br>   </h1>
                <img class='dividerBlocked' src="../assets/pageBlocked/dividerPageBlocked.png">
            </div>
            <div class="TextContentBlocked">
                <p>
                    Ops, parece que você não vai poder embarcar. <br>
                    A sua conta foi bloqueada por um administrador.

                </p>
            </div>
            <div class="buttonsRouterBlocked">
                <div class="goToLandingBlocked" @click="logout">
                    <div class="text-wrapperBlocked">Ir a página inicial</div>
                </div>
            </div>

            </div>

        </div>

  

</template>

<script>
import { useUserStore } from '@/stores/user';
export default {
    data() {
        return {
            userStore: useUserStore()
        }
    },
    computed: {
        logout() {
            this.$router.push({name: "landingPage"});
            return this.userStore.logout
            
        }
    },
}
</script>

<style scoped>
.mainBodyBlocked {
  position: relative;
  min-height: 100vh;
}

/*Background Section */
.backgroundBlocked {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(../assets/pageBlocked/BlockedBackground.png) !important;
  background-size: cover;
  background-position: 50%;

}


/*Content Section */
.ContentBlocked {
  position: absolute;
  left: 50rem;
  top:10rem;
}

.TitleContentBlocked, .TextContentBlocked{
    color:#ffffff;
    font-size: 1rem;
}

.TextContentBlocked {
  padding-bottom: 1.5rem;
  margin-top: -1rem; 
}

.iconBlocked {
    width: 3rem; /* Set the width of the icon */
    height: 3rem; /* Set the height of the icon */
    position: absolute;
    left: 18rem;
    top:-0.1rem;
}

.dividerBlocked{
    padding-top: 1.5rem;
    padding-bottom: 5rem;
}
.goToLandingBlocked {
    position: absolute;
    width: 13rem;
    height: 3rem;
    background-color: #E50E1A;
    border-radius: 1rem;
    overflow: hidden;
    cursor: pointer;
}
.goToLandingBlocked:hover {
    background-color: #a10404;

}

.text-wrapperBlocked{
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


</style>