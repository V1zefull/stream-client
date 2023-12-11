<template>
  <div class="container-box">
    <div class="container">
      <b-navbar variant="faded" type="light">
        <b-navbar-brand href="#">Video stream</b-navbar-brand>
      </b-navbar>
      <b-nav>
        <b-nav-item>Трансляции</b-nav-item>
        <b-nav-item v-b-modal.modal-2>Регистрация</b-nav-item>
        <b-nav-item v-b-modal.modal-1>Войти</b-nav-item>
      </b-nav>

      <!-- Модальное окно логина -->
      <b-modal id="modal-1" title="Войти">
        <b-form @submit.stop.prevent>
          <label for="username">Имя пользователя</label>
          <b-form-input
            v-model="username"
            :state="validationUsername"
            id="username"
          ></b-form-input>
          <b-form-invalid-feedback :state="validationUsername">
            Имя пользователя должно быть не меньше 5 и не больше 12 символов.
          </b-form-invalid-feedback>
          <b-form-valid-feedback :state="validationUsername">
          </b-form-valid-feedback>

          <label for="password">Пароль</label>
          <b-form-input
            v-model="password"
            :state="validationPassword"
            id="password"
          ></b-form-input>
          <b-form-invalid-feedback :state="validationPassword">
            Пароль должен быть не меньше 3 и не больше 12 символов.
          </b-form-invalid-feedback>
          <b-form-valid-feedback :state="validationPassword">
          </b-form-valid-feedback>
        </b-form>
      </b-modal>

      <!-- Модальное окно регистрации -->
      <b-modal id="modal-2" title="Регистрация">
        <b-form @submit.stop.prevent>
          <label for="username">Имя пользователя</label>
          <b-form-input
            v-model="username"
            :state="validationUsername"
            id="username"
          ></b-form-input>
          <b-form-invalid-feedback :state="validationUsername">
            Имя пользователя должно быть не меньше 5 и не больше 12 символов.
          </b-form-invalid-feedback>
          <b-form-valid-feedback :state="validationUsername">
          </b-form-valid-feedback>

          <label for="password">Пароль</label>
          <b-form-input
            v-model="password"
            :state="validationPassword"
            id="password"
          ></b-form-input>
          <b-form-invalid-feedback :state="validationPassword">
            Пароль должен быть не меньше 3 и не больше 12 символов.
          </b-form-invalid-feedback>
          <b-form-valid-feedback :state="validationPassword">
          </b-form-valid-feedback>
        </b-form>
      </b-modal>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  computed: {
    validationUsername() {
      return this.username.length > 4 && this.username.length < 13;
    },
    validationPassword() {
      return this.password.length > 2 && this.password.length < 13;
    },
  },
};
</script>

<style>
.container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.container-box {
  background: yellow;
}
</style>
