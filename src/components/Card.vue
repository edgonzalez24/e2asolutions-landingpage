<script lang="ts" setup>
  import { StepItem } from '../types';
  import UIcon from '@/components/UIcon.vue';

  defineProps<{
    step: StepItem
  }>();
</script>

<template>
  <div class="bg-white h-72 w-full md:ml-8 rounded-lg overflow-hidden">
    <div class="h-2 bg-teal w-full"></div>
    <div class="py-6 px-5">
      <div class="w-full flex justify-center">
        <div class="bg-teal rounded-md h-12 w-12 flex justify-center items-center mb-2">
          <UIcon :icon="step.icon" />
        </div>
      </div>
      <span class="text-poppins font-bold text-lg">{{ step.position }}</span>
      <h5 class="text-poppins font-bold lg:text-2xl text-lg mb-2">{{ step.title }}</h5>
      <p class="text-sm">{{ step.description }}</p>
    </div>
  </div>
</template>