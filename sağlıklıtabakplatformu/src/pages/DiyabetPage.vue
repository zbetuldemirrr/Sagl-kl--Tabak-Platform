<template>
  <div>
    <div class="diyabet-card">
      <h1 class="diyabet-title">Diyabet Nedir?</h1>
      <div class="diyabet-container">
        <div class="diyabet-content">
          <img src="@/assets/diyabet2.png" alt="Diyabet" class="diyabet-image">
          <p class="diyabet-text">
            Bilimsel adı diabetes mellitus olan, diyabet olarak da ifade edilen şeker hastalığı, vücudun yiyecekleri enerjiye dönüştürme şeklini etkileyen, pankreasın yeterince insülin üretememesi veya vücudun onu doğru kullanamaması sonucu kan dolaşımında glukozun birikmesi ile birlikte kanda bulunan şeker düzeyinin yükseldiği uzun süreli, kronik bir hastalıktır. Vücudun ihtiyaç duyduğu enerji temel besin öğeleri protein, yağlar ve karbonhidratlardan sağlanır. Bu besin öğelerinin en önemlisi parçası ‘glukoz’ yani basit şekerdir. Kan, enerji için kullanmak üzere glukozu vücudun tüm hücrelerine taşır.
          </p>
        </div>
      </div>
    </div>

    <div class="diyabet-card">
      <h2 class="diyabet-title">Diyabet Hastalarının Tüketebileceği Ana Yemekler</h2>
      <div class="diyabet-container">
        <div class="meal-list">
          <div class="meal">
            <h3><b>Sabah</b></h3>
            <p>Yulaf ezmesi</p>
            <p>Haşlanmış yumurta</p>
            <p>Kepekli ekmek üzerine peynir</p>
          </div>
          <div class="meal">
            <h3><b>Öğle</b></h3>
            <p>Izgara tavuk</p>
            <p>Kızarmış sebzeler</p>
            <p>Kahverengi pirinç</p>
          </div>
          <div class="meal">
            <h3><b>Akşam</b></h3>
            <p>Balık ızgara</p>
            <p>Kuşkonmaz</p>
            <p>Bulgur pilavı</p>
          </div>
        </div>
      </div>
    </div>

    <div class="diyabet-card">
      <h2 class="diyabet-title">Diyabet Hastalarının Uzak Durması Gereken Besinler</h2>
      <div class="diyabet-container">
        <div class="avoid-list">
          <p><strong>Karbonhidratlar:</strong> Beyaz ekmek, Makarna, Beyaz pirinç</p>
          <p><strong>Şekerli İçecekler ve Atıştırmalıklar:</strong> Tatlı içecekler, Şekerli atıştırmalıklar, Bisküvi ve çikolatalar, Kurabiye ve kekler, Kuru meyveler</p>
          <p><strong>Meyveler:</strong> Üzüm, İncir, Muz, Kavun, Karpuz</p>
          <p><strong>Hayvansal Gıdalar:</strong> Tereyağı, İç yağ, Kuyruk yağı, Salam, Sosis, Sakatat</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DiyabetPage',
};
</script>

<style scoped>
.diyabet-card {
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 5px;
  margin-top: 20px;
}

.diyabet-title {
  margin: 0;
  padding: 20px;
  color:black;
  text-align: left;
  font-size: 20px;
  
}

.diyabet-container {
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: 10px;
}

.diyabet-content {
  display: flex;
  align-items: center; 
}

.diyabet-image {
  width: 30%; 
  border-radius: 10px;
  margin-right: 30px; 
}

.diyabet-text {
  color: #666;
  line-height: 1.6;
  text-align: left;
}

h1, h2, h3 {
  color: #333;
  margin-bottom: 10px;
}

p {
  margin-bottom: 10px;
}

.meal-list {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.meal {
  flex: 0 1 30%;
  text-align: left;
}

.avoid-list {
  width: 100%;
  text-align: left;
}
</style>
