<template>
  <div>
    <div class="hipertansiyon-card">
      <h1 class="hipertansiyon-title">Hipertansiyon Nedir?</h1>
      <div class="hipertansiyon-container">
        <div class="hipertansiyon-content">
          <img src="@/assets/hipertansiyon2.png" alt="Hipertansiyon" class="hipertansiyon-image">
          <p class="hipertansiyon-text">
            Kalpten pompalanan kanın damarlara uyguladığı yüksek basınç, tansiyon olarak adlandırılır. 18 yaşın üzerindeki, sağlıklı bireylerde normal kabul edilen tansiyon değeri 120 mmHg ile 80 mmHg arasındadır. Bu değerlerin normalden yüksek olması durumunda ise hipertansiyon rahatsızlığından söz edilebilir.
            <br>Tansiyon yüksekliği hem genetik hem de çevresel faktörlere bağlı olarak ortaya çıkabilir. Bununla birlikte kişinin beslenme düzeni ve yaşam tarzı ile de doğrudan ilgilidir. <br>

</p>
        </div>
      </div>
    </div>

    <div class="hipertansiyon-card">
      <h2 class="hipertansiyon-title">Hipertansiyon Hastalarının Tüketebileceği Ana Yemekler</h2>
      <div class="hipertansiyon-container">
        <div class="meal-list">
          <div class="meal">
            <h3><b>Sabah</b></h3>
            <p>Yeşil çay</p>
            <p>Meyve salatası (çilek, kivi, muz)</p>
            <p>Badem veya ceviz</p>
          </div>
          <div class="meal">
            <h3><b>Öğle</b></h3>
            <p>Izgara somon</p>
            <p>Yeşil mercimek çorbası</p>
            <p>Sebzeli buğday salatası</p>
          </div>
          <div class="meal">
            <h3><b>Akşam</b></h3>
            <p>Organik tavuk göğsü</p>
            <p>Izgara sebzeler (patlıcan, kabak, biber)</p>
            <p>Kinoa pilavı</p>
          </div>
        </div>
      </div>
    </div>

    <div class="hipertansiyon-card">
  <h2 class="hipertansiyon-title">Hipertansiyon Hastalarının Uzak Durması Gereken Besinler</h2>
  <div class="hipertansiyon-container">
    <div class="avoid-list">
      <p><strong>Yüksek Sodyum İçeren Yiyecekler:</strong> Hazır çorbalar, konserve sebzeler, işlenmiş et ürünleri</p>
      <p><strong>Yağlı ve Kızartılmış Gıdalar:</strong> Kızarmış patates, fast food ürünleri</p>
      <p><strong>Şekerli İçecekler:</strong> Kola, gazlı içecekler, şekerli meyve suları</p>
      <p><strong>Alkol:</strong> Özellikle fazla tüketildiğinde tansiyonu yükseltebilir</p>
      <p><strong>Kafein:</strong> Kola, kahve gibi kafein içeren içecekler, aşırı kafein tansiyonu artırabilir</p>
      <p><strong>İşlenmiş Et Ürünleri:</strong> Salam, sosis, pastırma gibi işlenmiş etler</p>
      <p><strong>Katı Yağlar:</strong> Tereyağı, margarin</p>
      <p><strong>Tuzlu Atıştırmalıklar:</strong> Tuzlu krakerler, cipsler , kuruyemiş</p>
      <p><strong>Tatlılar:</strong> Kek, pasta, şekerli atıştırmalıklar</p>
     
      
    </div>
  </div>
</div>

  </div>
</template>

<script>
export default {
  name: 'HipertansiyonPage',
};
</script>

<style scoped>
.hipertansiyon-card {
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 5px;
  margin-top: 20px;
}

.hipertansiyon-title {
  margin: 0;
  padding: 20px;
  color:black;
  text-align: left;
  font-size: 20px;
  
}

.hipertansiyon-container {
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: 10px;
}

.hipertansiyon-content {
  display: flex;
  align-items: center; /* Resim ve metni dikey olarak hizalar */
}

.hipertansiyon-image {
  width: 30%; /* Resmin genişliği */
  border-radius: 10px;
  margin-right: 30px; /* Resim ile metin arasındaki boşluğu ayarlamak için */
}

.hipertansiyon-text {
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
