

<template>
    
    
        <div class="container">

 <!--search section-->

 <div class="container-search">
    <h1>Condimentum consectetur</h1>
    <div class="dropdowns">

      <div class="dropdowns-search">
        <select>
        <option disabled selected>Select a game</option>
        <!-- Game options -->
      </select>
      </div>
      
      <select>
        <option disabled selected>Search</option>
        <!-- Search options -->
      </select>
      <select>
        <option disabled selected>Price</option>
        <option>All</option>
        <!-- Price options -->
      </select>
      <select>
        <option disabled selected>Item Type</option>
        <option>All</option>
        <!-- Item type options -->
      </select>
    </div>
  </div>

          



         
     
      <div class="pagination-sort-container">
         <!-- pagination-->
  <div class="pagination-top">
    <p>Showing 20 - from 125</p>
  </div>

 
  <div class="sort-by">
  <label for="sort">Sort By:</label>
  <div class="select-container">
    <div class="font-sort">
        <font-awesome-icon :icon="['fas', 'chevron-down']" />
    </div>
    
    <select id="sort">
      <option value="featured">Featured</option>
      
    </select>
  </div>
</div>
</div>


      <div class="product-grid">





  <div class="product-card" v-for="product in products" :key="product.id">
     <!-- quantity -->
     <div class="product-info">
    <!-- Left side - Quantity selector -->
    <div class="product-status">
      <p class="on-sale">ON SALE</p>
      <p class="in-stock">In stock</p>
    </div>
   

    <!-- Right side - Sale and Stock status -->
        <div class="quantity-selector">
                <input type="number" v-model.number="product.quantity" min="1">
                <div class="quantity-buttons">
                    <button @click="increaseQuantity(product)"><font-awesome-icon :icon="['fas', 'chevron-up']" /></button>
                    <button @click="decreaseQuantity(product)"><font-awesome-icon :icon="['fas', 'chevron-down']" /></button>
        </div>
    </div>
  </div>

  <div class="product">
    <img :src="product.imageSrc" :alt="product.name" class="product-img"> <!-- IMG -->
    <h2 class="product-name">{{ product.name }}</h2>
    <p class="product-price">{{ product.price }}</p>
    <p class="product-discounted-price" style="text-decoration: line-through;">{{ product.discountedPrice }}</p> 
    <p class="product-description">{{ product.description }}</p>
  </div>

   

    <!-- Details B -->
    <div class="button-container">
  <button @click="showDetails(product)" class="details-button">DETAILS</button>
  <button class="add-button">ADD <font-awesome-icon :icon="['fas', 'shopping-cart']" /></button>
</div>
   
                   
  </div>
</div>
<div class="pagination">
    <button class="page-btn" @click="currentPage = Math.max(1, currentPage - 1)">&lt;</button>
    <button class="page-btn" v-for="page in pages" :key="page" :class="{ 'active-page': currentPage === page }" @click="currentPage = page">{{ page }}</button>
    <button class="page-btn" @click="currentPage = Math.min(pages.length, currentPage + 1)">&gt;</button>
  </div>
    </div>


  </template>
  
  <script>
  export default {
    data() {
      return {
        products: [
          {
            id: 1,
            quantity: 1,
            name: 'Holy Sword',
            price: '$' + 150.00,
            discountedPrice: '$' +200.00,
            status: 'In stock',
            onSale: true,
            description: 'Holy Sword, good vs Undead, basic atack: 30, bonus atack: +5',
            imageSrc: require('@/assets/sword.png'),
           
          },
          {
            id: 2,
            name: 'Fire Sword',
            price: '$' + 200,
            discountedPrice: '$' + 250.00,
            status: 'In stock',
            onSale: true,
            description: 'Fire Sword, good vs Beast, basic atack: 25, bonus atack: +15',
            imageSrc: require('@/assets/firesword.png')
          },
          {
            id: 3,
            name: 'Reaper',
            price: '$' + 1250.50,
            discountedPrice:'$' + 2500.00,
            status: 'In stock',
            onSale: true,
            description: 'Reaper, good vs all, basic atack: 80, bonus atack: +400',
            imageSrc: require('@/assets/reaper.png')
          },

          {
            id: 4,
            quantity: 1,
            name: 'Holy Sword',
            price: '$' + 150.00,
            discountedPrice: '$' +200.00,
            status: 'In stock',
            onSale: true,
            description: 'Holy Sword, good vs Undead, basic atack: 30, bonus atack: +5',
            imageSrc: require('@/assets/sword.png'),
           
          },

          {
            id: 5,
            quantity: 1,
            name: 'Holy Sword',
            price: '$' + 150.00,
            discountedPrice: '$' +200.00,
            status: 'In stock',
            onSale: true,
            description: 'Holy Sword, good vs Undead, basic atack: 30, bonus atack: +5',
            imageSrc: require('@/assets/sword.png'),
           
          },


          {
            id: 6,
            quantity: 1,
            name: 'Holy Sword',
            price: '$' + 150.00,
            discountedPrice: '$' +200.00,
            status: 'In stock',
            onSale: true,
            description: 'Holy Sword, good vs Undead, basic atack: 30, bonus atack: +5',
            imageSrc: require('@/assets/sword.png'),
           
          },
          {
            id: 7,
            quantity: 1,
            name: 'Holy Sword',
            price: '$' + 150.00,
            discountedPrice: '$' +200.00,
            status: 'In stock',
            onSale: true,
            description: 'Holy Sword, good vs Undead, basic atack: 30, bonus atack: +5',
            imageSrc: require('@/assets/sword.png'),
           
          },
          {
            id: 1,
            quantity: 8,
            name: 'Holy Sword',
            price: '$' + 150.00,
            discountedPrice: '$' +200.00,
            status: 'In stock',
            onSale: true,
            description: 'Holy Sword, good vs Undead, basic atack: 30, bonus atack: +5',
            imageSrc: require('@/assets/sword.png'),
           
          },
          {
            id: 9,
            quantity: 1,
            name: 'Holy Sword',
            price: '$' + 150.00,
            discountedPrice: '$' +200.00,
            status: 'In stock',
            onSale: true,
            description: 'Holy Sword, good vs Undead, basic atack: 30, bonus atack: +5',
            imageSrc: require('@/assets/sword.png'),
           
          },
          {
            id: 10,
            quantity: 1,
            name: 'Holy Sword',
            price: '$' + 150.00,
            discountedPrice: '$' +200.00,
            status: 'In stock',
            onSale: true,
            description: 'Holy Sword, good vs Undead, basic atack: 30, bonus atack: +5',
            imageSrc: require('@/assets/sword.png'),
           
          },
          {
            id: 11,
            quantity: 1,
            name: 'Holy Sword',
            price: '$' + 150.00,
            discountedPrice: '$' +200.00,
            status: 'In stock',
            onSale: true,
            description: 'Holy Sword, good vs Undead, basic atack: 30, bonus atack: +5',
            imageSrc: require('@/assets/sword.png'),
           
          },
          {
            id: 12,
            quantity: 1,
            name: 'Holy Sword',
            price: '$' + 150.00,
            discountedPrice: '$' +200.00,
            status: 'In stock',
            onSale: true,
            description: 'Holy Sword, good vs Undead, basic atack: 30, bonus atack: +5',
            imageSrc: require('@/assets/sword.png'),
           
          },
          {
            id: 13,
            quantity: 1,
            name: 'Holy Sword',
            price: '$' + 150.00,
            discountedPrice: '$' +200.00,
            status: 'In stock',
            onSale: true,
            description: 'Holy Sword, good vs Undead, basic atack: 30, bonus atack: +5',
            imageSrc: require('@/assets/sword.png'),
           
          },
          {
            id: 14,
            quantity: 1,
            name: 'Holy Sword',
            price: '$' + 150.00,
            discountedPrice: '$' +200.00,
            status: 'In stock',
            onSale: true,
            description: 'Holy Sword, good vs Undead, basic atack: 30, bonus atack: +5',
            imageSrc: require('@/assets/sword.png'),
           
          },
          {
            id: 15,
            quantity: 1,
            name: 'Holy Sword',
            price: '$' + 150.00,
            discountedPrice: '$' +200.00,
            status: 'In stock',
            onSale: true,
            description: 'Holy Sword, good vs Undead, basic atack: 30, bonus atack: +5',
            imageSrc: require('@/assets/sword.png'),
           
          },
          // build more products
        ],
        pages: 10 // num pages
      };
    },


    methods: {
    increaseQuantity(product) {
      product.quantity++;
    },
    decreaseQuantity(product) {
      if (product.quantity > 1) {
        product.quantity--;
      }
    },
    showDetails(product) {
      alert(`Details for ${product.name}: ${product.description}`);
    }
  }

  };


  
  </script>
  
  <style scoped>

/*Main container*/
.container {
  max-width: 1500px; /*This is important! calculate 1500/5* = 300 ~290px */ 
  margin: 0 auto;
  padding: 0 15px;
  background-color: transparent;
}
/*search */ 

.container-search {
  background-color: transparent;
  color: #fff;
  text-align: left;
  padding: 20px;
}
.dropdowns {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}
.dropdowns-search select {
  border-radius: 5px;
  background-color: #4a4f652f;
  color: #fff;
  border: none;
  padding: 25px;
  width: 80px;
  gap: 10px;
}



.dropdowns select {
  border-radius: 5px;
  background-color: #4a4f652f;
  color: #fff;
  border: none;
  padding: 25px;
  gap: 5px;
  width:400px;
}

/* Responsive design */
@media (max-width: 768px) {
  .dropdowns {
    flex-direction: column;
  }
  .dropdowns select {
    width: 100%;
    margin-bottom: 10px;
  }
}


/*product*/
.product {
  margin-left: 10px;
  text-align: left;
}
  
  
/*Grid*/ 
  .product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr)); /* Ajusta el tamaño mínimo de la tarjeta para que se muestren 5 tarjetas por fila */
  gap: 2px; /* Ajusta el espacio entre las tarjetas según tus necesidades */
  padding-top: 100px;
  padding-left: 40px;
  padding-right: 0px;
  border-radius: 5px;
  background-color: #303141;
  border: 1px solid #383f56;
}
  
/*sort by menu */ 
.pagination-sort-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 20px;
  padding-right: 50px;
  border-radius: 5px;
  background-color: #303141;
}

.pagination-top {
  color: white; 

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 20px;
  padding-left: 50px;
 
  
}

.sort-by {
  display: flex;
  flex-direction: column;
  align-items: flex;
  padding: 5px;
  background-color: #323648;
  
}

.sort-by label {
  text-justify: auto;
  font-size: .6em; /* Ajusta el tamaño de la fuente según sea necesario */
  color: white; /* Ajusta el color según sea necesario */
}

.font-sort {

padding: 10px;

}
.select-container {
  display: flex;
  align-items: center;
}

.select-container select {
  color: white; 
  background-color: transparent;
  border: none;
}






  .product-card {
    display:flexbox;
    flex-direction: column;
    align-items: center;
    height: auto;
    width: 220px;
    padding: 10px;
    margin-bottom: 50px;
    border-radius: 5px;
    background-color: #323648;
    color: white;
    
  }
  
  .product-card img {
    width: auto;
    height: auto;
    
  }
  
  .pagination {
  display: flex;
  justify-content: center;
  padding: 50px;
  background-color: #303141;
  color: white;
  border-radius: 5px;
}

@media (max-width: 600px) {
  .pagination {
    display: flex;
    flex-wrap: wrap; /* Permite que los elementos se envuelvan en múltiples líneas */
    padding: 30px; /* Reduce el padding en pantallas pequeñas */
    width: auto;
    height: auto;
  }
}

.page-btn {
  color: white;
  background-color: transparent;
  border: none;
  margin: 0 10px;
  cursor: pointer;
}

.page-btn:hover {
  color: #5762d5;
}

.active-page {
  border-bottom: 2px solid white;
}

 

/* search top left*/
.search-filters {
  display: flex;
  justify-content: space-between;
  background-color: #333;
  padding: 20px;
  color: #fff;
}

.game-select {
  background-color: #444;
  border: none;
  color: #fff;
  display: flex;
  align-items: center;
}

.game-icon,
.dropdown-arrow {
  height: 16px;
  width: 16px;
}


/*selector q*/
.quantity-selector {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #373e54; 
  color: #fff; 
  padding: 10px 5px;
  height: 25px;
  border-radius: 5px; 
  margin-right: 20px;
}

.quantity-selector input {
  width: 25px;
  height: 15px;
  text-align: center;
  border: none;
  background-color: #373e54; 
  color: #fff; 
}

.quantity-buttons {
  display: flex;
  flex-direction: column;
}

.quantity-buttons button {
  background-color: transparent;
  border: none;
  color: white; /* Ajusta el color según sea necesario */
}

/*product info*/
.product-info {
  display: flex;
  justify-content: space-between;
}

.on-sale, .in-stock {
  color: white; /* Ajusta el color según sea necesario */
}

.in-stock {
  padding: 5px 10px;
  border: 1px solid green; 
  border-radius: 5px;
}



/*container buttons*/ 
.button-container {
  display: flex;
  justify-content: space-between;
}

/* shop button*/ 
.add-button {
  background-color: #5762d5; 
  color: white; 
  margin-right: 20px;
  padding: 10px 20px;
  border-radius: 5px; 
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
}

/*Details button*/
.details-button {
  background-color: #333; 
  color: white; 
  padding: 10px 20px; 
  border-radius: 5px; 
  border: 1px solid transparent; 
  display: flex;
  align-items: center;
  justify-content: center;
}

  </style>
