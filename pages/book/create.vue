<template>
  <div>
    <h1>Add a book</h1>
    <v-divider></v-divider>
    <br />
    <v-form v-model="isFormValid" @submit.prevent="addNewBook">
      <v-text-field
        v-model="author"
        :rules="formRules"
        prepend-inner-icon="mdi-account"
        label="Author"
        type="text"
        outlined
        clearable
        required
      ></v-text-field>
      <v-text-field
        v-model="title"
        :rules="formRules"
        prepend-inner-icon="mdi-format-text"
        label="Title"
        type="text"
        outlined
        clearable
        required
      ></v-text-field>
      <v-text-field
        v-model="year"
        :rules="formRules"
        prepend-inner-icon="mdi-calendar"
        label="Year"
        type="number"
        outlined
        clearable
        required
      ></v-text-field>
      <v-text-field
        v-model="country"
        :rules="formRules"
        prepend-inner-icon="mdi-earth"
        label="Country"
        type="text"
        outlined
        clearable
        required
      ></v-text-field>
      <v-text-field
        v-model="language"
        :rules="formRules"
        prepend-inner-icon="mdi-translate"
        label="Language"
        type="text"
        outlined
        clearable
        required
      ></v-text-field>
      <v-text-field
        v-model="pages"
        :rules="formRules"
        prepend-inner-icon="mdi-book-open-page-variant"
        label="Pages"
        type="number"
        outlined
        clearable
        required
      ></v-text-field>
      <v-btn
        type="submit"
        :disabled="!isFormValid"
        color="primary"
        dark
        absolute
        right
        >Submit
        <v-icon dark right>mdi-checkbox-marked-circle-outline</v-icon>
      </v-btn>
    </v-form>
  </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      isFormValid: false,
      formRules: [(v) => !!v || 'The field is required']
    }
  },
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
