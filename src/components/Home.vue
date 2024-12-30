<script lang="ts" setup>
  import Hero from '@/components/Hero.vue';
  import WhyWe from '@/components/WhyWe.vue';
  import Process from '@/components/Process.vue';
  import ContactUs from '@/components/ContactUs.vue';
</script>

<template>
  <div class="lg:py-10 py-20">
    <div class="w-full lg:px-5 px-8">
      <Hero />
      <Process />
      <WhyWe />
      <ContactUs />
    </div>
  </div>
</template>