<template>
  <div>
    <div class="colyak-card">
      <h1 class="colyak-title">Çölyak Nedir?</h1>
      <div class="colyak-container">
        <div class="colyak-content">
          <img src="@/assets/colyak2.png" alt="Çölyak" class="colyak-image">
          <p class="colyak-text">
            Çölyak hastalığı, buğday, arpa ve çavdar gibi gluten içeren gıdalara karşı bağışıklık sisteminin anormal tepkisi nedeniyle ortaya çıkan bir bağırsak hastalığıdır. Bu hastalık, gluten içeren yiyecekler tüketildiğinde bağırsaklarda iltihaplanma ve hasara yol açabilir.
          </p>
        </div>
      </div>
    </div>

    <div class="colyak-card">
      <h2 class="colyak-title">Çölyak Hastalarının Tüketebileceği Ana Yemekler</h2>
      <div class="colyak-container">
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

    <div class="colyak-card">
      <h2 class="colyak-title">Çölyak Hastalarının Uzak Durması Gereken Besinler</h2>
      <div class="colyak-container">
        <div class="avoid-list">
          <p><strong>Gluten İçeren Yiyecekler:</strong> Buğday, Arpa, Çavdar</p>
          <p><strong>Unlu Mamuller:</strong> Beyaz ekmek, Makarna, Beyaz unlu mamuller</p>
          <p><strong>Şekerli İçecekler ve Atıştırmalıklar:</strong> Kola, Gazlı içecekler, Şekerli atıştırmalıklar, Bisküvi, Çikolata, Kekler</p>
          <p><strong>İşlenmiş Gıdalar:</strong> Sosis, Salam gibi işlenmiş etler, Hazır çorbalar</p>
          <p><strong>Sakatat:</strong> Karaciğer, Böbrek gibi iç organlar</p>
          <p><strong>Sütlü Ürünler:</strong> Bazı çölyak hastaları süt ve süt ürünlerine de hassasiyet gösterebilir</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ColyakPage',
};
</script>

<style scoped>
.colyak-card {
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 5px;
  margin-top: 20px;
}

.colyak-title {
  margin: 0;
  padding: 20px;
  color:black;
  text-align: left;
  font-size: 20px;
}

.colyak-container {
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: 10px;
}

.colyak-content {
  display: flex;
  align-items: center; /* Resim ve metni dikey olarak hizalar */
}

.colyak-image {
  width: 30%; /* Resmin genişliği */
  border-radius: 10px;
  margin-right: 30px; /* Resim ile metin arasındaki boşluğu ayarlamak için */
}

.colyak-text {
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
