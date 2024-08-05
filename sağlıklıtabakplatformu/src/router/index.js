import { createRouter, createWebHistory } from 'vue-router';

import LoginForm from '../components/LoginForm.vue';
import SignUp from '../components/SignUp.vue';
import UserDashboard from '../pages/master/user-dashboard'
import UserHome from '../pages/user-home'
import UserProfile from '../pages/user-profile'
import UserFavori from '../pages/user-favori'
import UserVki from '../pages/user-vki'
import UserAnasayfa from '../pages/user-anasayfa'
import UserTarif from '../pages/user-tarif'
import KolestrolPage from '../pages/KolestrolPage.vue';
import DiyabetPage from '../pages/DiyabetPage.vue';
import HipertansiyonPage from '../pages/HipertansiyonPage.vue';
import ColyakPage from '../pages/ColyakPage.vue';
import GutPage from '../pages/GutPage.vue';
import AnemiPage from '../pages/AnemiPage.vue';
import SalataBir from '../pages/SalataBir.vue';
import SalataIki from '../pages/SalataIki.vue';
import SalataUc from '../pages/SalataUc.vue';
import CorbaBir from '../pages/CorbaBir.vue';
import CorbaIki from '../pages/CorbaIki.vue';
import CorbaUc from '../pages/CorbaUc.vue';
import AtistirmalikBir from '../pages/AtistirmalikBir.vue';
import AtistirmalikIki from '../pages/AtistirmalikIki.vue';
import AtistirmalikUc from '../pages/AtistirmalikUc.vue';
import VeganBir from '../pages/VeganBir.vue';
import VeganIki from '../pages/VeganIki.vue';
import VeganUc from '../pages/VeganUc.vue';
import AnayemekBir from '../pages/AnayemekBir.vue';
import AnayemekIki from '../pages/AnayemekIki.vue';
import AnayemekUc from '../pages/AnayemekUc.vue';
import SearchBar from '../pages/SearchBar.vue';


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/anasayfa' // Varsayılan olarak /home yoluna yönlendir
    },
    {
      path: '/login',
      name: 'login',
      component: LoginForm
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp
    },
  
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: UserDashboard,
      children: [
        {
          path: '/home',
          name: 'Home',
          component: UserHome
        },

      
        {
          path: '/profile', 
          name: 'Profile',
          component: UserProfile
        },
        {
          path: '/favori', 
          name: 'Favori',
          component: UserFavori
        },

        {
          path: '/vki', 
          name: 'Vki',
          component: UserVki
        },
        {
          path: '/anasayfa', 
          name: 'Anasayfa',
          component: UserAnasayfa
        },
        {
          path: '/tarif',
          name: 'Tarif',
          component: UserTarif
        },
        {
          path: '/kolestrol',
          name: 'KolestrolPage',
          component: KolestrolPage
        },
        {
          path: '/diyabet',
          name: 'DiyabetPage',
          component: DiyabetPage
        },
        {
          path: '/hipertansiyon',
          name: 'HipertansiyonPage',
          component: HipertansiyonPage
        },
        {
          path: '/colyak',
          name: 'ColyakPage',
          component: ColyakPage
        },

        {
          path: '/gut',
          name: 'Gutpage',
          component: GutPage
        },
        {
          path: '/anemi',
          name: 'AnemiPage',
          component: AnemiPage
        },
        
       
            {
              path: '/salatabir', 
              name: 'SalataBir',
              component: SalataBir
            },
            {
              path: '/salataiki', 
              name: 'SalataIki',
              component: SalataIki
            },
            {
              path: '/salatauc', 
              name: 'SalataUc',
              component: SalataUc
            },
       
         
         
            {
              path: '/anayemekbir',
              name: 'AnayemekBir',
              component: AnayemekBir
            },
            {
              path: '/anayemekiki',
              name: 'AnayemekIki',
              component: AnayemekIki
            },
            {
              path: '/anayemekuc',
              name: 'AnayemekUc',
              component: AnayemekUc
            },
        
       
            {
              path: '/veganbir',
              name: 'VeganBir',
              component: VeganBir
            },
            {
              path: '/veganiki',
              name: 'VeganIki',
              component: VeganIki
            },
            {
              path: '/veganuc',
              name: 'VeganUc',
              component: VeganUc
            },
          
       
            {
              path: '/corbabir',
              name: 'CorbaBir',
              component: CorbaBir
            },
            {
              path: '/corbaiki',
              name: 'CorbaIki',
              component: CorbaIki
            },
            {
              path: '/corbauc',
              name: 'CorbaUc',
              component: CorbaUc
            },
          
        
            {
              path: '/atistirmalikbir',
              name: 'AtistirmalikBir',
              component: AtistirmalikBir
            },
            {
              path: '/atistirmalikiki',
              name: 'AtistirmalikIki',
              component: AtistirmalikIki
            },
            {
              path: '/atistirmalikuc',
              name: 'AtistirmalikUc',
              component: AtistirmalikUc
            },
            {
              path: '/searchbar',
              name: 'SearchBar',
              component: SearchBar
            }
          ]
        }
       
      ]
    }
  
);

export default router;
