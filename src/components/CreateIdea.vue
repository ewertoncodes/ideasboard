<template>
  <div class="create-idea-form">
      <div class="container">
        <form @submit.prevent="createIdea()">
          
          <div class="field">
            <label  class="label"> Title: </label>
            <input class="input" type="text" v-model="idea.title">
          </div>

          <div class="field">
            <label for="">Description: </label>
            <textarea class="textarea" type="text" v-model="idea.body"/>
          </div>

          <div class="field is-grouped">
            <div class="control">
              <button class="button is-link">Submit</button>
            </div>

            <div class="control">
              <router-link :to="{name: 'ideas'}">
                <button class="button">
                  Voltar
                </button>
              </router-link>
            </div>
          </div>

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
  .create-idea-form {
    margin-top:30px;
  }
</style>
