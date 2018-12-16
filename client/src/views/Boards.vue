<template>
  <div class="boards">
    <div class="pic"></div>
    <dash></dash>
    <div class="container-fluid">
      <div class="row justify-content-center">
        <p style="font-family: 'Share Tech Mono', monospace; color:#FFFFFF;">Create New Board</p>
      </div>
      <form @submit.prevent="addBoard">
        <input type="text" class="mx-2" placeholder="Title" v-model="newBoard.title" required style="font-family: 'Share Tech Mono', monospace; color:#1B4E5F;">
        <input type="text" class="mx-2 " placeholder="Description" v-model="newBoard.description" style="font-family: 'Share Tech Mono', monospace; color:#1B4E5F;">
        <button class="mx-2 boarddrop" type="submit" style="font-family: 'Share Tech Mono', monospace; color:#1B4E5F;">Create
          Board</button>
      </form>
      <div class="row d-flex justify-content-around mt-5" style="overflow-x: hidden;">
        <div class="col-4 my-2" v-for="board in boards" :key="board._id">
          <div class="btn-group" role="group" aria-label="Button group with nested dropdown">
            <div class="btn-group" role="group">
              <button id="btnGroupDrop1" type="button" class="btn boarddrop" style="min-width:230px" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">
                <div class="row justify-content-between mx-1">
                  <router-link :to="{name: 'board', params: {boardId: board._id, boardTitle: board.title}}" @click="setBoard(boardId)"
                    style="font-family: 'Share Tech Mono', monospace; color:#1B4E5F;">{{titleCase(board.title)}}</router-link>
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAABfAAAAXwBsrqMZwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAGVSURBVEiJ7ZW/T1NRFMc/575CB+LYpPIIOwGdXBhIkIahQ1ucnOClk7OT/gm6+R8AZcF04EcHAuGHJkx0U4i7eS0kTC6tKbn3OCgJLQ9eLU2UhO/4Pfd8vyf3e3Mu3HdIN4dGcgtvVORdW6Pq27BSev/XBn4uOECY7nrENuh+bbOUucqYCMtEb+KgSM+9/y8iQ/bzgfYiVttcvqZ3PYM+I9ZAjDxHTaaTV9HZKL4TsamH60ufAPx80MbXN0q7UXwn/v0VPRjc3UDldSJhh1vJxqOo8p13R62y9OG2el+Wk58LDjAkbcsUzrYWz9PZYsobdBsoP/uTgTCEMukNuL3HL+bHvAG3hzKJMhS7i0TdtIhRB5+vnlHVqXqldAjwZ+J9lAnAAQbh2LbMzE0GIeDHDi7sMNiYC8vl5mguGLfCF34/HOcpT79Xlk9uuqJXQP02cUW2Ez+kEJbLzXS2mLKG1UtxwFjDajpbTHX1J8dhOB9UBZ4BX53nXhprPgJPgGpfQjbQRDmyFyZzurbyzV6YDFAFafwCjwN/ixAFWjoAAAAASUVORK5CYII="
                    style="color: #1B4E5F" @click="deleteBoard(board)">
                </div>
              </button>
              <div class="dropdown-menu boarddrop2" aria-labelledby="btnGroupDrop1">
                <p style="font-family: 'Share Tech Mono', monospace; color:#1B4E5F;">{{board.description}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Dash from '@/components/Dash.vue'
  export default {
    name: "boards",
    created() {
      //blocks users not logged in
      if (!this.$store.state.user._id) {
        this.$router.push({ name: "login" });
      }
    },
    mounted() {
      this.$store.dispatch("getBoards");
    },
    data() {
      return {
        newBoard: {
          title: "",
          description: ""
        }
      };
    },
    computed: {
      boards() {
        return this.$store.state.boards;
      }
    },
    methods: {
      addBoard() {
        this.$store.dispatch("addBoard", this.newBoard);
        this.newBoard = { title: "", description: "" };
      },
      deleteBoard(board) {
        if (this.$store.state.user._id == board.authorId) {
          this.$store.dispatch("deleteBoard", board._id);
        }
      },
      setBoard(board) {
        this.$store.dispatch('setBoard', board)
      },
      titleCase(title) {
        return title.toUpperCase()
      },
    },
    components: {
      Dash
    }
  };
</script>

<style>
  .boards {
    height: 100vh;
    width: 100vw;
    background-image: url('https://camo.githubusercontent.com/896f4bcca05b40f1ea8f2f8f7db9e98b2fa402f1/687474703a2f2f692e696d6775722e636f6d2f785a38783945532e6a7067');
    background-size: cover;
    background-position: center center
  }

  .boarddrop {
    border: 1px solid #1B4E5F;
    background-color: #FFFFFF;
    box-shadow: 0px 0px 5px 3px #52FEFE, 0px 0px 8px 8px #52FEFE inset;
  }

  .boarddrop2 {
    background-color: #FFFFFF;
    box-shadow: 0px 0px 5px 3px #52FEFE, 0px 0px 8px 8px #52FEFE inset;
  }
</style>