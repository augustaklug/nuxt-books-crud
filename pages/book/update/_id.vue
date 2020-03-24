<template>
  <section>
    <h1>Update book</h1>
    <v-divider></v-divider>
    <br />
    <v-form>
      <v-text-field
        prepend-inner-icon="mdi-account"
        label="Author"
        :value="book.author"
        type="text"
        outlined
        clearable
        required
      ></v-text-field>
      <v-text-field
        prepend-inner-icon="mdi-format-text"
        label="Title"
        :value="book.title"
        type="text"
        outlined
        clearable
        required
      ></v-text-field>
      <v-text-field
        prepend-inner-icon="mdi-calendar"
        label="Year"
        :value="book.year"
        type="number"
        outlined
        clearable
        required
      ></v-text-field>
      <v-text-field
        prepend-inner-icon="mdi-earth"
        label="Country"
        :value="book.country"
        type="text"
        outlined
        clearable
        required
      ></v-text-field>
      <v-text-field
        prepend-inner-icon="mdi-translate"
        label="Language"
        :value="book.language"
        type="text"
        outlined
        clearable
        required
      ></v-text-field>
      <v-text-field
        prepend-inner-icon="mdi-book-open-page-variant"
        label="Pages"
        :value="book.pages"
        type="number"
        outlined
        clearable
        required
      ></v-text-field>
      <v-btn
        @click="updateThisBook(book.id, book)"
        color="primary"
        dark
        absolute
        right
        >Submit
        <v-icon dark right>mdi-checkbox-marked-circle-outline</v-icon>
      </v-btn>
    </v-form>
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
  computed: {
    ...mapState({
      book: (state) => state.book
    })
  },
  methods: {
    ...mapActions(['updateBook']),
    updateThisBook(id, book) {
      this.updateBook(id, book)
      this.$router.push('/book/' + book.id)
    }
  },
  head() {
    return {
      title: this.book.title
    }
  }
}
</script>
