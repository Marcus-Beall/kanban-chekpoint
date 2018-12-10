<template>
  <div class="list">
    <p>{{title}}</p>
    <button @click="deleteList(listId)">DELETE</button>
    <form @submit.prevent="addTask">
      <input type="text" placeholder="task" v-model="newTask.title" required>
      <button type="submit">Task</button>
    </form>
  </div>
</template>
<script>
  import Task from '@/components/Task.vue'
  export default {
    props: ["listId", "title"],
    name: 'list',
    data() {
      return {
        newTask: {
          title: '',
          listId: this.listId
        }
      }
    },
    methods: {
      deleteList(id) {
        let list = {
          boardId: this.$route.params.boardId,
          id: id
        }
        this.$store.dispatch('deleteList', list)
      },
      addTask() {
        this.$store.dispatch('addTask', this.newTask)
        let newTask = { title: "", listId: this.listId }
      }
    },
    components: {
      Task
    }
  }
</script>

<style scoped>
</style>