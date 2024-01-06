<template>
    <div class='mainBody'>
        
        <div class="background"> </div>
        <div class="Content">

            <div class="TitleContent">
                <img class="iconBlocked" src="..\assets\blocked.png">
                <h1> Check-In Negado   <br>   </h1>
                <img class='divider' src="..\assets\dividerPageBlocked.png">
            </div>
            <div class="TextContent">
                <p>
                    Ops, parece que você não vai poder embarcar. <br>
                    A sua conta foi bloqueada por um administrador.

                </p>
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
  background-image: url(../assets/BlockedBackground.png);
  background-size: cover;
  background-position: 50%;
  z-index: -1; 
}


/*Content Section */
.Content {
  position: absolute;
  left: 50rem;
  top:10rem;
}

.TitleContent, .TextContent{
    color:#ffffff;
    font-size: 1rem;
}

.TextContent {
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

.divider{
    padding-top: 1.5rem;
    padding-bottom: 5rem;
}


</style>