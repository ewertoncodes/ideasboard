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
          <router-link to="/">
            <button>
              Voltar
            </button>
          </router-link>
        </form>
      </div>
  </div>
</template>

<script>
import Idea from '../models/Idea'
import IdeaService from '../services/IdeaService'

export default {
  data(){
    return{
      idea: new Idea
    }
  },
  created(){
    this.service = new IdeaService(this.$resource)
  },

  methods:{
    createIdea(){
      this.service.create(this.idea)
      .then(() => this.idea = new Idea(), err => console.log(err));
    }
  }
}
</script>

<style scoped>

</style>
