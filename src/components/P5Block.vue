<template>
  <div class="p5block">
    <h3 class="attribute-title">{{title}}</h3>
    <select class="block-select" v-model="blockSelection">
      <option value="" disabled selected hidden>Please select a shape</option>
      <option value="box">Box</option>
      <option value="cone">Cone</option>
      <option value="cylinder">Cylinder</option>
      <option value="dodecahedron">Dodecahedron</option>
      <option value="ellipsoid">Ellipsoid</option>
      <option value="plane">Plane</option>
      <option value="icosahedron">Icosahedron</option>
      <option value="torus">Torus</option>
      <option value="octahedron">Octahedron</option>
      <option value="tetrahedron">Tetrahedron</option>
    </select>
    <P5BoxBlock :title="title" v-if="blockSelection == 'box'"></P5BoxBlock>
    <P5ConeBlock :title="title" v-if="blockSelection == 'cone'"></P5ConeBlock>
    <P5CylinderBlock :title="title" v-if="blockSelection == 'cylinder'"></P5CylinderBlock>
    <P5DodecahedronBlock :title="title" v-if="blockSelection == 'dodecahedron'"></P5DodecahedronBlock>
    <P5EllipsoidBlock :title="title" v-if="blockSelection == 'ellipsoid'"></P5EllipsoidBlock>
    <P5IcosahedronBlock :title="title" v-if="blockSelection == 'icosahedron'"></P5IcosahedronBlock>
    <P5OctahedronBlock :title="title" v-if="blockSelection == 'octahedron'"></P5OctahedronBlock>
    <P5PlaneBlock :title="title" v-if="blockSelection == 'plane'"></P5PlaneBlock>
    <P5TetrahedronBlock :title="title" v-if="blockSelection == 'tetrahedron'"></P5TetrahedronBlock>
    <P5TorusBlock :title="title" v-if="blockSelection == 'torus'"></P5TorusBlock>
  </div>
</template>

<script>
import P5BoxBlock from './P5BoxBlock.vue'
import P5ConeBlock from './P5ConeBlock.vue'
import P5CylinderBlock from './P5CylinderBlock.vue'
import P5DodecahedronBlock from './P5DodecahedronBlock.vue'
import P5EllipsoidBlock from './P5EllipsoidBlock.vue'
import P5IcosahedronBlock from './P5IcosahedronBlock.vue'
import P5OctahedronBlock from './P5OctahedronBlock.vue'
import P5PlaneBlock from './P5PlaneBlock.vue'
import P5TetrahedronBlock from './P5TetrahedronBlock.vue'
import P5TorusBlock from './P5TorusBlock.vue'

import vueSlider from './VueSliderComponent'

export default {
  name: 'P5Block',
  components: {
    P5BoxBlock,
    P5ConeBlock,
    P5CylinderBlock,
    P5DodecahedronBlock,
    P5EllipsoidBlock,
    P5IcosahedronBlock,
    P5OctahedronBlock,
    P5PlaneBlock,
    P5TorusBlock,
    P5TetrahedronBlock,
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
    }
  }
}
</script>

<style scoped>
  .p5block {
    border: 1px solid #eee;
    margin-bottom: 0.5rem;
    padding: 0.5rem;
  }
  .attribute-title {
    margin: 1rem;
    margin-bottom: 0.5rem;
  }
  .block-select {
    margin: 1rem;
    margin-top: 0.5rem;
  }
</style>
