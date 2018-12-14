import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import DragandDrop from 'vue-drag-drop';
// Vue.config.productionTip = false

Vue.use(DragandDrop)

new Vue({
  router,
  store,
  created() {
    this.$store.dispatch("authenticate");
  },
  render: h => h(App)
}).$mount('#app')
