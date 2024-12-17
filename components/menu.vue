<template>
  <nav class="font-mono">
    <ul class="flex flex-col md:flex-row md:space-x-4">
      <li>
        <NuxtLink to="/" class="link">Main</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/posts/" class="link">Posts</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/about" class="link">About</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.link {
  @apply p-1 hover:text-blue-800 hover:font-semibold text-xl md:text-base
}
</style>