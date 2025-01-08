<template>
  <slot :posts="projects">
    <section class="not-prose font-mono">
      <ul>
        <!-- TODO: Code Refactoring, change post item style -->
        <li v-for="project in projects" :key="project._path">
          <NuxtLink :to="project._path" class="column group hover:bg-gray-100 dark:hover:bg-gray-800">
            <div class="text-gray-400 dark:text-gray-500">
              {{ project.date }}</div>
            <div>{{ project.title }}</div>
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
    default: null
  }
})

const { data } = await useAsyncData(
  'projects-list',
  () => {
    const query = queryContent('/projects')
      .where({ _path: { $ne: '/projects' } })
      .only(['_path', 'title', 'publishedAt', 'tags'])
      .sort({ publishedAt: -1 })

    if (props.limit) {
      query.limit(props.limit)
    }

    return query.find();
  }
)

const projects = computed(() => {
  if (!data.value) {
    return [];
  }

  const result = [];


  for (const project of data.value) {
    project.date = new Date(project.publishedAt).toJSON().slice(0, 10);
    result.push(project);
  }

  return result
})

</script>

<style scoped>
.column {
  @apply flex items-center space-x-8 py-2 border-b border-gray-200 dark:border-gray-700
}
</style>