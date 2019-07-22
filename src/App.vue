<template>
  <div id="app">
    <Ideas/>
  </div>
</template>

<script>
import Ideas from './components/Ideas'

export default {
  name: 'app',
  components:{
    Ideas
  }
  ,
  data () {
    return {
     ideas:[]
    }
  }
}
</script>

<style>
</style>