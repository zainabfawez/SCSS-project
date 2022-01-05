<template>
<!-- header -->
 <body>
    <div class="Header">
      <div style= "display: flex" >
          <img src="../assets/logo.png" class="logoImage">
          <input class= "searchBar"/>
          <button class="btn btn-lgn text">Login / Sign Up</button>
          <img style="margin: 5px" src="../assets/Cart.png">
          <button class = "btn btn-sell text"> SELL </button>
          <button class = "btn btn-flag text"> RE<img src="../assets/flag.png">ST </button>
      </div>
      <hr class="line">
      <div class="flex-container">
        <div style= "display: flex; margin-left: 5px; margin-right: 0px">
          <p class="text" style="margin: 5px ">Home</p>
          <p class="text" style="margin: 5px">Shop all equipments</p>
          <p class="text" style="margin: 5px">Requests for proposel</p>
        </div>
        <div>
          <TabMenu :model= "items" class="text" :activeIndex="activeIndex"/>
        </div>
      </div>
      <hr class="line">
    </div>
 
<!-- Menu -->
  <div class ="headerMenu" style = "flex-direction: column">
    <div style = "display: flex; justify-content: space-between">
      <div>
        <img src="../assets/menu.png" class = "menuImage" @click="openMenu">
        <img src="../assets/logo.png" class="logoImageMenu">
      </div>
      <div style="display:flex" >
        <button class="btn btn-lgn text">Login / Sign Up</button>
        <img class="menuCartImage" src="../assets/Cart.png">
      </div>
    </div>   
    <input class= "searcBarMenu"/>
    <hr class="line">
  
    <div class = "Menu" id= "Menu">
      <div style="display: flex; justify-content: space-between; flex-direction: row">
        <div style = "display: flex">
          <img class="menuCloseImage" src="../assets/close.jpg" @click="closeMenu">
          <p class = "textMenu"> MainMenu </p>
        </div>
        <div>
          <img src="../assets/logo.png" class="logoImageMenu">
        </div>
      </div>
      <div style = " display: flex; justify-content: space-around; flex-direction: row">
        <button class = "btn btn-sell text"> SELL </button>
        <button class = "btn btn-sell text"> RFP </button>
        <button class = "btn btn-sell text"> Lang/Curr</button>
      </div>

      <div style = "flex-direction: column; margin-left: 10px">
        <br>
        <p class = "text"> Home </p>
        <br>
        <p class = "text"> Shop all equipments </p>
        <p class = "text"> Browse RFP (request for proposal) </p>
        <br>
        <p class = "text"> Become Dealer </p>
        <p class = "text"> About us </p>
        <p class = "text"> Help /FAQ </p>
        <p class = "text"> Contact </p>
        <br>
      </div> 

      <div class = "MenuFooter" >
        <p style="font-size: 20px; font-weight: bold"  class="textRoboto textYellow"> YOUR ACCOUNT </p>
        <p style="font-size: 15px" class="textRoboto"> Signup/Login </p>
      </div>

    </div>
  </div>

    <!-- Banner -->
    <div class="Banner">
    </div>

      <!--  Body -->
    <div class="Body" >
    </div>
      
    <!-- Footer -->
    <div class= "Footer">
    </div>

 
</body>

  
  
  
</template>

<script>
  export default {
    name: 'Dealer',
    data(){
      return {
        items: [
          {label: "Become Dealer"},
          {label: "About us"},
          {label: "Help/FAQ"},
          {label: "Contact"},
        ]
      }
    },

    methods: {
      openMenu() {
        var elem = document.getElementById("Menu");
        elem.style.left = 0 + 'px';
      },

       closeMenu() {
        var elem = document.getElementById("Menu");
        elem.style.left = -250 + 'px';
      }
    }
  }
</script>


<style lang = "scss">

  @import "../scss/variables.scss";
  @import "../scss/header.scss";
  @import "../scss/menu.scss";
  @import "../scss/banner.scss";

  @media only screen and (max-width: 700px) {
    .Header {
      display: none;
    }
    .headerMenu {
      display: flex;
    }
   
  }

  

  
</style>
