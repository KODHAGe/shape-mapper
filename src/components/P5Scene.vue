<template>
  <div class="p5scene">
  </div>
</template>

<script>
export default {
  name: 'P5Scene',
  props: {
    sliderData: {
      default: {},
      type: Object,
      sliderValueRotX: {
        default: 0,
        type: Number
      },
      sliderValueRotY: {
        default: 0,
        type: Number
      },
      sliderValueRotZ: {
        default: 0,
        type: Number
      },
      /*sliderValueX: {
        default: 0,
        type: Number
      },
      sliderValueY: {
        default: 0,
        type: Number
      },
      sliderValueZ: {
        default: 0,
        type: Number
      },*/
      sliderValueLength: {
        default: 0,
        type: Number
      },
      sliderValueWidth: {
        default: 0,
        type: Number
      },
      sliderValueHeight: {
        default: 0,
        type: Number
      },
      sliderValueHue: {
        default: 0,
        type: Number
      }
    }
  },
  mounted () {
    const p5 = require('p5')

    var sketch = (p) => {
      p.setup = () => {
        p.createCanvas(300, 300, 'webgl')
        p.setAttributes('antialias', true)
      }
      p.draw = _ => {
        p.background(255)
        p.directionalLight(0,0,100, 0, 0, -1)
        p.directionalLight(0,0,100, 0, 0, 0)
        p.ambientLight(0,0,100)
        p.colorMode(p.HSB)

        p.push()
          p.ambientMaterial(this.sliderData.sliderValueHue, 65, 95)
          p.noStroke()
          /*p.translate(this.sliderData.sliderValueX, this.sliderData.sliderValueY, this.sliderData.sliderValueZ)*/
          p.rotateY(this.sliderData.sliderValueRotY * 0.05)
          p.rotateX(this.sliderData.sliderValueRotX * 0.05)
          p.rotateZ(this.sliderData.sliderValueRotZ * 0.05)
          p.box(this.sliderData.sliderValueWidth, this.sliderData.sliderValueHeight, this.sliderData.sliderValueLength)
        p.pop()
      }
    };
    this.p5instance = new p5(sketch, this.$el)
  },
  data () {
    return {
      p5instance: Object
    }
  },
  updated () {
  }
}
</script>

<style scoped>
</style>
