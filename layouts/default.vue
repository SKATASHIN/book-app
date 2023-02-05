<template>
  <v-app dark>
   <Header />
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>

    </v-main>
    <Footer />
  </v-app>
</template>

<script>
// import header from '../components/header.vue'
export default {
  // components: { header },
  name: 'DefaultLayout',
  data() {
    return {

    }
  },
}
</script>
