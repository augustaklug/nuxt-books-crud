<template>
  <div>
    <h1>Add a book</h1>
    <v-divider></v-divider>
    <br />
    <v-form>
      <v-text-field
        prepend-inner-icon="mdi-account"
        label="Author"
        v-model="author"
        type="text"
        outlined
        clearable
        required
      ></v-text-field>
      <v-text-field
        prepend-inner-icon="mdi-format-text"
        label="Title"
        v-model="title"
        type="text"
        outlined
        clearable
        required
      ></v-text-field>
      <v-text-field
        prepend-inner-icon="mdi-calendar"
        label="Year"
        v-model="year"
        type="number"
        outlined
        clearable
        required
      ></v-text-field>
      <v-text-field
        prepend-inner-icon="mdi-earth"
        label="Country"
        v-model="country"
        type="text"
        outlined
        clearable
        required
      ></v-text-field>
      <v-text-field
        prepend-inner-icon="mdi-translate"
        label="Language"
        v-model="language"
        type="text"
        outlined
        clearable
        required
      ></v-text-field>
      <v-text-field
        prepend-inner-icon="mdi-book-open-page-variant"
        label="Pages"
        v-model="pages"
        type="number"
        outlined
        clearable
        required
      ></v-text-field>
      <v-btn @click="addNewBook" color="primary" dark absolute right
        >Submit
        <v-icon dark right>mdi-checkbox-marked-circle-outline</v-icon>
      </v-btn>
    </v-form>
  </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions(['addBook']),
    addNewBook() {
      this.addBook({
        id: Math.floor(100000000 + Math.random() * 900000000),
        author: this.author,
        title: this.title,
        year: this.year,
        country: this.country,
        language: this.language,
        pages: this.pages
      })
      this.$router.push('/')
    }
  },
  head() {
    return {
      title: 'Add a book',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'You can create a new book in your list'
        }
      ]
    }
  }
}
</script>
