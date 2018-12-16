<template>
  <drag :transfer-data="{taskId: this.taskId, listId: listId, boardId: boardId, authorId: authorId}" class=task>
    <div class="task my-1">
      <div class="row ">
        <p class="my-2 text-start" style="font-family: 'Share Tech Mono', monospace; color:#1B4E5F;">{{title}}</p>
      </div>
      <div class="
        btn-group" role="group" aria-label="Button group with nested dropdown">
        <div class="btn-group show" role="group">
          <div class="row justify-content-around">
            <div class="col-4">
              <img @click="commentInput = !commentInput" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAABfAAAAXwBsrqMZwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAHiSURBVEiJ1ZU9aFNRFMd/570mTYWoAdFq1aFrETVQ6VocRISHS1AULNQPUNDJWYqDux9Q6KB9EaVQxfhQMolZpCJETHFwcBDxDjrY0IL1mbxcl6bvJY1J+vIW/9O95xx+/3O4cC7875J2yf0nzqQ8M3YazXGEESC1lloCPoLkYwZzX3Kz5U0ZjGQy8fLvLTcQrgHJDh0ua7gzONh/szgzU+losNO6sCtGJQeMtQO3cFqoGrWT3589/PFPg+HMpW2u6xaAQ5uC+3q/WqmO/8w/Wq4HjGDWdd17PcAB0gPxvtvBwPoEe6xzhwUp0uHhu1CNmplWL+6XIDCBgZyPAA5gaPEmfa6v8QjgAIj4rKDB3uZC5diiHFu6vQe0r5VBlErUD+vuQ9bEInAgIoNF5dgHoXGCVxHBAd7WD76BITago+HruQ0GKjf7QdAPekULFJWTfb3BAMDwqtdBl3rgexj6SgMzePn68vESJkcRFsLx9a1vuey7YMRsLln5VFpd2Z2yk4ntnsAoEO+S7qj08GUKhYZ3bLsadliTyYRUT2ktx4Aj+H9DqqFQeDrwZ+vZz/m7bjMj1O4ZsiaCXU6r/l9XmZ/3WtX2hTFYUxnRF9Xz7JN2RWFXxRuNOdYJHl5TU1039hcSxY7NJed3EAAAAABJRU5ErkJggg=="></div>
            <div class="col-4"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAABfAAAAXwBsrqMZwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAGVSURBVEiJ7ZW/T1NRFMc/575CB+LYpPIIOwGdXBhIkIahQ1ucnOClk7OT/gm6+R8AZcF04EcHAuGHJkx0U4i7eS0kTC6tKbn3OCgJLQ9eLU2UhO/4Pfd8vyf3e3Mu3HdIN4dGcgtvVORdW6Pq27BSev/XBn4uOECY7nrENuh+bbOUucqYCMtEb+KgSM+9/y8iQ/bzgfYiVttcvqZ3PYM+I9ZAjDxHTaaTV9HZKL4TsamH60ufAPx80MbXN0q7UXwn/v0VPRjc3UDldSJhh1vJxqOo8p13R62y9OG2el+Wk58LDjAkbcsUzrYWz9PZYsobdBsoP/uTgTCEMukNuL3HL+bHvAG3hzKJMhS7i0TdtIhRB5+vnlHVqXqldAjwZ+J9lAnAAQbh2LbMzE0GIeDHDi7sMNiYC8vl5mguGLfCF34/HOcpT79Xlk9uuqJXQP02cUW2Ez+kEJbLzXS2mLKG1UtxwFjDajpbTHX1J8dhOB9UBZ4BX53nXhprPgJPgGpfQjbQRDmyFyZzurbyzV6YDFAFafwCjwN/ixAFWjoAAAAASUVORK5CYII="
                style="color: #1B4E5F" @click="deleteTask(taskId)"></div>
            <div class="col-4"><img class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADLSURBVEhL7ZTbCcJAEEUXBBtRe/DRm48KDFiDWJhagoog6r1rBkIcdRxmf8QDh2SS7Nwku0n6aWb1tghsfnvsxiPNiwQ0m4cHtJuHBmjNrV7gHm7gCKrMoTbY4wp24BNaiAU268EpPEIJUWmHfMsYHuC13ldphniQ8etcvUAu8tCHHLvL1RsY4qELGXDOVQEG0PQEXhbw4xx4mUAuVa6iIQ9EwO+AE8s5O0HefQVVeJIK1lrknS+h+iUTuVCw1PwXbSHfedhr+RNFSncEvWfWonkmUwAAAABJRU5ErkJggg==">
              <div class="dropdown-menu" aria-labelledby="btnGroupDrop1" x-placement="bottom-start" style="position: absolute; transform: translate3d(0px, 38px, 0px); top: 0px; left: 0px; will-change: transform;">
                <a v-for="list in lists" class="dropdown-item" href="#" @click="moveTask(moveTaskId, listId, list._id)">{{list.title}}</a></div>
            </div>
          </div>
        </div>
      </div>
      <form v-if="commentInput" class="form-inline my-2 my-lg-0">
        <input class="form-control boarddrop my-2 mr-sm-2" type="text" style="font-family: 'Share Tech Mono', monospace; color:#1B4E5F;"
          v-model="newComment.title" placeholder="">
        <button class="btn boarddrop my-2 my-sm-0" style="font-family: 'Share Tech Mono', monospace; color:#1B4E5F;"
          type="submit" @click.prevent="makeComment(board, moveTaskId)">Comment</button></form>
      <div class="row my-3">
        <ul>
          <div class="col-12" v-for="comment in comments">
            <li style="font-family: 'Share Tech Mono', monospace; color:#1B4E5F;">
              {{comment.title}}</li>
          </div>
        </ul>
      </div>
      <hr class="divider">
      </hr>
    </div>
  </drag>
</template>

<script>
  import { Drag, Drop } from 'vue-drag-drop';
  export default {
    name: 'task',
    props: ['taskId', 'title', 'authorId', 'boardId', 'comments', 'listId'],
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
        board: this.boardId,
        commentInput: false,
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
      moveTask(taskId, oldListId, newListId) {
        let task = {
          id: taskId,
          boardId: this.boardId,
          oldListId: oldListId,
          authorId: this.authorId,
          listId: newListId
        }
        this.$store.dispatch('moveTask', task)
      },
      makeComment(boardId, taskId) {
        this.$store.dispatch('makeComment', this.newComment)
        this.newComment = { title: "", boardId: boardId, taskId: taskId };
      },
    },
    components: {
      Drag,
      Drop
    }
  }
</script>

<style scoped>
</style>