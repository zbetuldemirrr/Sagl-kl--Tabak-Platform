<template>
  <div>
    <div class="kolestrol-card">
      <h1 class="kolestrol-title">Kolestrol Nedir?</h1>
      <div class="kolestrol-container">
        <div class="kolestrol-content">
          <img src="@/assets/kolestrol2.png" alt="Kolestrol" class="kolestrol-image">
          <p class="kolestrol-text">
            Kolesterol, karaciğer tarafından üretilen, vücudun hücre oluşturmak, vitamin ve diğer hormonları üretmek için kullandığı mumsu, yağ benzeri bir maddedir. Vücudun hormonları, D vitaminini ve yiyecekleri sindirmesine yardımcı olan maddeleri üretmek kolesterole ihtiyacı vardır. Vücut ihtiyaç duyulan bu  kolesterolü üretir. Ancak vücut kolesterole ihtiyaç duysa da kanda çok fazla yer alması kalp hastalıkları riskinin artmasına neden olabilir. Bu nedenle kolesterol dengesinin sağlanması sağlık açısından önemlidir.          </p>
        </div>
      </div>
    </div>

    <div class="kolestrol-card">
  <h2 class="kolestrol-title">Kolestrol Hastalarının Tüketebileceği Ana Yemekler</h2>
  <div class="kolestrol-container">
    <div class="meal-list">
      <div class="meal">
        <h3><b>Sabah</b></h3>
        <p>Meyve salatası (portakal, çilek, muz)</p>
        <p>Badem ezmesi ile kepekli ekmek</p>
        <p>Yeşil çay</p>
      </div>
      <div class="meal">
        <h3><b>Öğle</b></h3>
        <p>Izgara somon</p>
        <p>Quinoa salatası (domates, salatalık, yeşilliklerle)</p>
        <p>Zeytinyağlı ıspanak</p>
      </div>
      <div class="meal">
        <h3><b>Akşam</b></h3>
        <p>Tavuk göğsü ızgara</p>
        <p>Mevsim yeşillikleri (brokoli, karnabahar)</p>
        <p>Kepekli bulgur pilavı</p>
      </div>
    </div>
  </div>
</div>


    <div class="kolestrol-card">
      <h2 class="kolestrol-title">Kolestrol Hastalarının Uzak Durması Gereken Besinler</h2>
      <div class="kolestrol-container">
        <div class="avoid-list">
          <p><strong>Doymuş Yağlar:</strong> Tereyağı, Katı margarinler, Kırmızı et</p>
          <p><strong>Trans Yağlar:</strong> Hazır atıştırmalıklar, Fast food, Kızartmalar</p>
          <p><strong>Yüksek Kolesterol İçeren Yiyecekler:</strong> Karaciğer, Yumurta sarısı, Midye</p>
          <p><strong>Şekerli İçecekler ve Atıştırmalıklar:</strong> Kola, Gazlı içecekler, Şekerli atıştırmalıklar, Bisküvi, Çikolata, Kekler</p>
          <p><strong>İşlenmiş Gıdalar:</strong> Sosis, Salam gibi işlenmiş etler, Hazır çorbalar</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'KolestrolPage',
};
</script>

<style scoped>
.kolestrol-card {
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 5px;
  margin-top: 20px;
}

.kolestrol-title {
  margin: 0;
  padding: 20px;
  color:black;
  text-align: left;
  font-size: 20px;
}

.kolestrol-container {
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: 10px;
}

.kolestrol-content {
  display: flex;
  align-items: center; /* Resim ve metni dikey olarak hizalar */
}

.kolestrol-image {
  width: 30%; /* Resmin genişliği */
  border-radius: 10px;
  margin-right: 30px; /* Resim ile metin arasındaki boşluğu ayarlamak için */
}

.kolestrol-text {
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
