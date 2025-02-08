<script lang="ts" setup>
  const gretting = '¡Hola! 👋 Somos E2A Solutions, Transformamos tus ideas en éxito digital. 🚀 Cuéntanos cómo podemos ayudarte con tu proyecto. ¡Escríbenos!';
  const phone = '50369940940';
</script>
<template>
  <div>
    <div class="about">
      <a 
        id="cta-fb" 
        class="bg_links social facebook" 
        href="https://www.facebook.com/profile.php?id=100091637455145"
        target="_blank"
      >
        <span class="icon"></span>
      </a>
      <a 
        id="cta-instagram"
        class="bg_links social instagram"
        href="https://www.instagram.com/e2a_solutions/"
        target="_blank"
      >
        <span class="icon"></span>
      </a>
      <a 
        id="cta-whatsapp" 
        class="bg_links social whatsapp" 
        :href="`https://web.whatsapp.com/send?phone=${phone}&text=${gretting}`" 
        target="_blank"
      >
        <span class="icon"></span>
      </a>
      <a id="cta-icon" class="bg_links logo" href="#"></a>
    </div>
  </div>
</template>