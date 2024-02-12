<template>
  <div>
    <navBar/>
    <homePage />
  </div>
</template>

<script>

import homePage from './page/home/homePage.vue'


export default {
  name: 'App',
  components: {
    homePage
  }
}
</script>

<style>
</style>
