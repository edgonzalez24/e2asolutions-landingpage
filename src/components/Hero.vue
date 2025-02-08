<script lang="ts" setup>
  import { useI18n } from 'vue-i18n';
  import Levitate from '@/components/Levitate.vue';
  import ButtonContactUs from '@/components/ButtonContactUs.vue';

  const { t, locale } = useI18n();

</script>

<template>
  <div id="home" :class="locale === 'es' ? 'lg:w-1/2' : 'lg:w-2/3'" class="relative block w-full">
    <h1 
      v-motion-slide-visible-once-right 
      v-html="t('transform-your-idea', { class: 'text-teal'})"
      class="md:text-7xl text-4xl font-poppins font-bold text-white tracking-wide"
    >
    </h1>
  </div>
  <div class="lg:block hidden">
    <img src="../assets/images/ilustration.webp" alt="ilutration" class="absolute right-0 z-10 top-0 w-72">
  </div>
  <div class="relative block">
    <div class="w-full flex flex-wrap">
      <div class="lg:w-1/3 w-full relative lg:order-first order-last mt-8 lg:mt-0">
        <div class="text-gray-300 md:mt-16">
          <p class="md:text-2xl text-base tracking-wide">{{ t('digital-changes') }}</p>
        </div>
        <div class="lg:mt-16 mt-8 flex md:justify-start justify-center lg:order-last order-first">
          <div class="md:w-1/2 w-full">
            <ButtonContactUs />
          </div>
        </div>
      </div>
      <div class="lg:w-2/3 w-full flex justify-end overflow-hidden md:mt-0 mt-8">
        <div v-motion-slide-right>
          <Levitate :duration="2000" :positionLevitateY="10" :delay="50" :positionInitialY="0">
            <img src="../assets/images/hero.webp" class="w-auto z-20" alt="hero image">
          </Levitate>
        </div>
      </div>
    </div>
  </div>
</template>