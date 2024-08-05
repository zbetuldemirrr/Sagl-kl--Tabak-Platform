<template>
  <div class="vegan-container">
    <div class="card-container">
      <div class="vegan-card">
        <h1 class="vegan-title">Vegan Karabuğday Ekmeği</h1>
        <img src="@/assets/ekmek2.png" alt="Vegan Ekmek" class="card-image">
      </div>
      <div class="vegan-card">
        <h2 class="vegan-title">Malzemeler</h2>
        <ul class="ingredient-list">
        <li>• 2 su bardağı karabuğday unu</li>
        <li>• 1 su bardağı badem unu</li>
        <li>• 1/2 su bardağı tapioka unu</li>
        <li>• 1 yemek kaşığı öğütülmüş keten tohumu</li>
        <li>• 1 tatlı kaşığı kabartma tozu</li>
        <li>• 1 tatlı kaşığı tuz</li>
        <li>• 1 3/4 su bardağı badem sütü (veya herhangi bir bitkisel süt)</li>
        <li>• 1 yemek kaşığı elma sirkesi</li>
        <li>• 2 yemek kaşığı akçaağaç şurubu</li>
        <li>• 3 yemek kaşığı zeytinyağı</li>
      </ul>
    </div>
    <div class="vegan-card">
      <h2 class="vegan-title">Yapılışı</h2>
      <ul class="instruction-list">
        <li>• Fırını 175°C (350°F) ön ısıtın ve ekmek kalıbını yağlayın.</li>
        <li>• Bir kasede badem sütü ve elma sirkesini karıştırın. 5 dakika bekletin.</li>
        <li>• Başka bir kasede karabuğday unu, badem unu, tapioka unu, keten tohumu, kabartma tozu ve tuzu karıştırın.</li>
        <li>• Akçaağaç şurubu ve zeytinyağını badem sütü karışımına ekleyin.</li>
        <li>• Islak malzemeleri kuru malzemelere ekleyin ve karışana kadar karıştırın.</li>
        <li>• Karışımı hazırladığınız kalıba dökün ve üstü düzeltin.</li>
        <li>• 45-50 dakika veya ortası bıçakla temiz çıkana kadar fırınlayın.</li>
        <li>• Kalıpta 10 dakika soğumaya bırakın, sonra tel rafa alın ve tamamen soğuyana kadar bekletin.</li>
        <li>• Dilimleyin ve servis yapın.</li>
      </ul>
      </div>

      <div class="average-rating">
        Puan: {{ averageRating.toFixed(1) }} ★
      </div>
    </div>

    <div class="comment-section">
      <h2 class="rating-title">Yorum Yap ve Puan Ver</h2>
      <textarea v-model="comment" placeholder="Yorumunuzu buraya yazın"></textarea>
      <div class="stars">
        <span v-for="star in 5" :key="star" @click="setRating(star)" :class="{'active': rating >= star}">
          ★
        </span>
      </div>
      <button class="submit-button" @click="submitReview">Gönder</button>
      <button class="toggle-reviews-button" @click="toggleShowReviews">
        {{ showReviews ? 'Yorumları Gizle' : 'Yorumları Görüntüle' }} ({{ filteredReviews.length }})
      </button>
    </div>

    <div class="reviews" v-if="showReviews">
      <div v-for="review in filteredReviews" :key="review.id" class="review">
        <div class="review-header">
          <p><strong>Kullanıcı: </strong>{{ review.username }}</p>
          <p><strong>Puan: </strong>{{ review.rating }} ★</p>
        </div>
        <p>{{ review.comment }}</p>
        <button v-if="isCurrentUser(review)" @click="confirmDelete(review.id)">Sil</button>
      </div>
      <div class="show-more-reviews" v-if="filteredReviews.length > reviewsToShow">
        <button @click="showMoreReviews"><b>Daha fazla yorum gör</b></button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

const API_URL = 'http://localhost:3000'; // JSON Server URL

export default {
  name: 'VeganUc',
  data() {
    return {
      comment: '',
      rating: 0,
      reviews: [],
      reviewsToShow: 3,
      showReviews: false,
      currentUser: JSON.parse(localStorage.getItem('currentUser')) || { username: 'Anonymous', id: null },
      reviewToDelete: null,
    };
  },
  computed: {
    filteredReviews() {
      return this.reviews.filter(review => review.tarif === 'Vegan Ekmek');
    },
    averageRating() {
      const corbaReviews = this.filteredReviews;
      if (corbaReviews.length === 0) return 0;
      const totalRating = corbaReviews.reduce((acc, review) => acc + review.rating, 0);
      return totalRating / corbaReviews.length;
    },
  },
  methods: {
    setRating(star) {
      this.rating = star;
    },
    submitReview() {
      if (this.comment && this.rating) {
        const newReview = {
          id: Date.now(),
          comment: this.comment,
          rating: this.rating,
          username: `${this.currentUser.name} ${this.currentUser.surname}`,
          userId: this.currentUser.id,
          tarif: 'Vegan Ekmek'
        };
        axios.post(`${API_URL}/reviews`, newReview)
          .then(response => {
            this.reviews.push(response.data);
            this.comment = '';
            this.rating = 0;
          })
          .catch(error => {
            console.error('Error submitting review:', error);
          });
      } else {
        alert('Lütfen yorum yapın ve puan verin.');
      }
    },
    confirmDelete(reviewId) {
      this.reviewToDelete = reviewId;
      if (confirm('Yorumu silmek istediğinize emin misiniz?')) {
        this.deleteReview(reviewId);
      } else {
        this.reviewToDelete = null;
      }
    },
    deleteReview(reviewId) {
      console.log(`Deleting review with ID: ${reviewId}`);
      axios.delete(`${API_URL}/reviews/${reviewId}`)
        .then(() => {
          this.reviews = this.reviews.filter(review => review.id !== reviewId);
          this.reviewToDelete = null;
        })
        .catch(error => {
          console.error('Error deleting review:', error.response ? error.response.data : error.message);
        });
    },
    isCurrentUser(review) {
      return review.userId === this.currentUser.id;
    },
    showMoreReviews() {
      this.reviewsToShow += 3;
    },
    toggleShowReviews() {
      this.showReviews = !this.showReviews;
    },
    fetchReviews() {
      axios.get(`${API_URL}/reviews`)
        .then(response => {
          this.reviews = response.data;
        })
        .catch(error => {
          console.error('Error fetching reviews:', error);
        });
    },
  },
  mounted() {
    this.fetchReviews();
  },
};
</script>

<style scoped>
.vegan-container {
  margin-top: 30px;
}

.card-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.vegan-card {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: left;
}

.vegan-title {
  margin: 0;
  padding: 20px;
  color: #333;
  text-align: left;
  font-size: 20px;
  font-weight: bold;
  border-bottom: 2px solid #dd4410;
}

.ingredient-list,
.instruction-list {
  padding-left: 20px;
  color: #555;
  font-size: 18px;
  line-height: 1.6;
}

.card-image {
  width: 50%;
  display: block;
  margin: 0 auto;
  border-radius: 10px;
  height: auto;
  margin-top: 10px;
}

.average-rating {
  color: #dd4410;
  font-size: 20px;
  margin-top: 10px;
}

.comment-section {
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: 30px;
  text-align: center;
  border: 1px solid #e1e4e8;
}

.rating-title {
  font-size: 24px;
  color: #dd4410;
  margin-bottom: 20px;
}

textarea {
  width: 100%;
  padding: 25px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  resize: none;
  font-size: 16px;
  color: #333;
}

.stars {
  display: flex;
  gap: 5px;
  justify-content: center;
  margin-bottom: 10px;
}

.stars span {
  font-size: 24px;
  cursor: pointer;
  color: #ddd;
}

.stars span.active {
  color: #dd4410;
}

.submit-button,
.toggle-reviews-button {
  background-color: #28a745;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin: 10px 5px;
  font-size: 16px;
}

.submit-button:hover,
.toggle-reviews-button:hover {
  background-color: #218838;
}

.toggle-reviews-button {
  background-color: #dd4410;
}

.toggle-reviews-button:hover {
  background-color: #c82333;
}

.reviews {
  margin-top: 20px;
}

.review {
  padding: 10px;
  border-bottom: 1px solid #ccc;
  margin-bottom: 10px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.review-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.review-header p {
  margin: 0;
}

.review p {
  text-align: left;
  margin-top: 5px;
}

.review button {
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
}

.review button:hover {
  background-color: #c82333;
}

.show-more-reviews {
  text-align: center;
}
</style>
