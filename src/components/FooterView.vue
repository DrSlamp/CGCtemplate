<template>


<div class="container-footer">

  <footer class="footer">
    <div class="payment-logos">
      <img :src="require('@/assets/enterprise/visa.png')" alt="Visa">
      <img :src="require('@/assets/enterprise/master.png')" alt="Mastercard">
      <img :src="require('@/assets/enterprise/american.png')" alt="American Express">
      <img :src="require('@/assets/enterprise/skrill.png')" alt="Skrill">
      
      

        <img :src="require('@/assets/enterprise/bcash.png')" alt="Bitcoin Cash">
        <img :src="require('@/assets/enterprise/btc.png')" alt="Bitcoin">
        
        <img :src="require('@/assets/enterprise/etherium.png')" alt="Etherium">
        <img :src="require('@/assets/enterprise/ltc.png')" alt="Litecoin">

     
      <p>and 50+ more</p>
     
    </div>

    

    <div class="social-icons">
      <font-awesome-icon :icon="['fab', 'facebook']" alt="Facebook"/>
      <font-awesome-icon :icon="['fab', 'instagram']" alt="Instagram"/>
      <font-awesome-icon :icon="['fab', 'twitter']" alt="Twitter"/>
      <font-awesome-icon :icon="['fab', 'discord']" alt="Discord"/>
      <!-- Agrega los demás íconos de las redes sociales aquí -->
    </div>


    <div class="neon-line">
    </div>


    <div class="footer-links">

      


        <div class="distributionf"> 

          <div class="support">
        <div class="nav-brand">
          <img :src="require('@/components/cg.png')" alt="ChicksGold" class="logo">
        </div>
        <a href="mailto:support@chicksgold.com">Support@chicksgold.com</a>
      </div>


      <div class="chicks-gold">
        <h2><b>Chicks Gold</b></h2>
        <a href="#">Games</a>
        <a href="#">About Us</a>
        <a href="#">Blog</a>
        <a href="#">Sitemap</a>
        <!-- Agrega los demás enlaces de Chicks Gold aquí -->
      </div>

      <div class="support1">
        <h2><b>Support</b></h2>
        <a href="#">Contact Us</a>
        <a href="#">FAQ</a>
        <!-- Agrega los demás enlaces legales aquí -->
      </div>

      <div class="legal">
        <h2><b>Legal</b></h2>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <a href="#">Copyright Policy</a>
        <!-- Agrega los demás enlaces legales aquí -->
      </div>

      <div class="reviews">
  <img :src="require('@/assets/footer/trustpilot.png')" alt="Trustpilot Reviews">
</div>


</div>
    </div>

    <p>© 2017 - 2020 chicksgold.com. All Rights Reserved</p>
  </footer>


</div>
</template>

<script>
export default {
  name: 'FooterView',
}
</script>

<style scoped>


.payment-logos {
  background-color: #2b2c3b; /* Gray background */
  padding: 40px;
  border-radius: 5px;
  display: flex; /* Agrega esto */
  justify-content: center; /* Centra los elementos horizontalmente */
  align-items: center; /* Centra los elementos verticalmente */
}

.payment-logos img {
  width: 35px; /* Adjust this value to change the size of the images */
  height: auto; /* This will maintain the aspect ratio of the images */
  margin-right: 20px; /* This adds space between the images */
}


@media only screen and (max-width: 600px) {
  .payment-logos img {
    width: 15px; 
    height: 100%;
    margin-right: 2px; 
  }
}




.container-footer { 

  max-width: 1500px; /*This is important! calculate 1500/5* = 300 ~290px */ 
  margin: 0 auto;
  padding: 0 15px;
  

  
 
}


.footer {
  background-color: #303141; 
  color: white;
  padding: 100px; 
  font-size: 14px; 
  display: flex; 
  flex-direction: column; 

  justify-content: space-between; 
}

 .distributionf {
  flex-direction: row;
  display: flex;
  justify-content: space-between; 
 }

.payment-logos img,
.social-icons {
  gap: 40px;
  display: flex;
  justify-content: left; /* Alinea los enlaces a la izquierda */
  margin-left: 1px;
  padding-left: 0px;
  
}
.footer-links {
  
  align-items: center;
  gap: 40px;
  display: flex;
  justify-content: space-between;  
}

.footer-links div a {
  
  
   /* Margen a la derecha de cada enlace para el espaciado */
  color: white;
  text-decoration: none; /* Elimina el subrayado de los enlaces */
}

p {
  
  margin-top: 20px;
}

/* chicksgold footer*/
.chicks-gold {
  padding-right: 20%;
}

.support {
  padding-right: 20%;
}

.support1 {
  padding-right: 20%;
}

.legal {

  padding-right: 20%;
}


/*trustpilot img*/
.reviews img {
  max-width: 100px; 
  margin-right: 5px; 
}


.footer-links div a {
  
  text-align: left;
  display: block; /* Cada enlace en su propia línea */
  margin-bottom: 10px; /* Espaciado entre los enlaces */
}

.footer-links div h2 {
  text-align: left;
  margin-bottom: 15px; /* Espaciado debajo del encabezado */
}



@media (max-width: 600px) {
  .footer {
    padding: 20px; /* Reduce el padding en pantallas pequeñas */
    font-size: 12px; /* Reduce el tamaño de fuente en pantallas pequeñas */
  }

  .payment-logos img,
  .social-icons img,
  .reviews img {
    max-width: 30px; /* Reduce el tamaño de los iconos en pantallas pequeñas */
  }

  .footer-links div a {
    margin-right: 10px; /* Reduce el margen a la derecha de cada enlace para el espaciado en pantallas pequeñas */
  }

  .distributionf {
    flex-direction: column; /* Los elementos hijos se apilan verticalmente en pantallas pequeñas */
    align-items: flex-start; /* Alinea los elementos a la izquierda */
    gap: 20px; /* Añade un espacio entre los elementos */
  }

  .chicks-gold,
  .support,
  .support1,
  .legal {
    padding-right: 0; /* Elimina el padding a la derecha en pantallas pequeñas */
  }
}

.neon-line {
  height: 2px; /*neon br*/ 
  background: #fff;
  box-shadow: 0 0 10px #5762d5, 0 0 20px #5762d5, 0 0 30px #5762d5, 0 0 40px #5762d5;
  margin-top: 10px;
  margin-bottom: 30px;
}
</style>