<template>
  <div class="create-idea-form">
      <div class="container">
        <form @submit.prevent="createIdea()">
          
          <div class="field">
            <label  class="label"> Title: </label>
            <input class="input" name="title" type="text" v-model="idea.title" v-validate data-vv-rules="required">
            <span class="error-message" v-show="errors.has('title')">{{ errors.first('title') }}</span>
          </div>

          <div class="field">
            <label class="label">Description: </label>
            <textarea name="description" class="textarea" type="text" v-model="idea.body"  v-validate data-vv-rules="required"/>
            <span class="error-message" v-show="errors.has('title')">{{ errors.first('description') }}</span>
          </div>

          <div class="field is-grouped">
            <div class="control">
              <button class="button is-link">Submit</button>
            </div>

            <div class="control">
              <router-link :to="{name: 'ideas'}">
                <button class="button">
                  Back
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
      idea: new Idea,
      id: this.$route.params.id
    }
  },
  created(){
    this.service = new IdeaService(this.$resource)
    
    if(this.id) {
      this.service
        .find(this.id)
        .then(idea => this.idea = idea);
    }
  },

  methods:{
    createIdea(){
      this.$validator.validateAll().then(success=>{
        if(success){
          this.service.create(this.idea)
          .then(() => {
            if(this.id) this.$router.push({name: 'ideas'});
            this.idea = new Idea();
            this.$validator.reset();
          }, err => console.log(err));
        }
      });
    }
  }
}
</script>

<style scoped>
  .create-idea-form {
    margin-top:30px;
  }
  .error-message{
    color: red;
  }
</style>
