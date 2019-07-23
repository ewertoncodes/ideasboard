<template>
  <div class="container is-fluid">
    <div v-for="idea in ideas" :key="idea.id" class="card">
      <header class="card-header">
        <p class="card-header-title content">
          {{idea.title}}
        </p>
      </header>
      <div class="card-content">
        <div class="content">
          {{idea.body}}
        </div>
      </div>
      <footer class="card-footer">
        <router-link :to="{ name: 'change-idea', params: { id : idea.id }}">
           <a class="card-footer-item" @click="remove(idea)">update</a>
        </router-link>
        <a class="card-footer-item" @click="remove(idea)">delete</a>
      </footer>
    </div>          
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
.card {
  float: left;
  width: 270px;
  margin: 15px;
}

.content {
  width: 250px;
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  direction: ltr;
}
</style>
