<template>
    <div class="p5block-wrapper">
      <div class="p5block-variables">
        <p>Rotation on the X-axis</p>
        <vue-slider ref="slider" v-model="sliderData.sliderValueRotX" :max=360 tooltip-dir="bottom" :tooltip="false"></vue-slider>
        <p>Rotation on the Y-axis</p>
        <vue-slider ref="slider" v-model="sliderData.sliderValueRotY" :max=360 tooltip-dir="bottom" :tooltip="false"></vue-slider>      
        <p>Rotation on the Z-axis</p>
        <vue-slider ref="slider" v-model="sliderData.sliderValueRotZ" :max=360 tooltip-dir="bottom" :tooltip="false"></vue-slider>  
        <!--<p>Position on the x-axis</p>
        <vue-slider ref="slider" v-model="sliderData.sliderValueX" :min=-150 :max=150 tooltip-dir="bottom" :tooltip="false"></vue-slider> 
        <p>Position on the y-axis</p>
        <vue-slider ref="slider" v-model="sliderData.sliderValueY" :min=-150 :max=150 tooltip-dir="bottom" :tooltip="false"></vue-slider>
        <p>Position on the z-axis</p>
        <vue-slider ref="slider" v-model="sliderData.sliderValueZ" :min=-150 :max=150 tooltip-dir="bottom" :tooltip="false"></vue-slider>-->   
        <p>Width</p>
        <vue-slider ref="slider" v-model="sliderData.sliderValueLength" :min=50 :max=150 tooltip-dir="bottom" :tooltip="false"></vue-slider>
        <p>Length</p>
        <vue-slider ref="slider" v-model="sliderData.sliderValueWidth" :min=50 :max=150 tooltip-dir="bottom" :tooltip="false"></vue-slider>
        <p>Height</p>
        <vue-slider ref="slider" v-model="sliderData.sliderValueHeight" :min=50 :max=150 tooltip-dir="bottom" :tooltip="false"></vue-slider>
        <p>Hue</p>
        <vue-slider ref="slider" v-model="sliderData.sliderValueHue" :min=0 :max=255 tooltip-dir="bottom" :tooltip="false"></vue-slider>
      </div>
      <P5Scene :sliderData="sliderData" class="p5block-scene"></P5Scene>
  </div>
</template>

<script>
import P5Scene from './P5Scene.vue'
import vueSlider from 'vue-slider-component'

export default {
  name: 'P5CubeBlock',
  components: {
    P5Scene,
    vueSlider
  },
  props: {
  },
  data () {
    return {
      sliderData: {
        sliderValueRotX: 180,
        sliderValueRotY: 180,
        sliderValueRotZ: 0,
        /*sliderValueX: 0,
        sliderValueY: 0,
        sliderValueZ: 0,*/
        sliderValueLength: 100,
        sliderValueWidth: 100,
        sliderValueHeight: 100,
        sliderValueHue: 0
      }
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
