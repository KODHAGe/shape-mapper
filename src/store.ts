import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    objectStorage: <Array<any>> [],
    userId: <String> '',
    saveState: <Boolean> false
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

export default store
