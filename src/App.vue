<template id="app">
  <MainView msg="Welcome to Your Vue.js App Template Challenge" />
  <ProductGrid />
  <FooterView />
  
</template>

<script>
import MainView from './components/MainView.vue'
import ProductGrid from './components/ProductGrid.vue'
import FooterView from './components/FooterView.vue'
export default {
  name: 'App',
  components: {
    MainView,
    ProductGrid,
    FooterView
  }
}
</script>




<style>
/*in global*/ 
</style>
