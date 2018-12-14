<template>
  <div class="login">
    <div class="container">
      <div class="row justify-content-center">
        <h1 class="jarvis" style="font-family: 'Share Tech Mono', monospace;">J.A.R.V.I.S.</h1>
      </div>
      <div class="row justify-content-center text-center prel">
        <arc class="arc"></arc>
        <div class="jumbotron logintron justify-content-center">
          <div class="modal-content logintron text-center ">
            <form class="logform" v-if="loginForm" @submit.prevent="loginUser">
              <div class="modal-header title justify-content-center">
                <h5 class="modal-title d-flex text-center" style="font-family: 'Share Tech Mono', monospace; color:#FFFFFF; font-weight: bold">Login</h5>
              </div>
              <div class="modal-body">
                <div class="col-12">
                  <input class="inputs my-2" type="email" v-model="creds.email" placeholder="Email" style="font-family: 'Share Tech Mono', monospace;">
                </div>
                <div class="col-12">
                  <input class="inputs my-2" type="password" v-model="creds.password" placeholder="Password" style="font-family: 'Share Tech Mono', monospace;">
                </div>
              </div>
              <div>
              </div>
              <button @click="loginForm = !loginForm" type="button" class="btn loginbtn col-5 " style="font-family: 'Share Tech Mono', monospace;">Register</button>
              <button type="submit" class="btn loginbtn text-center col-5 offset-1" style="font-family: 'Share Tech Mono', monospace;">Submit</button>
            </form>
            <form class="logform" v-else @submit.prevent="register">
              <div class="modal-header title justify-content-center">
                <h5 class="modal-title  text-center" style="font-family: 'Share Tech Mono', monospace;  color:#FFFFFF; font-weight: bold">Register</h5>
                </button>
              </div>
              <div class="modal-body">
                <div class="col-12">
                  <input class="inputs my-2" type="text" v-model="newUser.name" placeholder="Name" style="font-family: 'Share Tech Mono', monospace;">
                </div>
                <div class="col-12">
                  <input class="inputs my-2" type="email" v-model="creds.email" placeholder="Email" style="font-family: 'Share Tech Mono', monospace;">
                </div>
                <div class="col-12">
                  <input class="inputs my-2" type="password" v-model="creds.password" placeholder="Password" style="font-family: 'Share Tech Mono', monospace;">
                </div>
              </div>
              <button @click="loginForm = !loginForm" type="button" class="btn loginbtn2 col-5" style="font-family: 'Share Tech Mono', monospace;">Login</button>
              <button type="submit" class="btn loginbtn2 col-5 offset-1" style="font-family: 'Share Tech Mono', monospace;">Submit</button>
            </form>
            <div @click="loginForm = !loginForm">
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
  import Arc from '@/components/Arc.vue'
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
    },
    components: {
      Arc
    }
  };
</script>

<style>
  .login {
    min-height: 100px;
    overflow-y: hidden !important;
    overflow-x: hidden;
    background-image: url('https://camo.githubusercontent.com/896f4bcca05b40f1ea8f2f8f7db9e98b2fa402f1/687474703a2f2f692e696d6775722e636f6d2f785a38783945532e6a7067');
    background-size: cover;
    background-position: center center
  }

  .loginbtn {
    border-radius: 50%;
    width: 100px;
    height: 100px;
    border: 5px solid #1B4E5F;
    background-color: #FFFFFF;
    justify-content: center;
    margin-top: 34vh;
  }

  .loginbtn2 {
    border-radius: 50%;
    width: 100px;
    height: 100px;
    border: 5px solid #1B4E5F;
    background-color: #FFFFFF;
    justify-content: center;
    margin-top: 28vh
  }

  .loginbtn:hover {
    -webkit-box-shadow: 0px 0px 7px 5px #52FEFE, 0px 0px 10px 10px #52FEFE inset;
    box-shadow: 0px 0px 7px 5px #52FEFE, 0px 0px 10px 10px #52FEFE inset;
  }

  .loginbtn2:hover {
    -webkit-box-shadow: 0px 0px 7px 5px #52FEFE, 0px 0px 10px 10px #52FEFE inset;
    box-shadow: 0px 0px 7px 5px #52FEFE, 0px 0px 10px 10px #52FEFE inset;
  }

  .btn {
    text-align: center
  }

  .arc {
    margin-top: -150px;
    position: absolute
  }

  .prel {
    position: relative;
    height: 800px;
  }

  .logintron {
    z-index: 2;
    height: 30vh;
    background-color: transparent;
    border: none;
    border-radius: 50%;
    margin-top: 5vh
  }

  .logintron .inputs {
    border-radius: 5px;
    opacity: 1 !important;
  }

  .title {
    background-color: transparent;
    border-bottom: 0px
  }

  .jarvis {
    z-index: 3;
    color: #FFFFFF;
    text-shadow: -1px 0 #52FEFE, 0 1px #52FEFE, 1px 0 #52FEFE, 0 -1px #52FEFE;
    font-size: 100px
  }

  .logform {
    min-width: 400px;
  }
</style>