<template>
    
       <nav class="navbar">
         <div class="nav-brand"><img :src="require('@/components/cg.png')" alt="ChicksGold" class="logo"></div>
         <ul class="nav-links" :class="{ open: isOpen }">
           <li><a href="#">CURRENCY <span class="arrow">▼</span></a></li>
           <li><a href="#">ITEMS <span class="arrow">▼</span></a></li>
           <li><a href="#">ACCOUNTS <span class="arrow">▼</span></a></li>
           <li><a href="#">SERVICES <span class="arrow">▼</span></a></li>
           <li><a href="#">SWAP <span class="arrow">▼</span></a></li>
           <li><a href="#">SELL <span class="arrow">▼</span></a></li>
         </ul>
         <div class="burger" @click="toggleNav">
           <div></div>
           <div></div>
           <div></div>
         </div>
         <div class="right-side">
           <div class="currency">USD <font-awesome-icon :icon="['fas', 'chevron-down']" /></div>
           <div class="cart"><font-awesome-icon :icon="['fas', 'shopping-cart']" /> CART (5)</div>
           <button class="sign-in">SIGN IN</button>
         </div>
       </nav>
    
   </template>
   
   <script>
   export default {
     data() {
       return {
         isOpen: false
       };
     },
     methods: {
       toggleNav() {
         this.isOpen = !this.isOpen;
       }
     }
   };
   </script>
   
   <!-- some attributes in global.css-->
   <style scoped>


   h3 {
     margin: 40px 0 0;
   }
   ul {
     list-style-type: none;
     padding: 0;
   }
   li {
     display: inline-block;
     margin: 0 10px;
   }
   a {
     color: #42b983;
   }
   </style>
   