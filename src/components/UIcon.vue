<script lang="ts" setup>
  import { computed } from 'vue';

  const props = defineProps<{
    icon: string
  }>();
  const modules = import.meta.glob('../assets/icons/**/*.svg', {
    as: 'raw',
    eager: true,
  });
  const svg = computed(() => {
    return modules['../assets/icons/' + props.icon + '.svg'] ?? modules['../assets/icons/quality.svg'];
  });
</script>

<template>
  <i v-html="svg" class="icon"/>
</template>
