<script lang="ts" setup>
  import Sidebar from '@/components/Sidebar.vue';
  import Home from '@/components/Home.vue';
  import Social from '@/components/Social.vue';
  import { ref, watch } from 'vue';
  import { useWindowSize } from '@vueuse/core'

  const toggle = ref<boolean>(true);
  const isMobile = ref<boolean>(false);
  const { width } = useWindowSize();

  const handleResize = () => {
  if (width.value > 1024) {
    toggle.value = true;
    isMobile.value = false;
  } else {
    toggle.value = false;
    isMobile.value = true;
  }
}
  watch(width, () => {
    handleResize();
  });

  handleResize();

  const close = () => {
    if(isMobile.value) {
      toggle.value = false;
    }
  }
</script>

<template>
  <main class="w-full flex relative flex-col lg:flex-row lg:space-x-10">
    <div class="lg:w-1/6 w-full flex lg:block">
      <Sidebar :isOpen="toggle" @close="close" />
      <div class="lg:hidden w-full flex justify-end px-5 py-3 fixed bg-dark h-16 z-20">
        <div class="flex mobile-menu" @click="toggle = !toggle" :class="{ 'open': toggle }">
          <div class="bar-one" />
          <div class="bar-two" />
          <div class="bar-three" />
        </div>
      </div>
    </div>
    <div class="lg:w-5/6 w-full">
      <Home />
      <Social />
    </div>
  </main>
</template>

