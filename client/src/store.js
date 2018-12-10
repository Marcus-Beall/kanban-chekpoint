import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from './router'

Vue.use(Vuex)

let auth = Axios.create({
  baseURL: "//localhost:3000/auth/",
  timeout: 3000,
  withCredentials: true
})

let api = Axios.create({
  baseURL: "//localhost:3000/api/",
  timeout: 3000,
  withCredentials: true
})

// let boardApi = Axios.create({
//   baseURL: "//localhost:3000/api/" + this.$route.params.boardId,
//   timeout: 3000,
//   withCredentials: true
// })

export default new Vuex.Store({
  state: {
    user: {},
    boards: [],
    activeBoard: '',
    lists: [],
    boardId: ''
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
    setActiveBoard(state, boardId) {
      console.log(boardId)
      state.activeBoard = boardId
    },
    getTasks()
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
      api.post('task/' + taskData.listId, taskData)
        .then(tasks => {
          dispatch('getTasks', taskData.listId)
        })
    }
  }
}) 
