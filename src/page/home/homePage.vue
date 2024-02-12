<template>
  <div class="home">
    <navBarVue />
    <div class="container">
      Компонент с различными трансляциями
    </div>
  </div>
</template>

<script>
import navBarVue from "@/components/header/navBar.vue";

export default {
  name: "HomePage",
  components: {
    navBarVue,
  },
};
</script>

<style scoped>
.home{
  width:100%;
  height: 963px;
  background-color: rgb(247, 224, 160);
}

.container{
  height: 100%;
  display: flex;
  justify-content: center;
}

</style>
