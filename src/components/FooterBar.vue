<template>
  <div class="footer">
    <div class="save-button box-shadow-2">Save answers</div>
  </div>
</template>

<script>
export default {
  name: 'FooterBar',
  computed: {
    dataToSave() {
      this.$store.state.ObjectStorage
    }
  }
}
</script>

<style scoped>
  .footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 6rem;
    /*background-color: #fff;*/
    display: flex;
    flex-flow: column;
  }
  .save-button {
    background-color: #58b688;
    align-self: flex-end;
    padding: 0.5rem;
    margin: 1rem;
    color: white;
    font-size: 1.3rem;
    font-weight: bold;
    transition: all 0.2s ease-in;
  }

  .save-button:hover {
    cursor: pointer;
    transition: all 0.2s ease-in;
    background-color: #6abe95;
    box-shadow: 0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08);
  }

</style>
