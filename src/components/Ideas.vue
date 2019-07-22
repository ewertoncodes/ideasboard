<template>
  <div>
    <h1>Ideas</h1>
    <ul>
       <!-- <p v-show="message" class="">{{ message }}</p> -->
      <li v-for="idea in ideas" :key="idea.id">
        <h1>{{idea.title}}</h1>
        <p>{{idea.body}}</p>
        <button @click="remove(idea)">delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
import IdeaService from '../services/IdeaService'

export default {
  data(){
    return{
      ideas:[],
      message:''
    }
  },

  created(){
    this.service = new IdeaService(this.$resource)
    this.service.list().then(ideas => this.ideas = ideas)
  },

  methods:{
    remove(idea){
      this.service
        .destroy(idea.id)
        .then(
          () => {
            let index = this.ideas.indexOf(idea);
            this.ideas.splice(index, 1);
            // this.message = 'Idea successfully removed'
          }, 
          err => {
            // this.mensagem = 'Unable to remove Idea';
            console.log(err);
          }
        )
    }
  }
}
</script>

<style scoped>

</style>
