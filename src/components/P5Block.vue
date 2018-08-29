<template>
  <div class="p5block">
    <h3>{{title}}</h3>
    <select v-model="blockSelection">
      <option value="" disabled selected hidden>Please select a shape</option>
      <option value="cone" disabled>Cone</option>
      <option value="cube">Cube</option>
      <option value="ellipsoid" disabled>Ellipsoid</option>
      <option value="plane" disabled>Plane</option>
      <option value="toroid" disabled>Toroid</option>
      <option value="pyramid" disabled>Pyramid</option>
    </select>
    <P5CubeBlock v-if="blockSelection == 'cube'"></P5CubeBlock>
  </div>
</template>

<script>
import P5CubeBlock from './P5CubeBlock.vue'
import vueSlider from 'vue-slider-component'

export default {
  name: 'P5Block',
  components: {
    P5CubeBlock,
    vueSlider
  },
  props: {
    title: {
      type: String
    }
  },
  data () {
    return {
      blockSelection: '',
      sliderValueX: 10,
      sliderValueY: 10,
      sliderValueL: 10,
      sliderValueW: 10
    }
  }
}
</script>

<style scoped>
  .p5block-wrapper {
    margin: 1em;
    display: flex;
    flex-grow: 1;
    flex-flow: row;
    justify-content: space-between;
    align-items:center;
  }
  .p5block-variables {
    font-size: 1.1em;
    flex-grow: 0.8;
    align-self: center;
  }
  .p5scene {
    align-self: center;
  }
  p {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
</style>
