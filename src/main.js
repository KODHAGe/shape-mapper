import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

Vue.config.productionTip = false
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    objectStorage: [],
    userId: '',
    saveState: false
  },
  mutations: {
    updateObjectStorage (state, newObject) {
      let pos = state.objectStorage.map(function(e) { 
        return e.title
      }).indexOf(newObject.title)
      if(pos === -1) {
        state.objectStorage.push(newObject)
      } else {
        state.objectStorage[pos] = newObject
      }
    },
    setUser (state, id) {
      state.userId = id;
    },
    saveState (state, saveState) {
      state.saveState = saveState
    }
  }
})

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
