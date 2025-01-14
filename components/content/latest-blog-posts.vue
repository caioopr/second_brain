<template>
  <slot :posts="posts">
    <section class="not-prose font-mono">
      <ul>
        <!-- TODO: Code Refactoring, change post item style -->
        <li v-show="!tagsOn || (selectedTags && selectedTags.length === 0) || postHasTag(post.tags.split(','))"
          v-for="post in posts" :key="post._path">
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
const props = defineProps({
  limit: {
    type: Number,
    default: 0
  },
  tagsOn: {
    type: Boolean,
    default: false
  }
})

const { data } = await useAsyncData(
  'latest-posts',
  () => {
    const query = queryContent('/posts')
      .where({ _path: { $ne: '/posts' } })
      .only(['_path', 'title', 'publishedAt', 'tags'])
      .sort({ publishedAt: -1 })

    // TODO: 
    // Github Pages is caching the 'latest posts' result
    // needs refresh
    query.limit(props.limit)
    return query.find();
  }
)

const selectedTags = useState('selectedTags')

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


function postHasTag(postTags) {
  if (!selectedTags.value) return;
  for (let tag of postTags) {
    if (selectedTags.value.includes(tag)) {
      return true;
    }
  }
  return false;
}
</script>

<style scoped>
.column {
  @apply flex items-center space-x-8 py-2 border-b border-gray-200 dark:border-gray-700
}
</style>