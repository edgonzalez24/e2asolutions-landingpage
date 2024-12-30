<script lang="ts" setup>
  type Button = "submit" | "button" | "reset";
  interface Props {
    type?: Button;
    background?: string;
    color?: string;
    disabled?: boolean;
  }

  withDefaults(defineProps<Props>(), {
    type: 'submit',
    background: 'bg-teal focus:ring-gray-500 focus:border-gray-900 transition duration-500 ease-in-out hover:opacity-90',
    color: 'text-white',
    disabled: false
  });

</script>


<template>
  <button :type="type" :class="[background, color, { 'bg-gray-400': disabled }]" :disabled="disabled"
    class="inline-flex items-center py-2 border border-transparent rounded-md font-semibold sm:text-base text-sm tracking-normal focus:outline-none focus:ring disabled:opacity-25 w-full justify-center"
  >
    <slot />
  </button>
</template>