<template>
  <div class="board">
    <p>{{boardId}}</p>
    <form @submit.prevent="addList">
      <input type="text" placeholder="title" v-model="newList.title" required>
      <button type="submit">Create List</button>
    </form>
        <list v-for="list in lists" :key="list._id" :listId="list._id" :title="list.title">
          
          
        </list>
  </div>
</template>

<script>
  import List from '@/components/List.vue'
  export default {
    name: "board",
    data() {
      return {
        newList: {
          title: "",
          boardId: this.boardId
        },

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
        this.newList = { title: "", boardId: this.boardId };
      }
    },
    props: ["boardId"],
    
    components: {
      List
    }
  };
</script>