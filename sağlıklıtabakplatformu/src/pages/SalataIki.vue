<template>
  <div class="salata-container">
    <div class="card-container">
      <div class="salata-card">
        <h1 class="salata-title">Mercimek Salatası</h1>
        <img src="@/assets/mercimek2.png" alt="Mercimek Salatası" class="card-image">
      </div>
      <div class="salata-card">
        <h2 class="salata-title">Malzemeler</h2>
        <ul class="ingredient-list">
          <li>• 1 adet marul</li>
          <li>• 1 adet roka</li>
          <li>• 1 adet kırmızı lahana</li>
          <li>• 1 adet havuç</li>
          <li>• 1 adet salatalık</li>
          <li>• 1 adet kırmızı biber</li>
          <li>• 1 adet yeşil biber</li>
          <li>• 1 adet domates</li>
          <li>• 1 adet turp</li>
          <li>• 1 adet yeşil soğan</li>
          <li>• 1 adet limon</li>
          <li>• 1 çay bardağı zeytinyağı</li>
          <li>• Tuz</li>
        </ul>
      </div>
      <div class="salata-card">
        <h2 class="salata-title">Yapılışı</h2>
        <ul class="instruction-list">
          <li>• Tüm malzemeleri yıkayın ve doğrayın.</li>
          <li>• Büyük bir salata kasesine alın.</li>
          <li>• Üzerine zeytinyağı, limon suyu ve tuz ekleyin.</li>
          <li>• Tüm malzemeleri karıştırıp, salatayı buzdolabında dinlendirin ve servis yapın.</li>
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
        {{ showReviews ? 'Yorumları Gizle' : `Yorumları Görüntüle (${filteredReviews.length})` }}
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
  name: 'SalataIki',
  props: {
    salataiki: {
      type: String,
      required: true
    }
  },
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
      return this.reviews.filter(review => review.salata === 'Mercimek Salatası');
    },
    averageRating() {
      const mercimekSalatasiReviews = this.filteredReviews;
      if (mercimekSalatasiReviews.length === 0) return 0;
      const totalRating = mercimekSalatasiReviews.reduce((acc, review) => acc + review.rating, 0);
      return totalRating / mercimekSalatasiReviews.length;
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
          salata: 'Mercimek Salatası'
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
.salata-container {
  margin-top: 30px;
}

.card-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.salata-card {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: left;
}

.salata-title {
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
}

.stars span.active {
  color: gold;
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
