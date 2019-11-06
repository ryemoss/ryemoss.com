<template>
  <div class="flex main-container">
    <gallery folderPath='art/'></gallery>
  </div>
</template>

<script>
import gallery from '@/components/gallery.vue';

export default {
  name: 'art',
  components: {gallery},
}
</script>

<style scoped>

</style>