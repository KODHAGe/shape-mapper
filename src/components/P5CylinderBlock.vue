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
        <p>Radius</p>
        <vue-slider ref="slider" v-model="sliderData.sliderValueRadius" :min=50 :max=100 tooltip-dir="bottom" :tooltip="false"></vue-slider>
        <p>Height</p>
        <vue-slider ref="slider" v-model="sliderData.sliderValueHeight" :min=50 :max=250 tooltip-dir="bottom" :tooltip="false"></vue-slider>
        <p>Hue</p>
        <vue-slider ref="slider" v-model="sliderData.sliderValueHue" :min=0 :max=255 tooltip-dir="bottom" :tooltip="false"></vue-slider>
        <p>Lightness</p>
        <vue-slider ref="slider" v-model="sliderData.sliderValueLightness" :min=50 :max=100 tooltip-dir="bottom" :tooltip="false"></vue-slider>
      </div>
      <P5Scene :sliderData="sliderData" :drawFunction="drawFunction" class="p5block-scene"></P5Scene>
  </div>
</template>

<script>
import P5Scene from './P5Scene.vue'
import vueSlider from './VueSliderComponent'

export default {
  name: 'P5CylinderBlock',
  components: {
    P5Scene,
    vueSlider
  },
  props: {
    title: {
      type: String
    }
  },
  methods: {
    drawFunction(p) {
      p.background(255)
      p.directionalLight(0,0,100, 0, 0, -1)
      p.directionalLight(0,0,100, 0, 0, 0)
      p.ambientLight(0,0,100)
      p.colorMode(p.HSB)

      p.push()
        p.ambientMaterial(this.sliderData.sliderValueHue, 65, this.sliderData.sliderValueLightness)
        p.noStroke()
        /*p.translate(this.sliderData.sliderValueX, this.sliderData.sliderValueY, this.sliderData.sliderValueZ)*/
        p.rotateY(this.sliderData.sliderValueRotY * 0.05)
        p.rotateX(this.sliderData.sliderValueRotX * 0.05)
        p.rotateZ(this.sliderData.sliderValueRotZ * 0.05)
        p.cylinder(this.sliderData.sliderValueRadius, this.sliderData.sliderValueHeight, 50, 50);
      p.pop()
    },
    updateObjectStorage (storageObject) {
      this.$store.commit('updateObjectStorage', storageObject)
    }
  },
  updated () {
    let storageObject = {
      title: this.title,
      data: this.sliderData
    }
    this.updateObjectStorage(storageObject)
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
        sliderValueRadius: 100,
        sliderValueHeight: 100,
        sliderValueHue: 0,
        sliderValueLightness: 100
      }
    }
  }
}
</script>

<style>
  .p5block-wrapper {
    margin: 1rem;
    display: flex;
    flex-grow: 1;
    flex-flow: row;
    justify-content: space-between;
    align-items:center;
  }
  .p5block-variables {
    font-size: 1.1rem;
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
