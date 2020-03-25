<template>
  <div v-if="renderComponent">
    <h1>My books</h1>
    <v-divider></v-divider>
    <br />
    <BookCard
      v-for="(book, index) in books"
      :key="index"
      :book="book"
      :data-index="index"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import BookCard from '@/components/BookCard.vue'

export default {
  async fetch({ store, error }) {
    try {
      await store.dispatch('fetchBooks')
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Unable to fetch books at this time. Please try again.'
      })
    }
  },
  data() {
    return {
      renderComponent: true
    }
  },
  methods: {
    forceRenderer() {
      this.renderComponent = false

      this.$nextTick(() => {
        this.renderComponent = true
      })
    }
  },
  components: {
    BookCard
  },
  computed: mapState({
    books: (state) => state.books
  }),
  head() {
    return {
      title: 'Book Listing'
    }
  }
}
</script>
