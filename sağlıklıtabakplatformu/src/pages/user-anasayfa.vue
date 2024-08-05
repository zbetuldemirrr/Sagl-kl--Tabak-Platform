<template>
  <div class="image-container">
    <img src="@/assets/anasayfa.png" alt="Ana Sayfa Resmi" class="full-width-image">
  </div>
</template>

<script>
export default {
  name: 'UserAnasayfa',
};
</script>

<style scoped>
.image-container {
  display: flex;
  justify-content: center; /* Resmi yatay olarak ortalar */
  align-items: flex-start; /* Resmi üst kısmına hizalar */

  margin-top: 20px;
}

.image-container img {
  max-width: 100%; /* Resmin genişliği %100'ü geçmez */
  height: auto; /* Orijinal yüksekliği korur */
}
</style>

