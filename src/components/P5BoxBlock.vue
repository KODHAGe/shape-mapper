<template>
    <div class="p5block-wrapper">
      <div class="p5block-variables">
        <p>Rotation on the X-axis</p>
        <vue-slider ref="slider" v-model="sliderData.sliderValueRotX" :min=0 :max=360 tooltip-dir="top" :tooltip="false"></vue-slider>
        <p>Rotation on the Y-axis</p>
        <vue-slider ref="slider" v-model="sliderData.sliderValueRotY" :min=0 :max=360 tooltip-dir="top" :tooltip="false"></vue-slider>      
        <p>Rotation on the Z-axis</p>
        <vue-slider ref="slider" v-model="sliderData.sliderValueRotZ" :min=0 :max=360 tooltip-dir="top" :tooltip="false"></vue-slider>    
        <p>Width</p>
        <vue-slider ref="slider" v-model="sliderData.sliderValueLength" :min=50 :max=150 tooltip-dir="top" :tooltip="false"></vue-slider>
        <p>Length</p>
        <vue-slider ref="slider" v-model="sliderData.sliderValueWidth" :min=50 :max=150 tooltip-dir="top" :tooltip="false"></vue-slider>
        <p>Height</p>
        <vue-slider ref="slider" v-model="sliderData.sliderValueHeight" :min=0 :max=200 tooltip-dir="top" :tooltip="false"></vue-slider>
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
    let storage = this.$store.state.objectStorage[0]
    return {
      sliderData: {
        sliderValueRotX: storage ? storage.data.sliderValueRotX : 0,
        sliderValueRotY: storage ? storage.data.sliderValueRotY : 0,
        sliderValueRotZ: storage ? storage.data.sliderValueRotZ : 0,
        sliderValueLength: storage ? storage.data.sliderValueLength : 100,
        sliderValueWidth: storage ? storage.data.sliderValueWidth : 100,
        sliderValueHeight: storage ? storage.data.sliderValueHeight : 100,
        sliderValueHue: storage ? storage.data.sliderValueHue : 0 ,
        sliderValueLightness: storage ? storage.data.sliderValueLightness : 100,
        sliderValueOpacity: storage ? storage.data.sliderValueOpacity : 100,
        sliderValueMatte: storage ? storage.data.sliderValueMatte : 0,
        sliderValueRadius: false,
        sliderValueScale: false
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
