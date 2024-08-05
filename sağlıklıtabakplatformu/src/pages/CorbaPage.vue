<template>
  <div class="container">
    <div class="card-container">
      <div v-for="recipe in recipes" :key="recipe.name" class="card">
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

export default {
  data() {
    return {
      selectedRecipe: '',
      recipes: [
        { name: 'corbaBir', displayName: 'Çorba Bir', image: 'mercimek.png', link: '/corbabir' },
        { name: 'corbaIki', displayName: 'Çorba İki', image: 'kinoa.png', link: '/corbaiki' },
        { name: 'corbaUc', displayName: 'Çorba Üç', image: 'brokoli.png', link: '/corbauc' },
      ],
    };
  },
   mounted() {
    this.loadFavorites();
  },
  methods: {
    loadFavorites() {
      const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
      this.recipes.forEach(recipe => {
        recipe.isFavorite = favorites.includes(recipe.name);
      });
    },
    toggleFavorite(recipeName) {
      const recipe = this.recipes.find(r => r.name === recipeName);
      if (recipe) {
        recipe.isFavorite = !recipe.isFavorite;
        let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        if (recipe.isFavorite) {
          favorites.push(recipeName);
        } else {
          favorites = favorites.filter(favorite => favorite !== recipeName);
        }
        localStorage.setItem('favorites', JSON.stringify(favorites));
      }
    },
    isFavorite(recipeName) {
      const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
      return favorites.includes(recipeName);
    },
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

