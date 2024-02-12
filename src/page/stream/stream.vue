<template>
    <div class="stream">
      <navBarVue />
      <div class="container">
        Компонент трансляци
      </div>
    </div>
  </template>
  
  <script>
  import navBarVue from "@/components/header/navBar.vue";
  
  export default {
    name: "streamPage",
    components: {
      navBarVue,
    },
  };
  </script>
  
  <style scoped>
  .stream{
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
  