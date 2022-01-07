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
<!-- End of Header -->
 
<!-- Burger Menu -->
    <div class ="headerMenu" style = "flex-direction: column">
      <div style = "display: flex; justify-content: space-between">
        <div>
          <img src="../assets/menu.png" class = "menuImage" @click="openMenu">
          <img src="../assets/logo.png" class="logoImageMenu">
        </div>
        <div style="display:flex" >
          <button class="btn btn-lgn text">LOGIN</button>
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
<!-- End of Burger Menu -->

<!-- Banner -->
    <div class="Banner">
      <div >
        <h4 class ="textBannerB" > Here is what you get from </h4>
        <h2 class ="textBannerY" > BECOMING AN OFFICIAL TOPOTRADE DEALER </h2>
      </div>
      <button class = "btn btn-sell Banner-btn text"> BECOME A DEALER NOW </button>
    </div>
<!-- End of Banner -->

<!--  Body -->
    <div class="BodyCenter">
      <div>
        <h3 class = "BodyHeading"> Official Dealers Main Benefits </h3>
      </div>

      <div class="BodyContent">

        <BodyContent 
          title="FreeListing" 
          text="We give you the ability to list your equipment within few clicks away."
        />
        <BodyContent 
          title="Keep your equipment until sold!" 
          text="The seller keeps their equipment with them until the sale is confirmed. We do not take anything from the seller prior selling point."
        />
        <BodyContent 
          title="We handle everything!" 
          text="Sellers are paid via wire-transfer within 7 days after the equipment has been inspected and validated by our team of experts."
        />
      </div>

      <div class="BodyContent">

        <BodyContent 
          title="Sell or Rent" 
          text="Sellers can either sell or rent their equipment."
        />

          <BodyContent 
          title="Seller controls pricing " 
          text="The seller controls the price at all times, he can edit the pricing all along the process if negotiation are in process."
        />
          <BodyContent 
          title="We handle everything!" 
          text="Sellers are paid via wire-transfer within 7 days after the equipment has been inspected and validated by our team of experts."
        />

          <BodyContent 
          title="Global network " 
          text="Your listed equipment will benefit from our global network and worldwide visibility."
        />
      </div>

      <button class = "btn btn-sell btn-body text"> BECOME A DEALER NOW </button>

    </div>
<!-- End of Body -->

<!-- Body max-with 760 -->
    <div class = "BodyCenter2">
      <div>
        <h3 class = "BodyHeading"> Official Dealers Main Benefits </h3>
      </div>

      <div class="BodyContent">
        <BodyContent 
          title="FreeListing" 
          text="We give you the ability to list your equipment within few clicks away."
        />
        <BodyContent 
          title="Keep your equipment until sold!" 
          text="The seller keeps their equipment with them until the sale is confirmed. We do not take anything from the seller prior selling point."
        />
      </div>

      <div class="BodyContent">
          <BodyContent 
          title="We handle everything!" 
          text="Sellers are paid via wire-transfer within 7 days after the equipment has been inspected and validated by our team of experts."
        />
        <BodyContent 
          title="Sell or Rent" 
          text="Sellers can either sell or rent their equipment."
        />
      </div>

      <div class="BodyContent">
          <BodyContent 
          title="Seller controls pricing " 
          text="The seller controls the price at all times, he can edit the pricing all along the process if negotiation are in process."
        />
        <BodyContent 
          title="We handle everything!" 
          text="Sellers are paid via wire-transfer within 7 days after the equipment has been inspected and validated by our team of experts."
        />  
      </div>

      <div class="BodyContent">
        <BodyContent 
            title="Global network " 
            text="Your listed equipment will benefit from our global network and worldwide visibility."
        />
      </div>

      <button class = "btn btn-sell btn-body text"> BECOME A DEALER NOW </button>

    </div>
<!--End of Body max-with 760 -->

  </body>

<!-- End of Body -->\

<!-- Footer -->
  <footer  class= "Footer">
   
    <div class= "address">
      <img src="../assets/logoFooter.png">
      <p class="FooterTextG" >12 rue de la République</p>
      <p class="FooterTextG">75011 Paris, FRANCE</p>
      <br>
      <p  class="FooterTextG"> + 33 1 86 65 14 61 </p>
      <br>
      <p class="FooterTextY">contact@topotrade.com</p>
      <br>
      <img src="../assets/socialLinks.png">
    </div>

    <div class="info">

      <div class="div1">
        <h6 class="FooterTitle"> GET TO KNOW US </h6>
        <p class="FooterTextW">About us</p>
      </div>

      <div class="div2"></div>

      <div class="div3"></div>

      <div class="div4"></div>

    </div>

 



  </footer>
<!-- End of Footer -->


</template>

<script>

  import BodyContent from './BodyContent.vue'

  export default {
    name: 'Dealer',
    components: {
    BodyContent
  },
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
  @import "../scss/body.scss";
  @import "../scss/body2.scss";
  @import "../scss/footer.scss";

  @media only screen and (max-width: 770px) {

    .Header {
      display: none;
    }
    
    .headerMenu {
      display: flex;
    }

    .BodyCenter {
      display: none;
    }

    .BodyCenter2 {
      display: flex;
    }

  }

  @media only screen and (max-width: 500px) {

    .BodyCenter2 {
      display: none;
    }

    .searcBarMenu {
      height: 25px;
      margin-top: 5px;
      border-radius: 20px;
      width:100%;
      border: none;
      background: $backgroundLight;
}

    .BodyContent {
      display: flex;
      flex-direction:column;
      justify-content: center;
      align-content: center;
      margin-top: 10px;
    }

    .BodyHeading {
      font-style: normal;
      font-family: Nunito;
      font-weight: bold;
      text-align: center;  
      left: 0%;
      right: 0%;
    }

    .BodyCenter {
      display: flex; 
      flex-direction: column;
      justify-content: center; 
      align-content: center;
      position: relative;
      margin: 5px;
  }

    .Content {
      margin: 50px;
      align-content: center;
      width: 250px;
    }
  
    .BodyText {
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      color: $lightBlack;
    }

    .BenefitText {
      font-family: Roboto;
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      color: $primaryDefault;
      text-align: center;   
    }

    .Banner-btn {
      bottom: -375px;
      margin-right: 10px;
      position: relative;
      width: 250px;
    }
    
  } 

  
</style>
