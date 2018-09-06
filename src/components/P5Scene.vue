<template>
  <div class="p5scene">
  </div>
</template>

<script>
import p5 from 'p5/lib/p5.min'

export default {
  name: 'P5Scene',
  props: {
    preloadFunction: {
      default: null,
      type: Function
    },
    drawFunction: {
      default: null,
      type: Function
    }
  },
  mounted () {
    let sketch = (p) => {
      if(this.preloadFunction) {
        p.preload = () => this.preloadFunction(p)
      }
      p.setup = () => {
        p.createCanvas(300, 300, 'webgl')
        p.setAttributes('antialias', true)
      }
      p.draw = () => this.drawFunction(p)
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
