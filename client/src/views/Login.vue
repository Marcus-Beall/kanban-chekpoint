<template>
  <div class="login">
    <div class="container">
      <div class="row justify-content-center">
        <div class="jumbotron">
          <div class="modal-content">
            <form v-if="loginForm" @submit.prevent="loginUser">
              <div class="modal-header">
                <h5 class="modal-title">Login</h5>
              </div>
              <div class="modal-body">
                <div class="col-12">
                  <input type="email" v-model="creds.email" placeholder="email">
                </div>
                <div class="col-12">
                  <input type="password" v-model="creds.password" placeholder="password">
                </div>
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            <form v-else @submit.prevent="register">
              <div class="modal-header">
                <h5 class="modal-title">Register</h5>
                </button>
              </div>
              <div class="modal-body">
                <div class="col-12">
                  <input type="text" v-model="newUser.name" placeholder="name">
                </div>
                <div class="col-12">
                  <input type="email" v-model="creds.email" placeholder="email">
                </div>
                <div class="col-12">
                  <input type="password" v-model="creds.password" placeholder="password">
                </div>
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            <div @click="loginForm = !loginForm">
              <button v-if="loginForm" type="button" class="btn btn-secondary">Register</button>
              <button v-else type="button" class="btn btn-secondary">Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  </div>
</template>

<script>
  export default {
    name: "login",
    data() {
      return {
        loginForm: true,
        creds: {
          email: "",
          password: ""
        },
        newUser: {
          email: "",
          password: "",
          name: ""
        }
      };
    },
    methods: {
      register() {
        this.$store.dispatch("register", this.newUser);
      },
      loginUser() {
        this.$store.dispatch("login", this.creds);
      }
    }
  };
</script>

<style>
  .login {
    min-height: 100px
  }
</style>