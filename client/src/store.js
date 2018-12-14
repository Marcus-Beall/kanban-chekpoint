import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from './router'


Vue.use(Vuex)

let production = !window.location.host.includes('localhost')
let baseUrl = production ? 'http://jarviskanban.herokuapp.com/' : '//localhost:3000/'

let auth = Axios.create({
  baseURL: baseUrl + 'auth/',
  timeout: 3000,
  withCredentials: true
})

let api = Axios.create({
  baseURL: baseUrl + "api/",
  timeout: 5000,
  withCredentials: true
})

export default new Vuex.Store({
  state: {
    user: {},
    boards: [],
    activeBoard: '',
    lists: [],
    boardId: '',
    tasks: {}
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
    setBoards(state, boards) {
      state.boards = boards
    },
    setLists(state, lists) {
      state.lists = lists
    },
    setActiveBoard(state, board) {
      state.activeBoard = board
    },
    setTasks(state, tasks) {
      state.tasks = tasks
    },
    makeComment(state, task) {
      let index = state.tasks[task.listId].findIndex(t => t._id == task._id)
      state.tasks[task.listId][index] = task
    }
  },
  actions: {
    //AUTH STUFF
    register({ commit, dispatch }, newUser) {
      auth.post('register', newUser)
        .then(res => {
          commit('setUser', res.data)
          router.push({ name: 'boards' })
        })
    },
    authenticate({ commit, dispatch }) {
      auth.get('authenticate')
        .then(res => {
          commit('setUser', res.data)
          router.push({ name: 'boards' })
        })
    },
    login({ commit, dispatch }, creds) {
      auth.post('login', creds)
        .then(res => {
          commit('setUser', res.data)
          router.push({ name: 'boards' })
        })
    },
    logout({ commit, dispatch }) {
      auth.delete('logout')
        .then(res => {
          let user = {}
          commit('setUser', user)
          router.push({ name: 'login' })
        })
    },

    //BOARDS
    getBoards({ commit, dispatch }) {
      api.get('boards')
        .then(res => {
          commit('setBoards', res.data)
        })
    },
    addBoard({ commit, dispatch }, boardData) {
      api.post('boards', boardData)
        .then(serverBoard => {
          dispatch('getBoards')
        })
    },
    deleteBoard({ commit, dispatch }, boardId) {
      api.delete('boards/' + boardId)
        .then(res => {
          dispatch('getBoards')
        })
    },
    setBoard({ commit, dispatch }, boardData) {
      dispatch('setActiveBoard', boardData)
    },

    //Lists
    getLists({ commit, dispatch }, boardId) {
      api.get('lists/' + boardId)
        .then(res => {
          console.log(res.data)
          commit('setLists', res.data)
        })
    },
    addList({ commit, dispatch }, listData) {
      api.post('lists/' + listData.boardId, listData)
        .then(lists => {
          dispatch('getLists', listData.boardId)
        })
    },
    deleteList({ commit, dispatch }, list) {
      api.delete('lists/' + list.boardId + '/' + list.id)
        .then(res => {
          dispatch('getLists')
        })
    },

    //Tasks
    addTask({ commit, dispatch }, taskData) {
      api.post('tasks/' + taskData.boardId, taskData)
        .then(tasks => {
          dispatch('getTasks', taskData.boardId)
        })
    },
    getTasks({ commit, dispatch }, boardId) {
      let dict = {}
      api.get('tasks/' + boardId)
        .then(tasks => {
          console.log(tasks)
          tasks.data.forEach(task => {
            if (!dict[task.listId]) {
              dict[task.listId] = []
            }
            dict[task.listId].push(task)
          })
          console.log(dict)
          commit('setTasks', dict)
        })
    },
    deleteTask({ commit, dispatch }, task) {
      api.delete('/tasks/' + task.boardId + '/' + task.id)
        .then(res =>
          dispatch('getTasks', task.boardId))
    },
    moveTask({ commit, dispatch }, task) {
      api.put('/tasks/' + task.boardId + '/' + task.id + '/move', task)
        .then(res =>
          dispatch('getTasks', task.boardId))
    },

    //Comments
    makeComment({ commit, dispatch }, comment) {
      api.post('/tasks/' + comment.boardId + '/' + comment.taskId + '/comment', comment)
        .then(res => {
          commit('makeComment', res.data)
        })
    }
  }
}) 
