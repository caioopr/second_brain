<template>
  <slot :posts="posts">
    <section class="not-prose font-mono">
      <div v-if="posts.length == 0">
        <h1>This collections has no items.</h1>
      </div>
      <ul v-else>
        <!-- TODO: Code Refactoring, change post item style -->
        <li v-for="post in posts" :key="post._path">
          <NuxtLink :to="post._path" class="column group hover:bg-gray-100 dark:hover:bg-gray-800">
            <!-- TODO: display date as dd/name_month/yyyy -->
            <div class="text-gray-400 dark:text-gray-500">
              {{ post.postDate }}</div>
            <div>{{ post.title }}</div>
          </NuxtLink>
        </li>
      </ul>
    </section>
  </slot>
</template>

<script setup>
const route = useRoute();

const { data } = await useAsyncData(
  'collection-items',
  () => {
    const query = queryContent('/posts')
      .where({ _path: { $ne: '/posts' }, collections: { $eq: route.query.title } })
      .only(['_path', 'title', 'publishedAt', 'tags'])
      .sort({ publishedAt: 1 })

    return query.find();
  }
)

const posts = computed(() => {
  if (!data.value) {
    return [];
  }

  const result = [];


  for (const post of data.value) {
    post.postDate = new Date(post.publishedAt).toJSON().slice(0, 10);
    result.push(post);
  }

  return result
})

</script>

<style scoped>
.column {
  @apply flex items-center space-x-8 py-2 border-b border-gray-200 dark:border-gray-700
}
</style>