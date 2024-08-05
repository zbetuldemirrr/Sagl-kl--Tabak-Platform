<template>
  <div class="container">
    <h1 class="container-title">Favorilerim</h1>
    <div v-if="favoriteRecipes.length === 0">
      Henüz favorilere eklenmiş bir tarif yok.
    </div>
    <div v-else class="card-container">
      <div v-for="recipe in favoriteRecipes" :key="recipe.name" class="card">
        <div class="favorite-button" @click.stop="toggleFavorite(recipe.name)">
          <span :class="{'favorited': recipe.isFavorite}">♥</span>
        </div>
        <router-link :to="recipe.link" class="card-content">
          <img :src="require(`@/assets/${recipe.image}`)" :alt="recipe.name" class="card-image" />
          <div class="card-title">{{ recipe.displayName }}</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

const API_URL = 'http://localhost:3000';

export default {
  data() {
    return {
      recipes: [],
      favorites: [],
    };
  },
  mounted() {
    this.loadRecipes();
  },
  computed: {
    favoriteRecipes() {
      return this.recipes.filter(recipe => this.favorites.includes(recipe.name));
    }
  },
  methods: {
    loadRecipes() {
      axios.get(`${API_URL}/recipes`)
        .then(response => {
          this.recipes = response.data;
          this.loadFavorites();
        })
        .catch(error => {
          console.error('Error fetching recipes:', error);
        });
    },
    loadFavorites() {
      const currentUser = this.getCurrentUser();
      if (!currentUser.id) {
        return;
      }
      axios.get(`${API_URL}/users/${currentUser.id}`)
        .then(response => {
          this.favorites = response.data.favorites || [];
          this.recipes.forEach(recipe => {
            recipe.isFavorite = this.favorites.includes(recipe.name);
          });
        })
        .catch(error => {
          console.error('Error fetching favorites:', error);
        });
    },
    toggleFavorite(recipeName) {
      const currentUser = this.getCurrentUser();
      if (!currentUser.id) {
        alert('Lütfen favorilere eklemek için giriş yapın.');
        return;
      }

      let favorites = [...this.favorites];
      const recipe = this.recipes.find(r => r.name === recipeName);
      if (favorites.includes(recipeName)) {
        favorites = favorites.filter(favorite => favorite !== recipeName);
        if (recipe) {
          recipe.isFavorite = false;
        }
      } else {
        favorites.push(recipeName);
        if (recipe) {
          recipe.isFavorite = true;
        }
      }

      axios.patch(`${API_URL}/users/${currentUser.id}`, { favorites })
        .then(response => {
          console.log('Favorites updated successfully:', response.data);
          this.favorites = favorites;
        })
        .catch(error => {
          console.error('Error updating favorites:', error);
        });
    },
    getCurrentUser() {
      return JSON.parse(localStorage.getItem('currentUser')) || {};
    }
  },
};
</script>


<style scoped>
.container {
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Sol hizalama */
  margin-top: 30px;
}

.container-title {
  font-size: 24px;
  font-weight: bold;
  color: black;
  margin-bottom: 20px;
  /* Sol hizalama için eklenmiş stil */
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
}

.card {
  width: 30%;
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
  text-align: center;
  transition: transform 0.2s, box-shadow 0.2s;
  position: relative;
}

.card-content {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.card-image {
  width: 100%;
  height: auto;
  flex: 1;
}

.card-title {
  padding: 10px;
  font-size: 18px;
  font-weight: bold;
  background-color: #f8f9fa;
}

.favorite-button {
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 25px;
  cursor: pointer;
  color: grey;
  z-index: 1;
  background-color: white;
  border-radius: 50%;
  padding: 5px;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.favorite-button .favorited {
  color: red;
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
</style>
