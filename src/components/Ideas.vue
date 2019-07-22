<template>
  <div>
    <h1>Ideas</h1>
    <ul>
      <li v-for="idea in ideas" :key="idea.id">
        <h1>{{idea.title}}</h1>
        <p>{{idea.body}}</p> 
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return{
      ideas:[]
    }
  },
  created(){
    console.log('this.ideas')
    this.$http.get('http://localhost:3001/api/v1/ideas')
      .then(response => response.json())
      .then(ideas => this.ideas = ideas)
  }
}
</script>

<style scoped>

</style>
