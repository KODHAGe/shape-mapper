<template>
  <div id="app">
    <a-scene>
      <BoxComponent msg='test'></BoxComponent>
    </a-scene>
  </div>
</template>

<script>
import BoxComponent from './components/BoxComponent.vue'
import 'aframe'

export default {
  name: 'app',
  components: {
    BoxComponent
  }
}
</script>

<style>
#app {
}
</style>
