<template>
  <div class="board">
    <dash :boardTitle="boardTitle"></dash>
    <form @submit.prevent="addList" class="mt-5">
      <input type="text" placeholder="title" class="mx-2" style="font-family: 'Share Tech Mono', monospace; color:#1B4E5F;"
        v-model="newList.title" required>
      <button type="submit" class="boarddrop" style="font-family: 'Share Tech Mono', monospace; color:#1B4E5F;">Create
        List</button>
    </form>
    <div class="row d-flex listClass mt-5" style="overflow-x: hidden;">
      <list v-for="list in lists" class="col-4 offset-2 justify-content-end" :key="list._id" :listId="list._id"
        :boardId="list.boardId" :title="list.title" :listInput="false">
      </list>
    </div>
  </div>
</template>

<script>
  import Dash from '@/components/Dash.vue'
  import List from '@/components/List.vue'
  export default {
    name: "board",
    data() {
      return {
        newList: {
          title: "",
          boardId: this.boardId,
          authorId: this.$store.state.user._id
        }
      };
    },
    computed: {
      lists() {
        return this.$store.state.lists
      }
    },
    created() {
      //blocks users not logged in
      if (!this.$store.state.user._id) {
        this.$router.push({ name: "login" });
      }
    },
    mounted() {
      this.$store.dispatch("getLists", this.boardId);
    },
    methods: {
      addList() {
        this.$store.dispatch("addList", this.newList);
        this.newList = { title: "", boardId: this.boardId, authorId: this.$store.state.user._id };
      }
    },
    props: ["boardId", "boardTitle"],
    components: {
      List,
      Dash
    }
  };
</script>

<style>
  .board {
    height: 100vh;
    width: 100vw;
    overflow-y: hidden !important;
    overflow-x: hidden;
    background-image: url('https://camo.githubusercontent.com/896f4bcca05b40f1ea8f2f8f7db9e98b2fa402f1/687474703a2f2f692e696d6775722e636f6d2f785a38783945532e6a7067');
    background-size: cover;
    background-position: center center
  }

  .listClass {
    justify-content: flex-end
  }
</style>