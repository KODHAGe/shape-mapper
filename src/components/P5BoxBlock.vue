<template>
    <div class="p5block-wrapper">
      <div class="p5block-variables">
        <p>Rotation on the X-axis</p>
        <vue-slider ref="slider" v-model="sliderData.sliderValueRotX" :max=360 tooltip-dir="top" :tooltip="false"></vue-slider>
        <p>Rotation on the Y-axis</p>
        <vue-slider ref="slider" v-model="sliderData.sliderValueRotY" :max=360 tooltip-dir="top" :tooltip="false"></vue-slider>      
        <p>Rotation on the Z-axis</p>
        <vue-slider ref="slider" v-model="sliderData.sliderValueRotZ" :max=360 tooltip-dir="top" :tooltip="false"></vue-slider>    
        <p>Width</p>
        <vue-slider ref="slider" v-model="sliderData.sliderValueLength" :min=50 :max=150 tooltip-dir="top" :tooltip="false"></vue-slider>
        <p>Length</p>
        <vue-slider ref="slider" v-model="sliderData.sliderValueWidth" :min=50 :max=150 tooltip-dir="top" :tooltip="false"></vue-slider>
        <p>Height</p>
        <vue-slider ref="slider" v-model="sliderData.sliderValueHeight" :min=50 :max=150 tooltip-dir="top" :tooltip="false"></vue-slider>
        <p>Hue</p>
        <vue-slider ref="slider" v-model="sliderData.sliderValueHue" :min=0 :max=255 tooltip-dir="top" :tooltip="false"></vue-slider>
        <p>Lightness</p>
        <vue-slider ref="slider" v-model="sliderData.sliderValueLightness" :min=50 :max=100 tooltip-dir="top" :tooltip="false"></vue-slider>
        <p>Opacity</p>
        <vue-slider ref="slider" v-model="sliderData.sliderValueOpacity" :min=0 :max=100 tooltip-dir="top" :tooltip="false"></vue-slider>
        <p>Matte/Glossy</p>
        <vue-slider ref="slider" v-model="sliderData.sliderValueMatte" :min=0 :max=1 tooltip-dir="top" :tooltip="false"></vue-slider>
      </div>
      <P5Scene :sliderData="sliderData" :drawFunction="drawFunction" class="p5block-scene"></P5Scene>
  </div>
</template>

<script>
import P5Scene from './P5Scene.vue'
import vueSlider from './VueSliderComponent'

export default {
  name: 'P5BoxBlock',
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
      let locX = p.mouseX - p.width / 2
      let locY = p.mouseY - p.height / 2
      p.pointLight(55, 255, 255, locX, locY, 100)
      p.ambientLight(0,0,100)
      p.colorMode(p.HSB)

      p.push()
        if(this.sliderData.sliderValueMatte === 0) {
          p.ambientMaterial(this.sliderData.sliderValueHue, 65, this.sliderData.sliderValueLightness, this.sliderData.sliderValueOpacity/100)
        } else {
          p.specularMaterial(this.sliderData.sliderValueHue, 65, this.sliderData.sliderValueLightness, this.sliderData.sliderValueOpacity/100)
        }
        p.noStroke()
        p.rotateY(p.radians(this.sliderData.sliderValueRotY))
        p.rotateX(p.radians(this.sliderData.sliderValueRotX))
        p.rotateZ(p.radians(this.sliderData.sliderValueRotZ))
        p.box(this.sliderData.sliderValueWidth, this.sliderData.sliderValueHeight, this.sliderData.sliderValueLength)
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
        sliderValueLength: 100,
        sliderValueWidth: 100,
        sliderValueHeight: 100,
        sliderValueHue: 0,
        sliderValueLightness: 100,
        sliderValueOpacity: 100,
        sliderValueMatte: 0
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
    align-items: center;
  }
  .p5block-variables {
    font-size: 1.1rem;
    flex-grow: 0.8;
    align-self: center;
  }
  p {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
</style>
