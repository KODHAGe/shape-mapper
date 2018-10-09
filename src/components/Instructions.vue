<template>
  <div class="instruction">
    <h3 class="instruction-title">Instructions</h3>
    <p class="instruction-text">
      Below you will find a dictionary definition and some synonyms for an emotional attribute. 
      Please observe this description and then use the sliders below to select and modify a
      figure that could – in your opinion – represent the emotional attribute described.
    </p>
  </div>
</template>

<script>
export default {
  name: 'Instructions'
}
</script>

<style scoped>
  .instruction-title {
    margin: 1rem;
    margin-bottom: 0.5rem;
    display: inline-block;
  }
  
  .instruction-text {
    margin: 1rem;
    margin-top: 0rem;
    line-height: 1.2rem;
    max-width: 600px
  }

  .instruction {
    border: 1px solid #eee;
    margin-bottom: 0.5rem;
    padding: 0.5rem;
  }
</style>
