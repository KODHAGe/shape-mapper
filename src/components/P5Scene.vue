<template>
  <div class="p5scene">
  </div>
</template>

<script>
export default {
  name: 'P5Scene',
  props: {
    type: {
      default: null,
      type: String
    },
    x: {
      default: 0,
      type: Number
    },
    y: {
      default: 0,
      type: Number
    },
    w: {
      default: 0,
      type: Number
    },
    l: {
      default: 0,
      type: Number
    }
  },
  mounted () {
    const p5 = require('p5')

    var sketch = (p) => {
      p.setup = () => {
        p.createCanvas(300, 300, 'webgl')
      }
      if(this.type == 'rectangle') {
        p.draw = _ => {
          p.background(255)
          p.fill(0)
          p.rect(this.x, this.y, this.w, this.l)
        }
      } else if (this.type == 'cube') {
          p.draw = _ => {
          p.background(255)
          p.fill(239, 45, 94)
          p.noStroke()
          p.ambientLight(1000)
          p.directionalLight(255, 0, 0, 0.25, 0.25, 0)
          p.rotateY(p.frameCount * (0.0005*this.x))
          p.translate(10, this.y)
          p.box(this.w, this.l)
        }
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
