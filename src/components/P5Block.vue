<template>
  <div class="p5block">
    <div class="p5block-wrapper" :class="type" v-if="type == 'rectangle'">
      <div class="p5block-variables">
        <h3>Attribute</h3>
        <p>X</p>
        <vue-slider ref="slider" v-model="sliderValueX" :min=-150 :max=150 tooltip-dir="bottom" :tooltip="false"></vue-slider>      
        <p>Y</p>
        <vue-slider ref="slider" v-model="sliderValueY" :min=-150 :max=150 tooltip-dir="bottom" :tooltip="false"></vue-slider>      
        <p>Length</p>
        <vue-slider ref="slider" v-model="sliderValueL" :min=-150 :max=150 tooltip-dir="bottom" :tooltip="false"></vue-slider>
        <p>Height</p>
        <vue-slider ref="slider" v-model="sliderValueW" :min=-150 :max=150 tooltip-dir="bottom" :tooltip="false"></vue-slider>
      </div>
      <P5Scene :type="type" :x="sliderValueX" :y="sliderValueY" :w="sliderValueL" :l="sliderValueW" class="p5block-scene"></P5Scene>
    </div>
    <div class="p5block-wrapper" :class="type"  v-if="type == 'cube'">
      <div class="p5block-variables">
        <h3>Attribute</h3>
        <p>Rotation</p>
        <vue-slider ref="slider" v-model="sliderValueX" :max=150 tooltip-dir="bottom" :tooltip="false"></vue-slider>      
        <p>Y</p>
        <vue-slider ref="slider" v-model="sliderValueY" :min=-150 :max=150 tooltip-dir="bottom" :tooltip="false"></vue-slider>      
        <p>Width</p>
        <vue-slider ref="slider" v-model="sliderValueL" :min=50 :max=150 tooltip-dir="bottom" :tooltip="false"></vue-slider>
        <p>Length</p>
        <vue-slider ref="slider" v-model="sliderValueW" :min=50 :max=150 tooltip-dir="bottom" :tooltip="false"></vue-slider>
      </div>
      <P5Scene :type="type" :x="sliderValueX" :y="sliderValueY" :w="sliderValueL" :l="sliderValueW" class="p5block-scene"></P5Scene>
    </div>
  </div>
</template>

<script>
import P5Scene from './P5Scene.vue'
import vueSlider from 'vue-slider-component'

export default {
  name: 'P5Block',
  components: {
    P5Scene,
    vueSlider
  },
  props: {
    type: {
      type: String
    }
  },
  data () {
    return {
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
