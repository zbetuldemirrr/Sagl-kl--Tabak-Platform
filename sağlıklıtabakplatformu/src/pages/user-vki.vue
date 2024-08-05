<template>
  <div class="bmi-container">
    <img src="@/assets/bmi.png" alt="Resim" class="resim">
    <div class="content">
      <div class="input-group">
        <label for="height">Boy (cm):</label>
        <input type="number" id="height" v-model="height" class="input-field">
      </div>

      <div class="input-group">
        <label for="weight">Kilo (kg):</label>
        <input type="number" id="weight" v-model="weight" class="input-field">
      </div>

      <div class="button-group">
        <button @click="calculateBMI" class="calculate-button">Hesapla</button>
        <button @click="updateValues" class="update-button">Güncelle</button>
        <button @click="clearValues" class="clear-button">Temizle</button>
      </div>
    </div>

    <div class="calculation-result" v-if="bmi !== null">
      <p v-if="bmi">Boy/Kilo İndeksi: {{ bmi }}</p>
      <p v-if="bmi">{{ bmiDescription }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      height: null,
      weight: null,
      gender: '',
      bmi: null
    };
  },
  computed: {
    bmiDescription() {
      if (this.bmi !== null) {
        if (this.bmi < 18.5) {
          return "Çok Zayıfsınız!";
        } else if (this.bmi >= 18.5 && this.bmi < 25) {
          return "Kilonuz Normal.";
        } else if (this.bmi >= 25 && this.bmi < 30) {
          return "Fazla Kilolusunuz.";
        } else if (this.bmi >= 30 && this.bmi < 35) {
          return "1. derece obezite.";
        } else if (this.bmi >= 35 && this.bmi < 40) {
          return "2. derece obezite.";
        } else {
          return "3. derece obezite.";
        }
      }
      return "";
    }
  },
  methods: {
    calculateBMI() {
      if (this.height && this.weight) {
        const heightInMeter = this.height / 100;
        this.bmi = (this.weight / (heightInMeter * heightInMeter)).toFixed(2);
      } else {
        this.bmi = null;
      }
    },
    updateValues() {
      console.log("Values updated");
    },
    clearValues() {
      this.height = null;
      this.weight = null;
      this.gender = '';
      this.bmi = null;
    }
  }
};
</script>

<style scoped>
.bmi-container {
  display: flex;
  align-items: flex-start;
  width: 100%;
  padding: 30px;
  position: relative; 
  margin-left: 50px;
}

.resim {
  width: 40%; 
  margin-right: 100px; 
}

.content {
  flex: 1;
}

.input-group {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  width: 100%;
}

.input-group label {
  margin-right: 10px;
  width: 100px;
}

.input-field {
  width: calc(50% - 110px);
  padding: 8px;
  font-size: 14px;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: #fff;
}

.button-group {
  display: flex;
  justify-content: flex-start;
  align-items: center; /* Yeni eklenen stil */
  width: 100%;
  margin-top: 20px;
}

.button-group button {
  padding: 10px 20px;
  font-size: 14px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px;
}

.calculate-button {
  background-color: #007bff;
  color: #fff;
}

.calculate-button:hover {
  background-color: #0056b3;
}

.update-button {
  background-color: #28a745;
  color: #fff;
}

.update-button:hover {
  background-color: #218838;
}

.clear-button {
  background-color: #dc3545;
  color: #fff;
}

.clear-button:hover {
  background-color: #c82333;
}

.calculation-result {
  position: absolute; 
  bottom: 50px; /* Adjusted value to move the text higher */
  left: 0; 
  width: 100%; 
  padding: 20px;
  text-align: center; /* Yeni eklenen stil */
  font-size: 18px;
  color: #333;
  margin-left: 130px;
}
</style>
