<template>
  <div class="task">
    {{taskId}} {{title}}
    <div class="btn-group" role="group" aria-label="Button group with nested dropdown">
      <div class="btn-group show" role="group">
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="text" v-model="newComment.title" placeholder="">
          <button @click="makeComment(board, moveTaskId)" class="btn btn-primary my-2 my-sm-0" type="submit">Comment</button>
        </form>
        <button type="button" class="btn btn-primary my-2 my-lg-0 my-sm-0" @click="deleteTask(taskId)">Delete</button>
        <button id="btnGroupDrop1" type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false"></button>
        <div class="dropdown-menu" aria-labelledby="btnGroupDrop1" x-placement="bottom-start" style="position: absolute; transform: translate3d(0px, 38px, 0px); top: 0px; left: 0px; will-change: transform;">
          <a v-for="list in lists" class="dropdown-item" href="#" @click="moveTask(moveTaskId, list._id)">{{list.title}}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'task',
    props: ['taskId', 'title', 'authorId', 'boardId'],
    computed: {
      lists() {
        return this.$store.state.lists
      }
    },
    data() {
      return {
        moveTaskId: this.taskId,
        newComment: {
          title: '',
          boardId: this.boardId,
          taskId: this.taskId
        },
        board: this.boardId
      }
    },
    methods: {
      deleteTask(id) {
        let task = {
          boardId: this.boardId,
          id: id
        }
        this.$store.dispatch('deleteTask', task)
      },
      moveTask(taskId, listId) {
        let task = {
          id: taskId,
          boardId: this.boardId,
          listId: listId,
          authorId: this.authorId
        }
        this.$store.dispatch('moveTask', task)
      },
      makeComment(boardId, taskId) {
        this.$store.dispatch('makeComment', this.newComment)
        this.newComment = { title: "", boardId: boardId, taskId: taskId };
      }
    }
  }
</script>

<style scoped>
</style>