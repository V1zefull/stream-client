<template>
    <div class="profile">
      <navBarVue />
      <div class="container">
        Компонент с профиля
      </div>
    </div>
  </template>
  
  <script>
  import navBarVue from "@/components/header/navBar.vue";
  
  export default {
    name: "ProfilePage",
    components: {
      navBarVue,
    },
  };
  </script>
  
  <style scoped>
  .profile{
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
  