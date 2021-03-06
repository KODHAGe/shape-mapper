<template>
    <div class="p5block-wrapper">
      <div class="p5block-variables">
        <p>Rotation on the X-axis</p>
        <vue-slider ref="slider" v-model="sliderData.sliderValueRotX" :max=360 tooltip-dir="top" :tooltip="false"></vue-slider>
        <p>Rotation on the Y-axis</p>
        <vue-slider ref="slider" v-model="sliderData.sliderValueRotY" :max=360 tooltip-dir="top" :tooltip="false"></vue-slider>      
        <p>Rotation on the Z-axis</p>
        <vue-slider ref="slider" v-model="sliderData.sliderValueRotZ" :max=360 tooltip-dir="top" :tooltip="false"></vue-slider>    
        <p>Scale</p>
        <vue-slider ref="slider" v-model="sliderData.sliderValueScale" :min=25 :max=75 tooltip-dir="top" :tooltip="false"></vue-slider>
      </div>
      <div class="p5block-variables">
        <p>Hue</p>
        <vue-slider ref="slider" v-model="sliderData.sliderValueHue" :min=0 :max=255 tooltip-dir="top" :tooltip="false"></vue-slider>
        <p>Lightness</p>
        <vue-slider ref="slider" v-model="sliderData.sliderValueLightness" :min=50 :max=100 tooltip-dir="top" :tooltip="false"></vue-slider>
        <p>Opacity</p>
        <vue-slider ref="slider" v-model="sliderData.sliderValueOpacity" :min=0 :max=100 tooltip-dir="top" :tooltip="false"></vue-slider>
        <p>Matte/Glossy</p>
        <vue-slider ref="slider" v-model="sliderData.sliderValueMatte" :min=0 :max=1 tooltip-dir="top" :tooltip="false"></vue-slider>
      </div>
      <P5Scene :sliderData="sliderData" :preloadFunction="preloadFunction" :drawFunction="drawFunction" class="p5block-scene"></P5Scene>
  </div>
</template>

<script>
import P5Scene from './P5Scene.vue'
import vueSlider from './VueSliderComponent'
import { common } from '../assets/blockCommons'

export default {
  name: 'P5OctahedronBlock',
  components: {
    P5Scene,
    vueSlider
  },
  props: common.props,
  methods: {
    preloadFunction(p) {
      let model = p.loadModel(this.url)
      this.preloadedModel = model
    },
    drawFunction(p) {
      // Scene
      p.background(100)

      // Positions
      let locX = p.mouseX - p.width / 2
      let locY = p.mouseY - p.height / 2
      this.posX += p.cos(p.millis() / 1000) * 2
      this.posY += p.sin(p.millis() / 1000) * 1.2
      this.posZ += p.sin(p.millis() / 1000) * 1.2

      // Lights & color
      p.ambientLight(0,0,100)
      p.colorMode(p.HSB)
      p.pointLight(55, 255, 255, locX, locY, 100)
      p.pointLight(55, 255, 255, this.posX, this.posY, this.posZ)

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
        p.scale(this.sliderData.sliderValueScale/10)
        p.model(this.preloadedModel)
      p.pop()
    },
    updateObjectStorage (storageObject) {
      this.$store.commit('updateObjectStorage', storageObject)
    }
  },
  updated () {
    let storageObject = {
      title: this.title,
      shape: 'Octahedron',
      data: this.sliderData
    }
    this.updateObjectStorage(storageObject)
  },
  data () {
    let storage = this.$store.state.objectStorage[this.index]
    return {
      sliderData: {
        sliderValueRotX: storage ? storage.data.sliderValueRotX : 0,
        sliderValueRotY: storage ? storage.data.sliderValueRotY : 0,
        sliderValueRotZ: storage ? storage.data.sliderValueRotZ : 0,
        sliderValueScale: storage ? storage.data.sliderValueScale : 50,
        sliderValueHue: storage ? storage.data.sliderValueHue : 0 ,
        sliderValueLightness: storage ? storage.data.sliderValueLightness : 100,
        sliderValueOpacity: storage ? storage.data.sliderValueOpacity : 100,
        sliderValueMatte: storage ? storage.data.sliderValueMatte : 0,
        sliderValueRadius: null,
        sliderValueHeight: null,
        sliderValueWidth: null,
        sliderValueLength: null
      },
      posX: 30,
      posY: 60,
      posZ: 120
    }
  },
  computed: {
    url() {
      return 'https://' + process.env.VUE_APP_URL + '/models/Octahedron.obj'
    }
  }
}
</script>

<style scoped>
</style>
