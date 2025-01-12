<template>
  <slot :posts="collections">
    <section class="not-prose font-mono">
      <ul>
        <!-- TODO: Code Refactoring, change post item style -->
        <li v-for="collection in collections" :key="collection">
          <NuxtLink :to="`/collections/collection?title=${collection}`"
            class="column group hover:bg-gray-100 dark:hover:bg-gray-800">
            <div class=" group hover:bg-gray-100 dark:hover:bg-gray-800">
              {{ collection }}
            </div>
          </NuxtLink>
        </li>
      </ul>
    </section>
  </slot>
</template>

<script setup>


const { data } = await useAsyncData(
  'collections-list',
  () => {
    const query = queryContent('/posts')
      .where({ _path: { $ne: '/posts' } })
      .only(['collections'])
    return query.find()
  }
)

// TODO: retrieve posts names and group by collection
const collections = computed(() => {
  if (!data.value) {
    return []
  }

  let result = [];
  for (const post of data.value) {
    if (post.collections !== "") {
      // TODO: trim the tags
      let collections = post.collections.split(",");
      result = [...new Set(result.concat(collections))];
    }
  }

  return result;
})

</script>

<style scoped>
.column {
  @apply flex items-center space-x-8 py-2 border-b border-gray-200 dark:border-gray-700
}
</style>