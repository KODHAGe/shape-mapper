<template>
  <div class="p5scene">
  </div>
</template>

<script>
export default {
  name: 'P5Scene',
  props: {
    msg: String
  },
  mounted () {
    const p5 = require('p5')

    var sketch = function(p) {
      p.setup = function(){
        p.createCanvas(300, 300);
        p.background(0);
      }
    };
    new p5(sketch, this.$el);
  }
}
</script>

<style scoped>
  .p5scene {
    align-self: flex-end;
  }
</style>
