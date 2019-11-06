<template>
<div class="flex main-container">
  <gallery folderPath='photos/'></gallery>
</div>

</template>

<script>
import gallery from '@/components/gallery.vue';

export default {
  name: 'photos',
  components: {gallery},
}
</script>

<style lang="less" scoped>
.main-container {
}
</style>
