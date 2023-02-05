<template>
  <div>
    <!-- mutationsはcommitにて指定する必要がある。メソットの名前を指定する。 -->
    <v-btn @click="$store.commit('increment')">+</v-btn>
    {{ $store.state.counter }}
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>