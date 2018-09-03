<template>
  <div class="p5scene">
  </div>
</template>

<script>
export default {
  name: 'P5Scene',
  props: {
    drawFunction: {
      default: {},
      type: Function
    }
  },
  mounted () {
    const p5 = require('p5')

    var sketch = (p) => {
      p.setup = () => {
        p.createCanvas(300, 300, 'webgl')
        p.setAttributes('antialias', true)
      }
      p.draw = _ => this.drawFunction(p)
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
