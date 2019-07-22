<template>
  <div>
    <h1>Ideas</h1>
    <ul>
       <p v-show="message" class="">{{ message }}</p>
      <li v-for="idea in ideas" :key="idea.id">
        <h1>{{idea.title}}</h1>
        <p>{{idea.body}}</p>
        <button @click="removeIdea(idea)">delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return{
      ideas:[],
      message:''
    }
  },
  created(){
    this.$http.get('http://localhost:3001/api/v1/ideas')
      .then(response => response.json())
      .then(ideas => this.ideas = ideas)
  },

  methods:{
    removeIdea(idea){
      this.$http(`http://localhost:3001/api/v1/ideas/${idea.id}`)
        .then(
          () => {
            let index = this.ideas.indexOf(idea);
            this.ideas.splice(index, 1);
            this.message = 'Ideia removida com sucesso'
          }, 
          err => {
            this.mensagem = 'Não foi possível remover a Ideia';
            console.log(err);
          }
        )
    }
  }
}
</script>

<style scoped>

</style>
