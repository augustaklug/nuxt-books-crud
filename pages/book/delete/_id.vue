<template>
  <section>
    <h1>Delete book</h1>
    <v-divider></v-divider>
    <br />
    <h2>{{ book.title }}</h2>
    <form @submit.prevent="deleteThisBook(book.id)">
      <br />
      <p>
        <em><b>WARNING!</b></em> The action cannot be undone.
      </p>
      <v-btn type="submit" color="red darken-3" dark text
        >Delete<v-icon dark right>mdi-delete</v-icon></v-btn
      >
      <nuxt-link to="/">
        <v-btn color="blue darken-3" text
          >Cancel<v-icon dark right>mdi-cancel</v-icon></v-btn
        >
      </nuxt-link>
    </form>
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  async fetch({ store, error, params }) {
    try {
      await store.dispatch('fetchBook', params.id)
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Unable to fetch book #' + params.id
      })
    }
  },
  computed: mapState({
    book: (state) => state.book
  }),
  methods: {
    ...mapActions(['deleteBook']),
    deleteThisBook(id) {
      this.deleteBook(id)
      this.$router.push('/')
    }
  },
  head() {
    return {
      title: this.book.title
    }
  }
}
</script>
