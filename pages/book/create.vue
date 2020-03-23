<template>
  <div>
    <h1>Add a book</h1>
    <v-divider></v-divider>
    <br />
    <v-form>
      <v-text-field
        prepend-inner-icon="mdi-account"
        label="Author"
        outlined
        clearable
        required
      ></v-text-field>
      <v-text-field
        prepend-inner-icon="mdi-format-text"
        label="Title"
        outlined
        clearable
        required
      ></v-text-field>
      <v-text-field
        prepend-inner-icon="mdi-calendar"
        label="Year"
        outlined
        clearable
        required
      ></v-text-field>
      <v-text-field
        prepend-inner-icon="mdi-earth"
        label="Country"
        outlined
        clearable
        required
      ></v-text-field>
      <v-text-field
        prepend-inner-icon="mdi-translate"
        label="Language"
        outlined
        clearable
        required
      ></v-text-field>
      <v-text-field
        prepend-inner-icon="mdi-book-open-page-variant"
        label="Pages"
        outlined
        clearable
        required
      ></v-text-field>
      <v-btn class="ma-2" color="primary" dark absolute right
        >Submit
        <v-icon dark right>mdi-checkbox-marked-circle-outline</v-icon>
      </v-btn>
    </v-form>
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: 'Add a book',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'You can create a new event in your neighborhood'
        }
      ]
    }
  }
}
</script>
