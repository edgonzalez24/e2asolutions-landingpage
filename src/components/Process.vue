<script lang="ts" setup>
  import { useI18n } from 'vue-i18n';
  import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
  import { computed, ref } from 'vue';
  import { StepItem } from '../types';
  import Card from '@/components/Card.vue';

  const { t } = useI18n();

  const steps = computed<StepItem[]>(() =>{
    return [
      {
        icon: 'discovery',
        position: '01',
        title: t('discovery'),
        description: t('discovery-description')
      },
      {
        icon: 'wireframing',
        position: '02',
        title: t('wireframing'),
        description: t('wireframing-description')
      },
      {
        icon: 'quality',
        position: '03',
        title: t('fidelity'),
        description: t('fidelity-description')
      },
      {
        icon: 'development',
        position: '04',
        title: t('development'),
        description: t('development-description')
      },
      {
        icon: 'launch',
        position: '05',
        title: t('launch'),
        description: t('launch-description')
      }
    ]
  });
  const breakpoints = ref({
    0: {
      itemsToShow: 1,
      snapAlign: 'center',
    },
    769: {
      itemsToShow: 2,
      snapAlign: 'center',
    },
    1500: {
      itemsToShow: 3,
      snapAlign: 'center',
    },

  })
</script>
<template>
  <div id="process" class="w-full relative mt-12">
    <div class="lg:w-1/2 w-full">
      <h2 class="text-gray-300 md:text-xl md:mb-6 mb-2 text-base">{{ t('process') }}</h2>
      <h3 class="md:text-5xl text-2xl font-poppins font-bold text-white tracking-wide" v-html="t('process-description', { class: 'text-teal' })"></h3>
    </div>
    <div class="relative mt-10">
      <carousel :itemsToShow="3.95" :wrapAround="true" :transition="500" :autoplay="8000" :breakpoints="breakpoints" >
        <slide v-for="step in steps" :key="step.position">
          <Card :step="step" />
        </slide>
        <template #addons>
          <pagination />
        </template>
      </carousel>
    </div>
  </div>
</template>
<style scoped>
.carousel__slide {
  padding: 5px;
}
.carousel__viewport {
  perspective: 2000px;
}
.carousel__track {
  transform-style: preserve-3d;
}
.carousel__slide--sliding {
  transition: 0.5s;
}
.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
}
.carousel__slide--active {
  border-radius: 0.5rem
}
.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}
.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.95);
}
.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.95);
}
.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
}

</style>