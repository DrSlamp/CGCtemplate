import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/global.css'; // Global css app
import { library } from '@fortawesome/fontawesome-svg-core'
import {faChevronRight, faChevronLeft, faShoppingCart,faChevronUp, faChevronDown  } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faTwitter, faDiscord } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faChevronRight, faChevronLeft, faShoppingCart, faChevronUp, faChevronDown, faFacebook, faInstagram,faTwitter, faDiscord  )

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')