<template>
  <div v-if="tags.length !== 0" class="border-b-2 border-gray-200 dark:border-gray-700">

    <p class="my-1 text-gray-700 dark:text-gray-300">Categories:</p>
    <!-- TODO: add button style -->
    <div class="flex flex-wrap gap-2 my-2">
      <button v-for="(item) in tags" :key="item" @click="selectTag(item)"
        class="text-gray-700 dark:text-gray-300 border-gray-700 dark:border-gray-300">
        {{ item }}
        <Icon v-if='selectedTags.includes(item)' name='i-heroicons-x-mark' class="w-4 h-4" />
      </button>
    </div>
  </div>
</template>

<script setup>

// TODO: make the useState a set to avoid duplication
// add the tags to be filtered into filter
const selectedTags = useState('selectedTags', () => [])


const { data } = await useAsyncData(
  'tags-list',
  () => {
    const query = queryContent('/posts')
      .where({ _path: { $ne: '/posts' } })
      .only(['tags'])
    return query.find()
  }
)
// display the tags on the screen
// if the tag gets clicked, add it to the "filter" array
// at the blog-posts component only render the post info if it has a tag in filter[]
const tags = computed(() => {
  if (!data.value) {
    return []
  }

  let result = [];
  for (const post of data.value) {
    if (post.tags !== "") {
      let tags = post.tags.split(",");
      result = [...new Set(result.concat(tags))];
    }
  }

  return result;
})

function selectTag(tag) {
  if (!selectedTags.value) {
    return;
  }
  const idx = selectedTags.value.indexOf(tag);
  if (idx !== -1) {
    selectedTags.value.pop(idx)

    return;
  }
  selectedTags.value.push(tag);
}

</script>

<style scoped>
button {
  @apply px-2 py-1 border-2 rounded-md bg-transparent text-xl md:text-base flex items-center gap-1.5 hover:border-blue-800 hover:text-blue-800
}
</style>