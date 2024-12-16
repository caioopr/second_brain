<template>
  <div>{{ tags }}</div>
</template>

<script setup>

// add the tags to be filtered into filter
//export const useFilter = () => useState('tags', () => []);


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
      result = result.concat(tags);
    }
  }

  return result;
})



</script>

<style scoped></style>