<script lang="ts" setup>
  import { useI18n } from 'vue-i18n';
  import Levitate from '@/components/Levitate.vue';

  const { t } = useI18n();
</script>

<template>
  <div id="why-we" class="w-full relative mt-12 pr-5">
    <div class="lg:w-1/2 w-full">
      <h2 class="text-gray-300 md:text-xl text-base md:mb-6 mb-2">{{ t('why-we') }}</h2>
      <h3 class="md:text-5xl text-2xl font-poppins font-bold text-white tracking-wide" v-html="t('custom-design', { class: 'text-teal'})"></h3>
    </div>
    <div class="w-full flex md:flex-row flex-col md:space-x-12 lg:mt-20 mt-10">
      <div class="lg:w-1/2 w-full lg:mb-0 mb-12">
        <Levitate :duration="2000" :positionLevitateY="10" :delay="50" :positionInitialY="0">
          <img src="../assets/images/quality.webp" alt="" class="" style="transform: rotate(-6deg);">
        </Levitate>
      </div>
      <div class="lg:w-1/2 w-full">
        <h3 class="md:text-xl text-base tracking-wide text-gray-300">{{ t('quality-title') }}</h3>
        <h4 class="md:text-4xl text-xl tracking-wide text-teal font-poppins">{{ t('quality-subtitle') }}</h4>
        <p class="text-white mt-10">{{ t('quality-phrase') }}</p>
      </div>
    </div>
    <div class="w-full flex md:flex-row flex-col md:space-x-12 lg:mt-20 mt-10">
      <div class="lg:w-1/2 w-full lg:order-first order-last">
        <h3 class="md:text-xl text-base tracking-wide text-gray-300">{{ t('custom-designs-title') }}</h3>
        <h4 class="md:text-4xl text-xl tracking-wide text-teal font-poppins">{{ t('custom-designs-subtitle') }}</h4>
        <p class="text-white mt-10">{{ t('custom-designs-phrase') }}</p>
      </div>
      <div class="lg:w-1/2 w-full lg:order-last order-first lg:mb-0 mb-12">
        <Levitate :duration="2000" :positionLevitateY="10" :delay="50" :positionInitialY="0">
          <img src="../assets/images/wiframe.webp" alt="" class="" style="transform: rotate(6deg);">
        </Levitate>
      </div>
    </div>
    <div class="w-full flex md:flex-row flex-col md:space-x-12 lg:mt-20 mt-10">
      <div class="lg:w-1/2 w-full lg:mb-0 mb-12">
        <Levitate :duration="2000" :positionLevitateY="10" :delay="50" :positionInitialY="0">
          <img src="../assets/images/reliable.webp" alt="" class="" style="transform: rotate(-6deg);">
        </Levitate>
      </div>
      <div class="lg:w-1/2 w-full">
        <h3 class="md:text-xl text-base tracking-wide text-gray-300">{{ t('reliable-title') }}</h3>
        <h4 class="md:text-4xl text-xl tracking-wide text-teal font-poppins">{{ t('reliable-subtitle') }}</h4>
        <p class="text-white mt-10">{{ t('reliable-phrase') }}</p>
      </div>
    </div>
  </div>
</template>