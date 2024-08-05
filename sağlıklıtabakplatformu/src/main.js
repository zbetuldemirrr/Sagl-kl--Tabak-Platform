

import { createApp } from 'vue';
import App from './App.vue';
import './assets/css/app.css'
import router from './router';
import LoginForm from './components/LoginForm.vue';
import SignUp from './components/SignUp.vue'; 
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas)



createApp(App)
  .use(router)
  .component('login-form', LoginForm) 
  .component('sign-up', SignUp) 
  .component('font-awesome-icon', FontAwesomeIcon)

  .mount('#app');
