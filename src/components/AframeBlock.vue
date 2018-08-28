<template>
  <div>{{msg}}
    <a-scene>
      <a-box position="0 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box>
    </a-scene>
  </div>
</template>

<script>
export default {
  name: 'AframeBlock',
  props: {
    msg: String
  }
}
</script>

<style scoped>
</style>
