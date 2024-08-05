<template>
  <div class="background-container">
    <div class="signup-form">
      <h2>Kaydol</h2>
      <form @submit.prevent="signup" v-if="!isRegistered">
        <div class="form-group">
          <label for="name">Ad:</label>
          <input type="text" id="name" v-model="name" required>
        </div>
        <div class="form-group">
          <label for="surname">Soyadı:</label>
          <input type="text" id="surname" v-model="surname" required>
        </div>
        <div class="form-group">
          <label for="email">E-posta:</label>
          <input type="email" id="email" v-model="email" required>
        </div>
        <div class="form-group">
          <label for="password">Şifre:</label>
          <input type="password" id="password" v-model="password" required>
        </div>
        <div class="form-group">
          <label for="gender">Cinsiyet:</label>
          <select id="gender" v-model="gender" required>
            <option value="woman">Kadın</option>
            <option value="men">Erkek</option>
          </select>
        </div>
        <div class="form-group">
          <label for="birthdate">Doğum Tarihi:</label>
          <div class="birthdate-selects">
            <select v-model="birthDay" required>
              <option disabled value="">Gün</option>
              <option v-for="day in 31" :key="day" :value="day">{{ day }}</option>
            </select>
            <select v-model="birthMonth" required>
              <option disabled value="">Ay</option>
              <option v-for="(month, index) in months" :key="index" :value="index + 1">{{ month }}</option>
            </select>
            <select v-model="birthYear" required>
              <option disabled value="">Yıl</option>
              <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
            </select>
          </div>
        </div>
        <button type="submit">Kaydol</button>
      </form>
      <div v-else>
        <p>Kayıt başarılı! Lütfen giriş yapmak için aşağıdaki butona tıklayın.</p>
        <button @click="redirectToLoginForm">Giriş Yap</button>
      </div>
      <p v-if="error">Kayıt başarısız oldu: {{ error }}</p>
      <p class="login-text" v-if="!isRegistered">Zaten bir hesabınız var mı? <button @click="redirectToLoginForm">Giriş Yap</button></p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      name: '',
      surname: '',
      email: '',
      password: '',
      gender: '',
      birthDay: '',
      birthMonth: '',
      birthYear: '',
      isRegistered: false,
      error: '',
      months: [
        'Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran',
        'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'
      ],
      years: Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i)
    };
  },
  methods: {
    async signup() {
      const userInfo = {
        name: this.name,
        surname: this.surname,
        email: this.email,
        password: this.password,
        gender: this.gender,
        birthDate: `${this.birthYear}-${String(this.birthMonth).padStart(2, '0')}-${String(this.birthDay).padStart(2, '0')}`
      };

      try {
        const response = await axios.get('http://localhost:3000/users');
        const users = response.data;

        for (let user of users) {
          if (user.email === this.email) {
            throw new Error('E-posta zaten kayıtlı.');
          }
        }

        await axios.post('http://localhost:3000/users', userInfo);
        this.isRegistered = true;
        this.error = '';
      } catch (error) {
        this.error = error.message;
      }
    },
    redirectToLoginForm() {
      this.$router.push({ name: 'login' });
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

.signup-form {
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

.birthdate-selects {
  display: flex;
  gap: 10px;
}

.birthdate-selects select {
  width: auto;
  flex-grow: 1;
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

.login-text {
  margin-top: 20px;
}
</style>
