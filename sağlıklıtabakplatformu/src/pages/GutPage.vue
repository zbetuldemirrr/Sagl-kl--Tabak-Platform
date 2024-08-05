<template>
  <div>
    <div class="gut-card">
      <h1 class="gut-title">Gut Nedir?</h1>
      <div class="gut-container">
        <div class="gut-content">
          <img src="@/assets/gut2.png" alt="Gut" class="gut-image">
          <p class="gut-text">
            Gut hastalığı, eklemlerin içinde ve çevresinde ürik asit birikimi yanı sıra kanda aşırı miktarda ürik asit bulunmasıyla ortaya çıkan metabolik bir hastalıktır. Eklemlerde ağrılı bir iltihaplanmaya neden olur, genellikle ayak başparmağında veya alt ekstremitelerde yaşanır. Toplumun %5'ni etkilediği bilinen gut hastalığı  gut hastalığı sanıldığının aksine yalnızca et fazla et tüketimi ile ortaya çıkan bir hastalık değildir. Bu hastalıkta kişinin metabolizmasında ki sorunlar, farklı hastalıkları beslenme alışkanlıklarında ki düzensizlikler de gut hastalığına neden olur.           </p>
        </div>
      </div>
    </div>

    <div class="gut-card">
      <h2 class="gut-title">Gut Hastalarının Tüketebileceği Ana Yemekler</h2>
      <div class="gut-container">
        <div class="meal-list">
          <div class="meal">
            <h3><b>Sabah</b></h3>
            <p>Yulaf ezmesi</p>
            <p>Az yağlı yoğurt</p>
            <p>Meyve salatası</p>
          </div>
          <div class="meal">
            <h3><b>Öğle</b></h3>
            <p>Izgara tavuk</p>
            <p>Buharda pişmiş sebzeler</p>
            <p>Kinoalı salata</p>
          </div>
          <div class="meal">
            <h3><b>Akşam</b></h3>
            <p>Balık ızgara (alabalık, somon)</p>
            <p>Yeşil salata</p>
            <p>Kahverengi pirinç pilavı</p>
          </div>
        </div>
      </div>
    </div>

    <div class="gut-card">
      <h2 class="gut-title">Gut Hastalarının Uzak Durması Gereken Besinler</h2>
      <div class="gut-container">
        <div class="avoid-list">
          <p><strong>Purinden Zengin Gıdalar:</strong> Karaciğer, Böbrek, İşkembe gibi organ etleri</p>
          <p><strong>Yüksek Fruktozlu Gıdalar:</strong> Gazlı içecekler, Şekerli içecekler, Hazır meyve suları</p>
          <p><strong>Deniz Ürünleri:</strong> Midye, Karides, Hamsi, Sardalya</p>
          <p><strong>Kırmızı Et:</strong> Dana eti, Kuzu eti, Sosis, Salam</p>
          <p><strong>Alkol:</strong> Bira, Kırmızı şarap, Sert içkiler</p>
          <p><strong>Şekerli Atıştırmalıklar:</strong> Kekler, Kurabiyeler, Tatlılar</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GutPage',
};
</script>

<style scoped>
.gut-card {
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 5px;
  margin-top: 20px;
}

.gut-title {
  margin: 0;
  padding: 20px;
  color:black;
  text-align: left;
  font-size: 20px;
}

.gut-container {
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: 10px;
}

.gut-content {
  display: flex;
  align-items: center; /* Resim ve metni dikey olarak hizalar */
}

.gut-image {
  width: 30%; /* Resmin genişliği */
  border-radius: 10px;
  margin-right: 30px; /* Resim ile metin arasındaki boşluğu ayarlamak için */
}

.gut-text {
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
