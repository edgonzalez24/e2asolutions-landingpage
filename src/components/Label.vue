<script lang="ts" setup>
  import { computed } from 'vue';

  const props = defineProps<{
    value: string;
    color?: string;
    size?: string;
    transform?: string;
    weight?: string;
  }>();
  const colorText = computed(() => props.color ? props.color : 'text-black');
  const sizeText = computed(() => props.size ? props.size : 'md:text-base text-sm');
  const transformText = computed(() => props.transform ? props.transform : 'normal-case');
  const weightText = computed(() => props.weight ? props.weight : 'font-normal');
</script>

<template>
  <label class="block" :class="[colorText, sizeText, transformText, weightText]">
    <span v-if="value">{{ value }}</span>
    <span v-else>
      <slot />
    </span>
  </label>
</template>