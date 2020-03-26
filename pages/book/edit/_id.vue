<template>
  <div>
    <h1>Edit book</h1>
    <v-divider></v-divider>
    <br />
    <v-form v-model="isFormValid" @submit.prevent="saveThisBook(id)">
      <v-text-field
        v-model="author"
        :rules="formRules"
        prepend-inner-icon="mdi-account"
        label="Author"
        type="text"
        outlined
      ></v-text-field>
      <v-text-field
        v-model="title"
        :rules="formRules"
        prepend-inner-icon="mdi-format-text"
        label="Title"
        type="text"
        outlined
      ></v-text-field>
      <v-text-field
        v-model="year"
        :rules="formRules"
        prepend-inner-icon="mdi-calendar"
        label="Year"
        type="number"
        outlined
      ></v-text-field>
      <v-text-field
        v-model="country"
        :rules="formRules"
        prepend-inner-icon="mdi-earth"
        label="Country"
        type="text"
        outlined
      ></v-text-field>
      <v-text-field
        v-model="language"
        :rules="formRules"
        prepend-inner-icon="mdi-translate"
        label="Language"
        type="text"
        outlined
      ></v-text-field>
      <v-text-field
        v-model="pages"
        :rules="formRules"
        prepend-inner-icon="mdi-book-open-page-variant"
        label="Pages"
        type="number"
        outlined
      ></v-text-field>
      <p v-if="!isFormValid" style="color: red; font-style: italic">
        Please fill in all fields
      </p>
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

    <v-alert v-if="success" border="left" colored-border type="success">
      Success! Book saved
      <nuxt-link :to="'/book/' + book.id"
        ><v-btn small outlined color="success" absolute right
          >OK</v-btn
        ></nuxt-link
      >
    </v-alert>

    <v-alert v-if="error" border="left" colored-border type="error">
      Error! The book was not saved
      <nuxt-link :to="'/book/' + book.id"
        ><v-btn small outlined color="error" absolute right
          >OK</v-btn
        ></nuxt-link
      >
    </v-alert>
  </div>
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
  data() {
    return {
      isFormValid: false,
      formRules: [(v) => !!v || 'The field is required'],
      error: false,
      success: false
    }
  },
  computed: {
    ...mapState(['book']),
    id: {
      set(id) {
        this.$store.commit('GET_BOOK', { id })
      },
      get() {
        return this.book.id
      }
    },
    author: {
      set(author) {
        this.$store.commit('GET_BOOK', { author })
      },
      get() {
        return this.book.author
      }
    },
    title: {
      set(title) {
        this.$store.commit('GET_BOOK', { title })
      },
      get() {
        return this.book.title
      }
    },
    year: {
      set(year) {
        this.$store.commit('GET_BOOK', { year })
      },
      get() {
        return this.book.year
      }
    },
    country: {
      set(country) {
        this.$store.commit('GET_BOOK', { country })
      },
      get() {
        return this.book.country
      }
    },
    language: {
      set(language) {
        this.$store.commit('GET_BOOK', { language })
      },
      get() {
        return this.book.language
      }
    },
    pages: {
      set(pages) {
        this.$store.commit('GET_BOOK', { pages })
      },
      get() {
        return this.book.pages
      }
    }
  },
  methods: {
    ...mapActions(['putBook']),
    saveThisBook(id) {
      this.putBook(id)
        .then((response) => {
          this.success = true
        })
        .catch(function(error) {
          console.error(error)
          this.error = true
        })
    }
  },
  head() {
    return {
      title: this.book.title
    }
  }
}
</script>
