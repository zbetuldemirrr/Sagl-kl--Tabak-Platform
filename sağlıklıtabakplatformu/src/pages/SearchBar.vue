<template>
  <div class="search-bar">
    <input type="text" v-model="searchTerm" @input="search" placeholder="Ara...">
    <ul v-if="searchResults.length">
      <li v-for="result in searchResults" :key="result.id" @click="navigateTo(result)">
        {{ result.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      searchTerm: '',
      searchResults: []
    };
  },
  props: ['recipes', 'diseases'],
  methods: {
    async search() {
      const searchTerm = this.searchTerm.toLowerCase().trim();
      if (searchTerm === '') {
        this.searchResults = [];
        return;
      }

      try {
        // Perform the search via Axios API call
        const response = await axios.get(`http://your-json-server-endpoint/search?q=${searchTerm}`);
        this.searchResults = response.data;
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    },
    navigateTo(result) {
      // Handle navigation within the dashboard or specific components
      this.$emit('navigate', result);
    }
  }
};
</script>

<style scoped>
.search-bar {
  position: relative;
  width: 100%;
}

.search-bar input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.search-bar ul {
  position: absolute;
  width: 100%;
  background: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  list-style: none;
  padding: 0;
  margin: 0;
  max-height: 200px;
  overflow-y: auto;
  z-index: 10;
}

.search-bar li {
  padding: 10px;
  cursor: pointer;
}

.search-bar li:hover {
  background-color: #f0f0f0;
}
</style>
