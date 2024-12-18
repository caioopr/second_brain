<template>
  <!-- TODO: Code Refactoring & fix icon import-->
  <div class="container mx-auto max-w-4xl">
    <header class="flex justify-between items-center mt-3 md:mt-5">

      <div class="md:block">
        <NuxtLink to="/" class="text-xl font-semibold p-2 hover:text-blue-800"> Caio Prado
        </NuxtLink>
      </div>

      <div class="hidden md:flex items-center md:space-x-12">
        <Menu />
        <ClientOnly>
          <ThemeSelector />
        </ClientOnly>
      </div>

      <div class="flex flex-row md:hidden p-2 items-center">
        <ClientOnly>
          <ThemeSelector />
        </ClientOnly>

        <div class="flex flex-row">
          <button @click="toggleMenu" class=" flex items-center justify-center">
            <Icon v-if="isMenuBtn" name='i-heroicons-x-mark' class="w-7 h-7" />
            <Icon v-else name='i-heroicons-bars-3' class="w-7 h-7" />
          </button>
        </div>
      </div>
    </header>
    <div v-if="isMenuBtn" class="flex flex-col md:hidden p-2">
      <Menu />
    </div>

    <main class="p-2 mt-10">
      <slot />
    </main>
  </div>
</template>

<script setup>
useHead({
  titleTemplate: '%s | Caio Prado',
  link: [
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com'
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap',
      crossorigin: ''
    }
  ]
})

const isMenuBtn = ref(false);

const toggleMenu = () => isMenuBtn.value = !isMenuBtn.value; 
</script>

<style>
body {
  font-family: 'Roboto';
}

body {
  @apply bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300
}
</style>