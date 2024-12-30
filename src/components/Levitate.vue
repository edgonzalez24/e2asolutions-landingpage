<script lang="ts" setup>
  import { useMotion } from "@vueuse/motion";
  import { ref } from "vue";

  const props = defineProps<{
    duration: number;
    positionLevitateY: number;
    delay: number;
    positionInitialY: number;
  }>()

  const element = ref<HTMLElement>();

  const { variant } = useMotion(element, {
    initial: {
      y: props.positionInitialY,
      opacity: 0,
    },
    enter: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 350,
        damping: 20,
        delay: props.delay,
        onComplete: () => {
          variant.value = "levitate";
        },
      },
    },
    levitate: {
      y: props.positionLevitateY,
      transition: {
        duration: props.duration,
        repeat: Infinity,
        ease: "easeInOut",
        repeatType: "mirror",
      },
    },
  });
</script>

<template>
  <div ref="element">
    <slot />
  </div>
</template>