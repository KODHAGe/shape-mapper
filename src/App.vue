<template>
  <div id="app">
    <P5Block title="Attribute 1"></P5Block>
    <P5Block title="Attribute 2"></P5Block>
    <P5Block title="Attribute 3"></P5Block>
    <P5Block title="Attribute 4"></P5Block>
    <P5Block title="Attribute 5"></P5Block>
    <P5Block title="Attribute 6"></P5Block>
    <P5Block title="Attribute 7"></P5Block>
    <P5Block title="Attribute 8"></P5Block>
    <P5Block title="Attribute 9"></P5Block>
    <FooterBar></FooterBar>
  </div>
</template>

<script>
import 'p5'
import P5Block from './components/P5Block.vue'
import FooterBar from './components/FooterBar.vue'

export default {
  name: 'app',
  components: {
    P5Block,
    FooterBar
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

/* FOR PROTOTYPING ❤️ */

</style>
