<template>
  <div id="app">
    <link href="https://fonts.googleapis.com/css?family=Amiri" rel="stylesheet">
    <Instructions v-if="instructions"></Instructions>
    <P5Block v-for="(item, index) in blocksArray" :index="index" :title="item" :key="item"></P5Block>
    <FooterBar></FooterBar>
  </div>
</template>

<script lang="ts">

import Vue from 'vue'
import store from './store'
import Instructions from './components/Instructions.vue'
import P5Block from './components/P5Block.vue'
import FooterBar from './components/FooterBar.vue'
import { anonymousSignOn, addResultRecords } from './api/firebase'

export default Vue.extend({
  store,
  name: 'app',
  components: {
    Instructions,
    P5Block,
    FooterBar
  },
  props: {
    blocks: {
      type: String,
      default: "Anger,Fear,Joy,Sadness,Analytical,Confident,Tentative,Negative,Positive"
    },
    instructions: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    dataToSave(): Array<any> {
      return this.$store.state.objectStorage
    },
    userId(): number {
      return this.$store.state.userId
    },
    blocksArray(): any {
      return this.blocks ? this.blocks.split(",") : null
    }
  },
  data () {
    return {
      autosave: false
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
          console.log(this.dataToSave)
          addResultRecords(this.dataToSave, this.userId, (value: any) => {
            this.$store.commit('saveState', value)
          })
        }
      },
      deep: true
    }
  }
})
</script>

<style>

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

/* HACK: Common styles for shape blocks */
.p5block-wrapper {
  margin: 1rem;
  display: flex;
  flex-grow: 1;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
}

.p5block-variables {
  font-size: 1.1rem;
  flex-grow: 0.8;
  align-self: end;
}

.p5block-scene {
  min-width: 300px;
}

.p5_loading {
  display: none;
}

</style>
