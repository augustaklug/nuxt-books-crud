<template>
  <nuxt-link :to="'/book/' + book.id">
    <div class="-shadow">
      <h4 class="title">
        {{ book.title }} <v-icon>mdi-slash-forward</v-icon> {{ book.author }}
      </h4>
      <span class="float-right">
        <v-btn icon color="amber">
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
        <v-btn icon color="red">
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </span>
      <br />
    </div>
  </nuxt-link>
</template>
<script>
export default {
  name: 'BookCard',
  props: {
    // eslint-disable-next-line vue/require-default-prop
    book: Object
  }
}
</script>
<style scoped>
div {
  padding: 20px;
  margin-bottom: 24px;
  transition: all 0.2s linear;
  cursor: pointer;
}
div:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.title {
  margin: 0;
  color: black;
}
a {
  text-decoration: none;
}
</style>
