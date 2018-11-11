<template>
  <div class="p5block">
    <h3 class="attribute-title">{{title}} - <span class="attribute-definition">{{definition}}</span></h3>
    <h5 class="attribute-synonyms">Synonyms: {{synonyms}}</h5>
    <p class="feature-title">Shape</p>
    <vue-slider class="box-selector" ref="slider" v-model="blockSelection" v-bind="options">
        <div class="slider-label" slot="label" slot-scope="{ label }">
          <img  v-if="label != ''" class="slider-label--image" :src="url + label + '.svg'">
        </div>
    </vue-slider>
    <P5BoxBlock :title="title" :index="index" v-if="blockSelection == 'Box'"></P5BoxBlock>
    <P5ConeBlock :title="title" :index="index" v-if="blockSelection == 'Cone'"></P5ConeBlock>
    <P5CylinderBlock :title="title" :index="index" v-if="blockSelection == 'Cylinder'"></P5CylinderBlock>
    <P5DodecahedronBlock :title="title" :index="index" v-if="blockSelection == 'Dodecahedron'"></P5DodecahedronBlock>
    <P5EllipsoidBlock :title="title" :index="index" v-if="blockSelection == 'Ellipsoid'"></P5EllipsoidBlock>
    <P5IcosahedronBlock :title="title" :index="index" v-if="blockSelection == 'Icosahedron'"></P5IcosahedronBlock>
    <P5OctahedronBlock :title="title" :index="index" v-if="blockSelection == 'Octahedron'"></P5OctahedronBlock>
    <P5PlaneBlock :title="title" :index="index" v-if="blockSelection == 'Plane'"></P5PlaneBlock>
    <P5TetrahedronBlock :title="title" :index="index" v-if="blockSelection == 'Tetrahedron'"></P5TetrahedronBlock>
    <P5TorusBlock :title="title" :index="index" v-if="blockSelection == 'Torus'"></P5TorusBlock>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

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

import vueSlider from './VueSliderComponent.vue'

import dictionary from '../assets/dictionary.json'
import { common } from '../assets/blockCommons'

export default Vue.extend({
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
  props: common.props,
  data () {
    return {
      blockSelection: '',
      options: {
        width: "90%",
        value: "",
        tooltip: "always",
        disabled: false,
        piecewise: true,
        piecewiseLabel: true,
        data: [
          "",
          "Box",
          "Cone",
          "Cylinder",
          "Dodecahedron",
          "Ellipsoid",
          "Plane",
          "Icosahedron",
          "Torus",
          "Octahedron",
          "Tetrahedron"
        ],
        piecewiseStyle: {
          "backgroundColor": "#ccc",
          "visibility": "visible",
          "width": "12px",
          "height": "12px"
        },
        piecewiseActiveStyle: {
          "backgroundColor": "#ccc"
        },
        labelActiveStyle: {
          "color": "#333"
        },
        tooltipStyle: [
          {
            "color": "#000",
            "backgroundColor": "#6abe95",
            "borderColor": "transparent"
          },
          {
            "color": "#000",
            "backgroundColor": "transparent",
            "borderColor": "transparent"
          }
        ],
        sliderStyle: [
          {
            "backgroundColor": "#ccc"
          }
        ],
        processStyle: {
          "backgroundColor": "#ccc"
        }
      }
    }
  },
  computed: {
    url(): String | undefined {
      return 'https://' + process.env.VUE_APP_URL + '/icons/'
    },
    definition(): String {
      let key = this.title.toLowerCase()
      return dictionary[key].definition
    },
    synonyms(): String {
      let key = this.title.toLowerCase()
      return dictionary[key].synonyms
    }
  }
})
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
  .attribute-definition {
    font-weight: 400;
    font-style: italic;
  }
  .attribute-synonyms {
    margin: 1rem;
    font-weight: 400;
  }
  .block-select {
    margin: 1rem;
    margin-top: 0.5rem;
  }
  .vue-slider:hover {
    cursor: pointer;
  }
  .vue-slider-piecewise-label:hover {
    cursor: pointer;
    font-weight: 700;
  }
  .box-selector {
    margin-left: 1em;
    margin-top: 3em;
  }

  .slider-label--image {
    width: 50px;
    margin-left: -22px;
  }

  .vue-slider-tooltip::before {
    border-top-color: #000!important;
  }

  .vue-slider-component.vue-slider-has-label {
    margin-bottom: 2rem;
  }

  .feature-title {
    font-size: 1.1rem;
    margin-left: 1rem;
    margin-bottom: -2rem;
  }
</style>
