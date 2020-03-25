<template>
  <div v-if="renderComponent">
    <h1>Book wish list:</h1>
    <v-divider></v-divider>
    <br />
    <BookCard
      v-for="(book, index) in books"
      :key="index"
      :book="book"
      :data-index="index"
    />
    <div v-if="!books.length">
      <nuxt-link to="/book/create">
        <p
          style="color: red; font-size: 1.5rem; font-weight: normal; font-style: italic"
        >
          Your list is empty, add some books.
        </p>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import BookCard from '@/components/BookCard.vue'

export default {
  components: {
    BookCard
  },
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
  computed: mapState({
    books: (state) => state.books
  }),
  methods: {
    forceRenderer() {
      this.renderComponent = false

      this.$nextTick(() => {
        this.renderComponent = true
      })
    }
  },
  head() {
    return {
      title: 'Book Listing'
    }
  }
}
</script>
