<template>
  <div class="p5block">
    <h3>{{title}}</h3>
    <select v-model="blockSelection">
      <option value="" disabled selected hidden>Please select a shape</option>
      <option value="box">Box</option>
      <option value="cone" disabled>Cone</option>
      <option value="dodecahedron" disabled>Dodecahedron</option>
      <option value="ellipsoid" disabled>Ellipsoid</option>
      <option value="plane" disabled>Plane</option>
      <option value="hexahedron" disabled>Hexahedron</option>
      <option value="icosahedron" disabled>Icosahedron</option>
      <option value="toroid" disabled>Toroid</option>
      <option value="octahedron" disabled>Octahedron</option>
      <option value="plane" disabled>Plane</option>
    </select>
    <P5BoxBlock v-if="blockSelection == 'box'"></P5BoxBlock>
    <P5ConeBlock v-if="blockSelection == 'cone'"></P5ConeBlock>
    <P5CylinderBlock v-if="blockSelection == 'cylinder'"></P5CylinderBlock>
    <P5DodecahedronBlock v-if="blockSelection == 'dodecahedron'"></P5DodecahedronBlock>
    <P5EllipsoidBlock v-if="blockSelection == 'ellipsoid'"></P5EllipsoidBlock>
    <P5HexahedronBlock v-if="blockSelection == 'hexahedron'"></P5HexahedronBlock>
    <P5IcosahedronBlock v-if="blockSelection == 'icosahedron'"></P5IcosahedronBlock>
    <P5OctahedronBlock v-if="blockSelection == 'octahedron'"></P5OctahedronBlock>
    <P5PlaneBlock v-if="blockSelection == 'plane'"></P5PlaneBlock>
  </div>
</template>

<script>
import P5BoxBlock from './P5BoxBlock.vue'
import P5ConeBlock from './P5ConeBlock.vue'
import P5CylinderBlock from './P5CylinderBlock.vue'
import P5DodecahedronBlock from './P5DodecahedronBlock.vue'
import P5EllipsoidBlock from './P5EllipsoidBlock.vue'
import P5HexahedronBlock from './P5HexahedronBlock.vue'
import P5IcosahedronBlock from './P5IcosahedronBlock.vue'
import P5OctahedronBlock from './P5OctahedronBlock.vue'
import P5PlaneBlock from './P5PlaneBlock.vue'
import vueSlider from 'vue-slider-component'

export default {
  name: 'P5Block',
  components: {
    P5BoxBlock,
    P5ConeBlock,
    P5CylinderBlock,
    P5DodecahedronBlock,
    P5EllipsoidBlock,
    P5HexahedronBlock,
    P5IcosahedronBlock,
    P5OctahedronBlock,
    P5PlaneBlock,
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
