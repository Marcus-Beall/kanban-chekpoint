<template>
  <div class="dash">
    <nav class="navbar navbar-expand-lg navbar-dark">
      <div class="row justify-content-center">
        <img class="col-12" style="max-width:100px" src="https://img.icons8.com/ultraviolet/50/000000/iron-man.png">
        <h2 class="navbar-brand col-11 offset-1" @click="boards" style="cursor:pointer">
          J.A.R.V.I.S.
        </h2>
        <span></span>
      </div>
      <div class="collapse navbar-collapse " id="navbarColor02">
        <div class="col-5">
        </div>
        <ul class="navbar-nav mr-auto btn justify-content-center text-center">
          <li v-if="boardTitle">
            <h1 class="" style="font-family: 'Share Tech Mono', monospace; color:#FFFFFF; font-weight: bold">{{titleCase(boardTitle)}}</h1>
          </li>
          <li v-else>
            <h1 class="" style="font-family: 'Share Tech Mono', monospace; color:#FFFFFF; font-weight: bold">Boards</h1>
          </li>
        </ul>
        <h2 style="font-family: 'Share Tech Mono', monospace; color:#FFFFFF;">{{user.name}}</h2>
        <button @click="logout" class="btn loginbtn2 my-2 my-sm-0 offset-1" style="font-family: 'Share Tech Mono', monospace;"
          type="button">Logout</button>
      </div>
    </nav>
  </div>
</template>

<script>
  import router from '../router'
  export default {
    name: 'dash',
    methods: {
      logout() {
        this.$store.dispatch('logout')
      },
      boards() {
        if (this.$route.params.boardId) {
          router.go(-1)
        }
      },
      titleCase(title) {
        return title.toUpperCase()
      },
    },
    computed: {
      user() {
        return this.$store.state.user
      },
      board() {
        return this.$store.state.activeBoard
      }
    },
    props: ['boardTitle']
  }
</script>