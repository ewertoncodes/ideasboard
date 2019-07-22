<template>
  <div>
    <h1>New idea</h1>
      <div>
        <form @submit.prevent="createIdea()">
          <label for="">title: </label>
          <input type="text" v-model="idea.title">
          
          <label for="">body: </label>
          <textarea type="text" v-model="idea.body"/>
          <button>submit</button>
        </form>
      </div>
  </div>
</template>

<script>
import Idea from '../models/Idea'

export default {
  data(){
    return{
      idea: new Idea
    }
  },

  methods:{
    createIdea(){
      this.$http.post('http://localhost:3001/api/v1/ideas', this.idea)
      .then(() => this.idea = new Idea(), err => console.log(err));
    }
  }
}
</script>

<style scoped>

</style>
