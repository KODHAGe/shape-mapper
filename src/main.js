import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

Vue.config.productionTip = false
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    ObjectStorage: []
  },
  mutations: {
    update (state, newObject) {
      let pos = state.ObjectStorage.map(function(e) { 
        return e.title
      }).indexOf(newObject.title)
      if(pos === -1) {
        state.ObjectStorage.push(newObject)
      } else {
        state.ObjectStorage[pos] = newObject
      }
    }
  }
})

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
