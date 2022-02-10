<template>
  <div class="book-list">
      <BookCover ></BookCover>
      <BookCover ></BookCover>
      <BookCover ></BookCover>
      <BookCover ></BookCover>
      <BookCover ></BookCover>
  </div>
</template>

<script>
import BookCover from './BookCover.vue'
export default {
    components: {BookCover}

}
</script>

<style scoped>
.book-list {
    display: flex;
    gap:10px
}

</style>