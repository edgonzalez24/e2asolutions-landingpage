<script lang="ts" setup>
  import { toRef } from 'vue';
  import { useField } from 'vee-validate';

  const props = defineProps<{
    modelValue: string | number;
    placeholder?: string;
    name: string;
  }>();
  const name = toRef(props, 'name');
  const {
    value: inputValue,
    errorMessage,
    handleBlur,
    handleChange,
    meta,
  } = useField(name, undefined, {
    initialValue: props.modelValue,
  });
</script>

<template>
  <textarea 
    rows="4"
    :value="inputValue" 
    class="rounded-md block w-full border px-3 py-1" 
    :class="!!errorMessage ? 'border-red-600 focus:outline-none focus:border-red-600 shadow-none focus:ring-0' : 'focus:outline-none hover:border-gray-200 focus:ring hover:ring focus:ring-gray-200 hover:ring-gray-300 focus:ring-opacity-50 hover:ring-opacity-50 transition duration-500 ease-in-out'"
    :placeholder="placeholder"
    @input="handleChange" 
    @blur="handleBlur">
  </textarea>
  <p class="text-xs text-red-600" v-show="errorMessage">
    {{ errorMessage }}
  </p>
</template>