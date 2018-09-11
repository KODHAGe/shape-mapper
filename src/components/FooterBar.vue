<template>
  <div class="footer">
    <div class="save-button box-shadow-2" v-bind:class="{saved: saveState}" v-on:click="saveRecord">Submit answers</div>
  </div>
</template>

<script>
import { addResultRecords } from '../api/firebase'

export default {
  name: 'FooterBar',
  computed: {
    dataToSave() {
      return this.$store.state.objectStorage
    },
    userId() {
      return this.$store.state.userId
    },
    saveState() {
      return this.$store.state.saveState
    }
  },
  methods: {
    saveRecord() {
      console.log(this.dataToSave)
      if(this.dataToSave){
        console.log('save')
        addResultRecords(this.dataToSave, this.userId)
      } else {
        // Handle 'no changes' case
      }
    }
  }
}
</script>

<style>
  .footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: auto;
    display: flex;
    flex-flow: column;
  }
  .save-button {
    background-color: gainsboro;
    align-self: flex-end;
    padding: 0.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    margin: 1rem;
    color: white;
    font-size: 1.3rem;
    font-weight: bold;
    transition: all 0.2s ease-in;
  }

  .saved {
    background-color: #58b688;
  }

  .save-button:hover {
    cursor: pointer;
    transition: all 0.2s ease-in;
    background-color: #6abe95;
    box-shadow: 0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08);
  }

</style>
