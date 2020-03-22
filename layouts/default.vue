<template>
  <v-app dark>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-img
        class="mx-2"
        src="https://nuxtjs.org/logos/nuxt-square.svg"
        max-height="40"
        max-width="40"
        contain
      ></v-img>
      <v-toolbar-title v-text="title" />
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      fixed: false,
      title: 'Vue.js CRUD'
    }
  }
}
</script>
