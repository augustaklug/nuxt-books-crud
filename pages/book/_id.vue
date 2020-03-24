<template>
  <div>
    <div class="event-header">
      <h3 class="eyebrow">
        <v-icon>mdi-account</v-icon>
        <v-divider class="mx-4" inset vertical></v-divider>{{ book.author }}
      </h3>
      <h2>
        <v-icon>mdi-format-text</v-icon
        ><v-divider class="mx-4" inset vertical></v-divider> {{ book.title }}
      </h2>
    </div>
    <h5>
      <v-icon>mdi-calendar</v-icon
      ><v-divider class="mx-4" inset vertical></v-divider> {{ book.year }}
    </h5>
    <h5>
      <v-icon>mdi-earth</v-icon
      ><v-divider class="mx-4" inset vertical></v-divider> {{ book.country }}
    </h5>
    <h5>
      <v-icon>mdi-translate</v-icon
      ><v-divider class="mx-4" inset vertical></v-divider> {{ book.language }}
    </h5>
    <h5>
      <v-icon>mdi-book-open-page-variant</v-icon
      ><v-divider class="mx-4" inset vertical></v-divider> {{ book.pages }}p
    </h5>
    <span class="float-right">
      <nuxt-link :to="'/book/delete/' + book.id">
        <v-btn text color="red darken-3">
          Delete<v-icon>mdi-delete</v-icon>
        </v-btn>
      </nuxt-link>
    </span>
  </div>
</template>

<script>
import { mapState } from 'vuex'

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
  head() {
    return {
      title: this.book.title
    }
  }
}
</script>

<style scoped>
h3 {
  margin-top: 3em;
}

h2 {
  margin-top: 0.25em;
}

h5 {
  margin-top: 1.25em;
  margin-bottom: 1.25em;
}

.prompt-box {
  position: relative;
  overflow: hidden;
  padding: 1em;
  margin-bottom: 24px;
  transform: scaleY(1);
}
.prompt-box > .title {
  margin: 0 0 0.5em;
}
.prompt-box > .title > .meta {
  margin-left: 10px;
}
.prompt-box > .actions {
  display: flex;
  align-items: center;
}
.prompt-box > button {
  margin-right: 0.5em;
}
.prompt-box > button:last-of-type {
  margin-right: 0;
}
.location {
  margin-bottom: 0;
}
.location > .icon {
  margin-left: 10px;
}
.event-header > .title {
  margin: 0;
}
.list-group {
  margin: 0;
  padding: 0;
  list-style: none;
}
.list-group > .list-item {
  padding: 1em 0;
  border-bottom: solid 1px #e5e5e5;
}
</style>
