<script lang="ts" setup>
  import { useI18n } from 'vue-i18n';

  const { t } = useI18n();
  const gretting = '¡Hola! 👋 Somos E2A Solutions, Transformamos tus ideas en éxito digital. 🚀 Cuéntanos cómo podemos ayudarte con tu proyecto. ¡Escríbenos!';
  const phone = '50369940940';
</script>
<template>
  <a 
    id="cta-contact" 
    :href="`https://web.whatsapp.com/send?phone=${phone}&text=${gretting}`" 
    target="_blank"
    class="inline-flex items-center py-2 border border-transparent rounded-md font-semibold sm:text-base text-sm tracking-normal focus:outline-none focus:ring disabled:opacity-25 w-full justify-center bg-teal focus:ring-gray-500 focus:border-gray-900 transition duration-500 ease-in-out hover:opacity-90 text-white"
  >
    {{ t('contact-us') }}
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 448 512"
      fill="#FFF"
      class="w-10 h-8 ml-2"
    >
      <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
    </svg>
  </a>
</template>