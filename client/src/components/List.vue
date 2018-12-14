<template>
  <drop @drop="moveTask" class="list justify-content-center">
    <div class="card jarvisCard mb-3 justify-content-center" style="max-width: 20rem;">
      <div class="card-header justify-content-around" style="font-family: 'Share Tech Mono', monospace; color:#1B4E5F; max-width: 20rem;">
        <div class="col">
          <h4>{{titleCase(title)}}</h4>
        </div>
        <div class="col"> <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAABfAAAAXwBsrqMZwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAFqSURBVEiJ7ZO9TgJBFIXPBY2Nrr1MLXbCG/ACjCb07D4EP1IYkMKEv8TemLDa2rB0xoT4BkBhgo0Wsi+wPddCMER22FmWxsRbzdwz+c6dORngr1d8G5CENCtGMvVonJx+eJPR61YNRNa8AqEOYB+gnHGcfvfehuOFHotqMIvR3tI2DuI7kTVzkQ3EuZUBALfXvWCixpK0y4TbSAZCWjWe8eBI5qt+Jky4WaxDZ5CQZhtABQAIlDGSqQNvMnryJsPnw2SamDBwe3Z9cZ5CTX5mtphR8JE6U8f26+sbJKR1CXBdpRPPMp/9h5ff/R0d+Pfk7DvhvAp+cEAjZCHzTcWz/MCnjt1RiWtDFjLfZFBRpTOj6PbVcGDNEwlpNhgIgrfXwQFFyHN4KSoc8MkgEA4q6cJXDIS0aoFwp9vSha8YMLiqPEl0HRYOaP4DBspur9sMCwc0/gEDZdexN4IDATdgcM117jeG/5dWfQF5hoqMQn4w3wAAAABJRU5ErkJggg=="
            @click="listInput = !listInput">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAABfAAAAXwBsrqMZwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAGVSURBVEiJ7ZW/T1NRFMc/575CB+LYpPIIOwGdXBhIkIahQ1ucnOClk7OT/gm6+R8AZcF04EcHAuGHJkx0U4i7eS0kTC6tKbn3OCgJLQ9eLU2UhO/4Pfd8vyf3e3Mu3HdIN4dGcgtvVORdW6Pq27BSev/XBn4uOECY7nrENuh+bbOUucqYCMtEb+KgSM+9/y8iQ/bzgfYiVttcvqZ3PYM+I9ZAjDxHTaaTV9HZKL4TsamH60ufAPx80MbXN0q7UXwn/v0VPRjc3UDldSJhh1vJxqOo8p13R62y9OG2el+Wk58LDjAkbcsUzrYWz9PZYsobdBsoP/uTgTCEMukNuL3HL+bHvAG3hzKJMhS7i0TdtIhRB5+vnlHVqXqldAjwZ+J9lAnAAQbh2LbMzE0GIeDHDi7sMNiYC8vl5mguGLfCF34/HOcpT79Xlk9uuqJXQP02cUW2Ez+kEJbLzXS2mLKG1UtxwFjDajpbTHX1J8dhOB9UBZ4BX53nXhprPgJPgGpfQjbQRDmyFyZzurbyzV6YDFAFafwCjwN/ixAFWjoAAAAASUVORK5CYII="
            style="color: #1B4E5F" @click="deleteList(listId)">
        </div>
      </div>
      <div v-if="listInput" class="row justify-content-center">
        <form @submit.prevent="addTask">
          <input type="text" placeholder="Task" v-model="newTask.title" style="font-family: 'Share Tech Mono', monospace; color:#1B4E5F;"
            required>
          <button type="submit" class="boarddrop" style="font-family: 'Share Tech Mono', monospace; color:#1B4E5F;">Add
            Task</button>
        </form>
      </div>
      <div class="card-body">
        <div v-for="(value,key) in tasks" :key="key">
          <div v-for="task in value" :key="task._id" v-if="task.listId == listId">
            <task :taskId="task._id" :boardId="task.boardId" :title="task.title" :authorId="task.authorId" :comments="task.comments"
              :listId="listId"></task>
          </div>
        </div>
      </div>
    </div>
  </drop>
  </div>
</template>
<script>
  import Task from '@/components/Task.vue'
  import { Drag, Drop } from 'vue-drag-drop';
  export default {
    props: ["listId", "title", "boardId", "newListId"],
    name: 'list',
    data() {
      return {
        newTask: {
          title: '',
          listId: this.listId,
          boardId: this.boardId,
          authorId: this.$store.state.user._id
        },
        listInput: false
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
      },
      titleCase(title) {
        return title.toUpperCase()
      },
      moveTask(data) {
        let dragTask = {
          id: data.taskId,
          oldList: data.listId,
          authorId: data.authorId,
          listId: this.listId,
          boardId: this.boardId
        }
        this.$store.dispatch('moveTask', dragTask)
      }
    },

    components: {
      Task,
      Drag,
      Drop
    }
  }
</script>

<style scoped>
  .jarvisCard {
    background-color: #FFFFFF;
    box-shadow: 3px 3px 3px 3px #52fefe, 3px 3px 3px 3px #52fefe inset
  }
</style>