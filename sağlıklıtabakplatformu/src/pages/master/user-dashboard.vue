<template>
  <div class="container">
    <div class="top-bar">
      <div class="nav-item">
        <router-link to="/" class="logo">
          <img src="@/assets/logo.png" alt="Logo">
        </router-link>
      </div>
      <div class="nav-item search-bar">
        <form class="flex items-center" @submit.prevent="navigateToSearchResults">
          <label for="voice-search" class="sr-only">Search</label>
          <div class="relative w-full">
            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg aria-hidden="true" class="w-5 h-auto text-white-500 dark:text-white-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <input type="text" id="voice-search" class="bg-black-50 border border-black-300 text-black-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-3 dark:bg-black-700 dark:border-black-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." required v-model="searchTerm">
            <router-link :to="{ path: '/search-results', query: { q: searchTerm } }" class="flex absolute inset-y-0 right-0 items-center pr-3">
              <svg aria-hidden="true" class="w-4 h-4 text-black-500 dark:text-black-400 hover:text-black-900 dark:hover:text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clip-rule="evenodd"></path>
              </svg>
            </router-link>
          </div>
        </form>
      </div>
      <div class="nav-item login-button" @mouseover="showDropdown = true" @mouseleave="handleMouseLeave">
        <router-link v-if="!isActive" to="/login" class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border border-gray-400 hover:bg-gray-300 hover:text-gray-800 transition duration-400 ease-in-out">
          <svg aria-hidden="true" class="mr-2 w-[25px] h-[25px] fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path>
          </svg>
          Giriş Yap 
        </router-link>
        <button v-else @click="logout" class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border border-gray-400 hover:bg-gray-300 hover:text-gray-800 transition duration-400 ease-in-out">
  <b>Çıkış Yap</b>
</button>
        <div v-if="showDropdown && isActive" class="dropdown-menu absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10" @mouseover="showDropdown = true" @mouseleave="showDropdown = false">
          <router-link to="/profile" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profilim</router-link>
          <router-link to="/favori" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Favorilerim</router-link>
        </div>
      </div>
    </div>
    <header class="header">
      <div class="nav-item"><router-link to="/anasayfa"><font-awesome-icon :icon="['fas', 'house']" size="xl" style="color: #2fa237;" /> Anasayfa</router-link></div>
      <div class="nav-item"><router-link to="/home"><font-awesome-icon :icon="['fas', 'plate-wheat']" size="xl" style="color: #13a015;" />Beslenme Önerileri</router-link></div>
      <div class="nav-item" @mouseover="showRecipesDropdown = true" @mouseleave="handleMouseLeaveRecipes">
        <router-link to="/tarif"><font-awesome-icon :icon="['fas', 'utensils']" size="xl" style="color: #189a39;" />Sağlıklı Tarifler</router-link>
      
      </div>
      <div class="nav-item"><router-link to="/vki"><font-awesome-icon :icon="['fas', 'calculator']" size="xl" style="color: #189a32;"  /> VKİ Hesapla</router-link></div>
    </header>
    <main class="main">
      <router-view></router-view>

      <div class="accordion-container">
        <h2 class="accordion-title">Sıkça Sorulan Sorular</h2>
        <div class="accordion">
          <div v-for="(item, index) in faqs" :key="index" class="accordion-item" :class="{ active: activeIndex === index }">
            <button class="accordion-btn" @click="toggle(index)">
              {{ item.question }}
              <svg class="accordion-icon" :class="{ active: activeIndex === index }" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 5a1 1 0 00-1 1v6.586l-3.293-3.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0l5-5a1 1 0 00-1.414-1.414L11 12.586V6a1 1 0 00-1-1z" clip-rule="evenodd" />
              </svg>
            </button>
            <div class="accordion-content" :style="{ maxHeight: activeIndex === index ? contentHeight + 'px' : '0px' }">
              <p>{{ item.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchTerm: '',
      showDropdown: false,
      showRecipesDropdown: false,
      activeIndex: null,
      isActive: localStorage.getItem('isActive') === 'true',
      contentHeight: 0,
      faqs: [
        { question: 'Favori tariflerimi nasıl kaydedebilirim?', answer: 'Her tarifin yanında bulunan favori butonuna tıklayarak tariflerinizi favorilerinize ekleyebilirsiniz.' },
        { question: 'Tariflere yorum yapabilir miyim?', answer: 'Evet, tariflere yorum yapabilir ve diğer kullanıcıların yorumlarını okuyabilirsiniz. ' },
        { question: 'VKİ hesaplama nasıl yapılır?', answer: 'VKİ (Vücut Kitle İndeksi) hesaplama aracımız, boyunuzu ve kilonuzu girerek ideal kilonuzu belirlemenize yardımcı olur.' },
      ],
    };
  },
  methods: {
    navigateToSearchResults() {
      if (this.searchTerm.trim() !== '') {
        this.$router.push({ path: '/search-results', query: { q: this.searchTerm } });
      }
    },
    toggle(index) {
      if (this.activeIndex === index) {
        this.activeIndex = null;
      } else {
        this.activeIndex = index;
        this.$nextTick(() => {
          const content = this.$el.querySelectorAll('.accordion-content')[index];
          this.contentHeight = content.scrollHeight;
        });
      }
    },
    handleMouseLeave() {
      setTimeout(() => {
        this.showDropdown = false;
      }, 200);
    },
    handleMouseLeaveRecipes() {
      setTimeout(() => {
        this.showRecipesDropdown = false;
      }, 200);
    },
    logout() {
      localStorage.setItem('isActive', 'false');
      this.isActive = false;
      this.$router.push('/');
    },
  },
};
</script>

<style scoped>
.container {
  font-family: Arial, sans-serif;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px; 
}

.header {
  background-color: #f8f9fa;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 30px;
  display: flex;
  justify-content: space-around; 
  align-items: center;
}

.header .nav-item {
  position: relative;
}

.header .nav-item:not(:last-child)::after {
  content: "";
  position: absolute;
  right: -10px;
  top: 50%;
  transform: translateY(-50%);
  width: 1px;
  height: 24px;
  background-color: #ccc; 
}

.logo img {
  max-height: 70px; 
}

.nav-item {
  margin-right: 20px;
}

.nav-item:last-child {
  margin-right: 0;
}

.nav-item a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
  font-size: 16px;
  padding: 10px;
  transition: background-color 0.3s ease;
}

.nav-item a:hover {
  background-color: #e9ecef;
}

.nav-item a i {
  margin-right: 5px;
}

.login-button {
  position: relative;
  margin-left: 20px; 
}

.login-button i {
  cursor: pointer;
}
.dropdown-menu {
  background-color: #fff;
  border: 1px solid #ccc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: absolute;
  right: 0;
  top: 100%;
  margin-top: 5px;
  z-index: 10;
}

.dropdown-menu a {
  display: block;
  padding: 10px;
  color: #333;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.dropdown-menu a:hover {
  background-color: #e9ecef;
}

.dropdown-menu::before {
  content: "";
  position: absolute;
  top: -10px;
  right: 20px;
  border-width: 0 10px 10px;
  border-style: solid;
  border-color: transparent transparent #fff;
}
.search-bar {
  width: 30%;
}

.accordion-container {
  margin-top: 70px;
  max-width: 800px; /* Akordiyon menü genişliği */
  margin-left: auto;
  margin-right: auto;
  
}

.accordion-title {
  text-align: left;
  font-weight: bold;
  color: #000;
  margin-bottom: 20px;
}

.accordion {
  margin-top: 20px;
}

.accordion-item {
  border-bottom: 1px solid #ccc;
}

.accordion-btn {
  background: none;
  border: none;
  padding: 15px 20px;
  width: 100%;
  text-align: left;
  cursor: pointer;
  position: relative;
}

.accordion-btn:hover {
  background-color: #f9f9f9;
}

.accordion-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.2s ease-out;
}

.accordion-content p {
  margin-top: 0;
  margin-bottom: 20px;
}

.accordion-icon {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  fill: #333;
  width: 20px;
  height: 20px;
  transition: transform 0.2s ease-out;
}

.header-item.active .header-icon {
  transform: translateY(-50%) rotate(180deg);
}


</style>


