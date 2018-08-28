<template>
  <div id="app">
    <P5Block type="rectangle"></P5Block>
    <P5Block type="cube"></P5Block>
  </div>
</template>

<script>
import BoxComponent from './components/BoxComponent.vue'
import 'aframe'
import 'p5'
import AframeBlock from './components/AframeBlock.vue'
import P5Block from './components/P5Block.vue'

export default {
  name: 'app',
  components: {
    BoxComponent,
    AframeBlock,
    P5Block
  }
}
</script>

<style>
#app {
  width: 100%;
  display: flex;
  flex-flow: column;
}

/* FOR PROTOTYPING ❤️ */

</style>
