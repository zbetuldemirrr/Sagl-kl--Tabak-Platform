<template>
  <div class="container">
    <div class="card-container">
      <template v-for="(recipe, index) in recipes" :key="recipe.name">
        <div v-if="shouldDisplayHeading(index)" class="category-heading">{{ getHeading(index) }}</div>
        <div class="card">
          <div class="favorite-button" @click.stop="toggleFavorite(recipe)">
            <span :class="{'favorited': recipe.isFavorite}">♥</span>
          </div>
          <router-link :to="recipe.link" class="card-content">
            <img :src="require(`@/assets/${recipe.image}`)" :alt="recipe.name" class="card-image" />
            <div class="card-title">{{ recipe.displayName }}</div>
          </router-link>
        </div>
      </template>
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
      headings: ['Salata Çeşitleri', 'Ana Yemekler', 'Çorba Çeşitleri', 'Vegan Yemek Çeşitleri', 'Atıştırmalıklar'] // example headings
    };
  },
  mounted() {
    this.loadRecipes();
  },
  methods: {
    loadRecipes() {
      axios.get(`${API_URL}/recipes`)
        .then(response => {
          this.recipes = response.data.map(recipe => ({
            ...recipe,
            isFavorite: false,
          }));
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
          const favorites = response.data.favorites || [];
          this.recipes.forEach(recipe => {
            recipe.isFavorite = favorites.includes(recipe.name);
          });
        })
        .catch(error => {
          console.error('Error fetching favorites:', error);
        });
    },
    toggleFavorite(recipe) {
      const currentUser = this.getCurrentUser();
      if (!currentUser.id) {
        alert('Lütfen favorilere eklemek için giriş yapın.');
        return;
      }

      const isCurrentlyFavorite = recipe.isFavorite;
      recipe.isFavorite = !recipe.isFavorite;

      let favorites = [];
      this.recipes.forEach(r => {
        if (r.isFavorite) {
          favorites.push(r.name);
        }
      });

      axios.patch(`${API_URL}/users/${currentUser.id}`, { favorites })
        .then(response => {
          console.log('Favorites updated successfully:', response.data);
        })
        .catch(error => {
          console.error('Error updating favorites:', error);
          recipe.isFavorite = isCurrentlyFavorite;
        });
    },
    getCurrentUser() {
      return JSON.parse(localStorage.getItem('currentUser')) || {};
    },
    shouldDisplayHeading(index) {
      return index % 3 === 0;
    },
    getHeading(index) {
      return this.headings[Math.floor(index / 3)];
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
  align-items: center;
  margin-top: 30px;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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
  height: 200px; 
  object-fit: cover; 
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

.category-heading {
  width: 100%;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  margin: 20px 0;
}
</style>
