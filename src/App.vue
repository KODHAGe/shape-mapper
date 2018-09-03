<template>
  <div id="app">
    <P5Block title="Attribute name up here"></P5Block>
    <P5Block title="Test 2"></P5Block>
  </div>
</template>

<script>
import 'p5'
import P5Block from './components/P5Block.vue'

export default {
  name: 'app',
  components: {
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
