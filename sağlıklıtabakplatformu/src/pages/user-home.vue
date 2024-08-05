<template>
  <div class="container">
    <h1 class="container-title">Beslenme Önerileri</h1>
    <div class="card-container">
      <router-link v-for="disease in diseases" :key="disease.name" :to="disease.link" class="card">
        <div class="card-content">
          <img :src="getImageUrl(disease.image)" :alt="disease.name" class="card-image" />
          <div class="card-title">{{ disease.displayName }}</div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      diseases: [],
    };
  },
  created() {
    this.fetchDiseases();
  },
  methods: {
    fetchDiseases() {
      axios.get('http://localhost:3000/diseases')
        .then(response => {
          this.diseases = response.data;
        })
        .catch(error => {
          console.error('Error fetching diseases:', error);
        });
    },
    getImageUrl(imageName) {
      try {
        return require(`@/assets/${imageName}`);
      } catch (error) {
        console.error('Error loading image:', error);
        return ''; // Return a default image or empty string if image not found
      }
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
  align-items: flex-start;
  margin-top: 30px;
}

.container-title {
  font-size: 24px;
  font-weight: bold;
  color: black;
  margin-bottom: 20px;
  margin-left: 25px;
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
}

.card a {
  text-decoration: none;
  color: inherit;
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

.card:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
</style>
