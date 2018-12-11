<template>
  <div class="list">
    <p>{{title}}</p>
    <button @click="deleteList(listId)">DELETE</button>
    <form @submit.prevent="addTask">
      <input type="text" placeholder="task" v-model="newTask.title" required>
      <button type="submit">Task</button>
    </form>
    <div v-for="(value,key) in tasks" :key="key">
      <div v-for="task in value" :key="task._id" v-if="task.listId == listId">
        <task :taskId="task._id" :boardId="task.boardId" :title="task.title" :authorId="task.authorId"></task>
      </div>
    </div>
  </div>
</template>
<script>
  import Task from '@/components/Task.vue'
  export default {
    props: ["listId", "title", "boardId"],
    name: 'list',
    data() {
      return {
        newTask: {
          title: '',
          listId: this.listId,
          boardId: this.boardId,
          authorId: this.$store.state.user._id
        }
      }
    },
    computed: {
      tasks() {
        return this.$store.state.tasks
      }
    },
    mounted() {
      this.$store.dispatch('getTasks', this.boardId)
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
        let newTask = { title: "", listId: this.listId, boardId: this.boardId, authorId: this.$store.state.user._id }
        console.log(newTask)
      }
    },
    components: {
      Task
    }
  }
</script>

<style scoped>
</style>