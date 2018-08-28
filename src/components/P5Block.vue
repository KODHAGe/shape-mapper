<template>
  <div class="p5block">
    <div class="p5block-variables">
      This here will be content
    </div>
    <P5Scene class="p5block-scene"></P5Scene>
  </div>
</template>

<script>
import P5Scene from './P5Scene.vue'

export default {
  name: 'P5Block',
  components: {
    P5Scene
  },
  props: {
    msg: String
  }
}
</script>

<style scoped>
  .p5block {
    display: flex;
    flex-grow: 1;
    flex-flow: row;
    justify-content: space-between
  }
  .p5block-variables {
    font-size: 1.1em;
  }
</style>
