<template>
  <div class="background-container">
    <div class="login-form">
      <b>Giriş Yap</b>
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="email">E-posta:</label>
          <input type="email" id="email" v-model="email" required>
        </div>
        <div class="form-group">
          <label for="password">Şifre:</label>
          <input type="password" id="password" v-model="password" required>
        </div>
        <button type="submit">Giriş Yap</button>
      </form>
      <p class="signup-text">Hesabınız yok mu? <router-link :to="{ name: 'signup' }"><button class="signup-button">Kaydol</button></router-link></p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

const API_URL = 'http://localhost:3000';

export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.get(`${API_URL}/users`);
        const users = response.data;

        let userFound = false;

        for (let user of users) {
          if (user.email === this.email && user.password === this.password) {
            userFound = true;
            console.log('Giriş yapıldı:', this.email);
            alert('Giriş başarılı!');
            localStorage.setItem('isActive', 'true');
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.$router.push({ name: 'Anasayfa' });
            break;
          }
        }

        if (!userFound) {
          throw new Error('Geçersiz kimlik bilgileri. Lütfen tekrar deneyin.');
        }
      } catch (error) {
        alert(error.message);
      }
    }
  }
};
</script>

<style scoped>
.background-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url('@/assets/arkaplan.png');
  background-size: cover;
  background-position: center;
}

.login-form {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-top: 100px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input[type="text"],
input[type="email"],
input[type="password"],
select {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 10px 20px;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #0056b3;
}

.signup-text {
  margin-top: 20px;
}
</style>
