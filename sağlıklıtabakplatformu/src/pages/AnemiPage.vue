<template>
  <div>
    <div class="anemi-card">
      <h1 class="anemi-title">Anemi Nedir?</h1>
      <div class="anemi-container">
        <div class="anemi-content">
          <img src="@/assets/anemi2.png" alt="Anemi" class="anemi-image">
          <p class="anemi-text">
            Kansızlık olarak da bilinen anemi, vücutta dokulara oksijen taşıyacak kadar sağlıklı kırmızı kan hücresinin bulunmaması veya hemoglobin proteinin normalden düşük olması ile ortaya çıkan bir durumdur. Anemi durumu kan testinde düşük hemoglobin veya hematokrit olarak yer alır. Aşırı yorgunluk, el ve ayaklarda soğukluk, kan kaybına bağlı cildin soluklaşması, tırnakların kırılgan hale gelmesi ve nefes darlığı aneminin yaygın belirtileridir. Aneminin en yaygın görülen türü demir eksikliği anemisidir ve geçici olabilmekle birlikte kronik halde alabilir. </p>
        </div>
      </div>
    </div>

    <div class="anemi-card">
      <h2 class="anemi-title">Anemi Hastalarının Tüketebileceği Ana Yemekler</h2>
      <div class="anemi-container">
        <div class="meal-list">
          <div class="meal">
            <h3><b>Sabah</b></h3>
            <p>Yumurta</p>
            <p>Kepekli ekmek</p>
            <p>Taze meyve suyu (portakal, çilek)</p>
          </div>
          <div class="meal">
            <h3><b>Öğle</b></h3>
            <p>Izgara tavuk</p>
            <p>Yeşil yapraklı sebzeler (ıspanak, pazı)</p>
            <p>Kinoalı salata</p>
          </div>
          <div class="meal">
            <h3><b>Akşam</b></h3>
            <p>Balık ızgara (somon, ton balığı)</p>
            <p>Brokoli</p>
            <p>Kepekli makarna</p>
          </div>
        </div>
      </div>
    </div>

    <div class="anemi-card">
      <h2 class="anemi-title">Anemi Hastalarının Uzak Durması Gereken Besinler</h2>
      <div class="anemi-container">
        <div class="avoid-list">
          <p><strong>Demir Emilimini Engelleyen Yiyecekler:</strong> Çay, Kahve, Süt ve süt ürünleri</p>
          <p><strong>Fitat İçeren Gıdalar:</strong> Tam tahıllı ekmekler, Brüksel lahanası, Ispanak (fazla tüketildiğinde)</p>
          <p><strong>Yüksek Lifli Gıdalar:</strong> Yulaf kepeği, Kepekli tahıllar, Kurubaklagiller (fasulye, mercimek)</p>
          <p><strong>Alkol:</strong> Alkol tüketimi, demir emilimini olumsuz etkileyebilir</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AnemiPage',
};
</script>

<style scoped>
.anemi-card {
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 5px;
  margin-top: 20px;
}

.anemi-title {
  margin: 0;
  padding: 20px;
  color: black;
  text-align: left;
  font-size: 20px;
}

.anemi-container {
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: 10px;
}

.anemi-content {
  display: flex;
  align-items: center; /* Resim ve metni dikey olarak hizalar */
}

.anemi-image {
  width: 30%; /* Resmin genişliği */
  border-radius: 10px;
  margin-right: 30px; /* Resim ile metin arasındaki boşluğu ayarlamak için */
}

.anemi-text {
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
