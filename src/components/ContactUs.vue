<script lang="ts" setup>
  import ContactForm from '@/components/ContactForm.vue';
  import { useI18n } from 'vue-i18n';

  const { t } = useI18n();
</script>
<template>
  <div id="contact" class="w-full relative mt-24">
  </div>
  <div class="relative flex lg:flex-row flex-col lg:space-x-6 mt-10">
    <div class="lg:w-1/2 w-full">
      <h2 class="text-gray-300 md:text-xl text-base md:mb-6 mb-2">{{ t('contact-us') }}</h2>
      <h3 class="md:text-5xl text-2xl font-poppins font-bold text-white tracking-wide" v-html="t('contact-us-description', { class: 'text-teal' })"></h3>
      <div class="mt-10">
        <p class="text-gray-300 md:text-base text-sm">{{ t('contact-us-phrase') }}</p>
      </div>
      <div class="mt-10">
        <div class="inline-flex items-center">
          <img src="../assets/icons/email.svg" alt="" class="h-6 w-6 mr-5">
          <a href="mailto:easolutions45@gmail.com?Subject=Interesado%20en%20trabajar%20juntos" class="text-gray-300 underline">easolutions45@gmail.com</a>
        </div>
      </div>
      <div class="mt-10">
        <div class="inline-flex items-center">
          <img src="../assets/icons/phone.svg" alt="" class="h-6 w-6 mr-5">
          <div>
            <a href="tel:+50370080848" class="text-gray-300 block">(503) 70080848</a>
          </div>
        </div>
      </div>
    </div>
    <div class="lg:w-1/2 full lg:mt-0 mt-10">
      <ContactForm />
    </div>
  </div>
</template>