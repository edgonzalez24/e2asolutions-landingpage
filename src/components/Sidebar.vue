<script lang="ts" setup>
  import { computed } from 'vue';
  import { useI18n } from 'vue-i18n';
  import { useRoute } from 'vue-router';

  const route = useRoute();

  defineProps<{
    isOpen: boolean
  }>();

  const emit = defineEmits(['close']);

  const { t, locale } = useI18n();
  const menu =  computed(() => [
    {
      name: t('home'),
      slug: 'home'
    },
    {
      name: t('process'),
      slug: 'process'
    },
    {
      name: t('why-we'),
      slug: 'why-we'
    }, {
      name: t('contact-us'),
      slug: 'contact'
    }
  ]);
</script>

<template>
  <aside class="py-10 md:h-full h-screen bg-dark sidebar lg:w-1/6 w-4/6 fixed z-30" :class="{'is-open shadow-teal lg:shadow-none': isOpen }">
    <img src="@/assets/images/logo.svg" alt="" class="w-16 mx-auto logo transition duration-500 ease-in">
    <div class="mt-10 mb-6">
      <ul class="menu-items flex flex-col">
        <li v-for="item in menu" class="mb-4 py-2 transition duration-500 ease-in flex items-center">
          <span class="border-menu transition duration-500 ease-in" :class="{ 'active': route.hash === `#${item.slug}` }"></span>
          <router-link 
            :to="`#${item.slug}`" 
            class="w-full pl-8 transition duration-500 ease-in font-semibold"
            :class="route.hash === `#${item.slug}` ? 'text-white' : 'text-gray-400'"
            @click="emit('close')"
          >
            {{ item.name }}
          </router-link>
        </li>
      </ul>
    </div>
    <div class="mx-auto flex justify-center">
      <div class="inline-flex items-center flex-row space-x-3">
        <a 
          class="rounded py-1 px-3 text-xs font-bold transition duration-500 ease-in hover:bg-teal hover:text-white cursor-pointer teal"
          :class="locale === 'es' ? 'bg-teal text-white' : 'text-gray-300'"
          @click="locale = 'es'"
        >ES</a>
        <a 
          class="rounded py-1 px-3 text-xs font-bold transition duration-500 ease-in hover:bg-teal hover:text-white cursor-pointer teal"
          :class="locale === 'en' ? 'bg-teal text-white' : 'text-gray-300'"
          @click="locale = 'en'"
        >EN</a>
      </div>
    </div>
  </aside>
</template>