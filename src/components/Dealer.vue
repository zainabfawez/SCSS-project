<template>

    <div style= "display: flex">
      <img src="../assets/logo.png" class="logoImage">
      <input class= "searchBar"/>
        <button class="btn btn-lgn text">Login / Sign Up</button>
        <img style="margin: 5px" src="../assets/Cart.png">
        <button class = "btn btn-sell text"> SELL </button>
        <button class = "btn btn-flag text"> RE<img src="../assets/flag.png">ST </button>
    </div>
    <hr class="line">
    <!-- <div style= "display: flex">
      <div>

      </div>
    </div> -->


   
</template>

<script>
  export default {
    name: 'Dealer',
  }
</script>


<style lang = "scss">

  @import "../scss/variables.scss";
  @import "../scss/classes.scss";

  
  .logoImage {
    width:10%;
    height: 55px;
    margin-left: 16px;
    margin-right: 10px;
  }
  .searchBar {
    height: 25px;
    margin-top: 10px;
    margin-right: 5%;
    border-radius: 20px;
    width: 60%;
    border: none;
    
    background: $backgroundLight;
  }
 

  .btn-lgn {
    background-color: white;
    border: solid 1px $primaryLight;
    color: $primaryDark;
  }


   .btn-sell {
    width: 5%;
    background-color: $primaryLight;
    border: none;
    color: $primaryDark;
  }

   .btn-flag {
    background-color: $primaryDark;
    border: solid 1px $primaryLight;
    color: white;
  }




  
</style>
