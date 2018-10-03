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
    // This updates the current stored object
    updateObjectStorage (state, newObject) {

      // Just in case of several objects to store
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
      // Whether or not data is currently saved into firebase
      state.saveState = saveState
    }
  }
})

export default store
