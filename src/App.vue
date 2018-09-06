<template>
  <div id="app">
    <P5Block v-for="item in blocksArray" :title="item" :key="item"></P5Block>
    <FooterBar></FooterBar>
  </div>
</template>

<script>
import store from './store'
import P5Block from './components/P5Block.vue'
import FooterBar from './components/FooterBar.vue'
import { anonymousSignOn, addResultRecords } from './api/firebase.js'

export default {
  store,
  name: 'app',
  components: {
    P5Block,
    FooterBar
  },
  props: {
    blocks: {
      type: String,
      default: "Anger"
    }
  },
  computed: {
    dataToSave() {
      return this.$store.state.objectStorage
    },
    userId() {
      return this.$store.state.userId
    },
    blocksArray() {
      return this.blocks ? this.blocks.split(",") : null
    }
  },
  mounted() {
    anonymousSignOn().then((uid) => {
      this.$store.commit('setUser', uid)
      this.autosave = true
    })
  },
  watch: {
    dataToSave: {
      handler () {
        this.$store.commit('saveState', false)
        if(this.autosave == true && this.dataToSave){
          addResultRecords(this.dataToSave, this.userId, (value) => {
            this.$store.commit('saveState', value)
          })
        }
      },
      deep: true
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Amiri');

#app {
  width: 100%;
  display: flex;
  flex-flow: column;
  font-family: 'Amiri', serif;
}

.vue-slider-component .vue-slider-process {
  background-color: #6abe95;
}

.box-shadow-1 {
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.10);
}

.box-shadow-2 {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.12), 0 2px 4px 0 rgba(0,0,0,0.08);
}

.box-shadow-3 {
  box-shadow: 0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08);
}

</style>
