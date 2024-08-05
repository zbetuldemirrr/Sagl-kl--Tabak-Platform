<template>
  <div class="profile-wrapper">
    <div class="profile-image-container">
      <img class="profile-image" src="@/assets/user.png" alt="Profil Resmi">
    </div>
    <div class="profile-container">
      <div class="profile-content">
        <h2>Bilgilerim</h2>
        <div class="profile-details">
          <div v-if="editMode">
            <form @submit.prevent="saveProfile">
              <p><strong>Email:</strong> <input type="email" v-model="user.email" required></p>
              <p><strong>İsim:</strong> <input type="text" v-model="user.name" required></p>
              <p><strong>Soyisim:</strong> <input type="text" v-model="user.surname" required></p>
              <p><strong>Doğum Tarihi:</strong> <input type="date" v-model="user.birthDate" required></p>
              <p><strong>Cinsiyet:</strong>
                <select v-model="user.gender" required>
                  <option value="men">Erkek</option>
                  <option value="woman">Kadın</option>
                  <option value="other">Diğer</option>
                </select>
              </p>
              <button type="submit">Kaydet</button>
              <button type="button" @click="cancelEdit">İptal</button>
            </form>
          </div>
          <div v-else>
            <p><strong>Email:</strong> {{ user.email }}</p>
            <p><strong>İsim:</strong> {{ user.name }}</p>
            <p><strong>Soyisim:</strong> {{ user.surname }}</p>
            <p><strong>Yaş:</strong> {{ computedAge }}</p>
            <p><strong>Cinsiyet:</strong> {{ user.gender }}</p>
            <button @click="editProfile">Güncelle</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

const API_URL = 'http://localhost:3000';

export default {
  name: 'UserProfile',
  data() {
    return {
      editMode: false,
      user: {}
    };
  },
  mounted() {
    this.loadUserProfile();
  },
  computed: {
    computedAge() {
      if (!this.user.birthDate) return '';
      const birthDate = new Date(this.user.birthDate);
      const ageDifMs = Date.now() - birthDate.getTime();
      const ageDate = new Date(ageDifMs);
      return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
  },
  methods: {
    loadUserProfile() {
      const currentUser = this.getCurrentUser();
      if (!currentUser.id) {
        alert('Kullanıcı bilgileri bulunamadı.');
        return;
      }
      axios.get(`${API_URL}/users/${currentUser.id}`)
        .then(response => {
          this.user = response.data;
        })
        .catch(error => {
          console.error('Error fetching user profile:', error);
        });
    },
    editProfile() {
      this.editMode = true;
    },
    saveProfile() {
      const currentUser = this.getCurrentUser();
      if (!currentUser.id) {
        alert('Güncelleme yapılamıyor. Kullanıcı bilgileri bulunamadı.');
        return;
      }
      axios.patch(`${API_URL}/users/${currentUser.id}`, this.user)
        .then(response => {
          this.user = response.data;
          localStorage.setItem('currentUser', JSON.stringify(this.user));
          this.editMode = false;
          alert('Profil başarıyla güncellendi.');
        })
        .catch(error => {
          console.error('Error updating profile:', error);
          alert('Profil güncellenirken bir hata oluştu.');
        });
    },
    cancelEdit() {
      this.editMode = false;
      this.loadUserProfile();
    },
    getCurrentUser() {
      return JSON.parse(localStorage.getItem('currentUser')) || {};
    }
  }
};
</script>

<style scoped>
.profile-wrapper {
  display: flex;
  align-items: flex-start;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.profile-image-container {
  flex-shrink: 0;
  margin-right: 40px;
}

.profile-image {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  object-fit: cover;
}

.profile-container {
  flex-grow: 1;
  max-width: 700px;
  padding: 40px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.profile-content {
  flex-grow: 1;
}

h2 {
  text-align: left;
  color: #333;
  margin-bottom: 20px;
}

.profile-details {
  font-size: 16px;
  line-height: 1.5;
  color: #555;
}

.profile-details p {
  margin-bottom: 20px;
  display: flex;
  align-items: center;
}

.profile-details strong {
  width: 120px;
  color: #000;
}

button {
  display: inline-block;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #0056b3;
}

input,
select {
  padding: 5px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  flex-grow: 1;
}
</style>
