<template>
  <div id="app">
    <P5Block title="Attribute name up here"></P5Block>
  </div>
</template>

<script>
import BoxComponent from './components/BoxComponent.vue'
import 'p5'
import P5Block from './components/P5Block.vue'

export default {
  name: 'app',
  components: {
    BoxComponent,
    P5Block
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

/* FOR PROTOTYPING ❤️ */

</style>
