<template>
  <div>
    <h1>New idea</h1>
    <!-- <ul>
      <li v-for="idea in ideas" :key="idea.id">
        <h1>{{idea.title}}</h1>
        <p>{{idea.body}}</p> 
      </li>
    </ul> -->
  </div>
</template>

<script>
export default {
  data(){
    return{
      // ideas:[]
    }
  },
  // created(){
  //   console.log('this.ideas')
  //   this.$http.get('https://jsonplaceholder.typicode.com/todos')
  //     .then(response => response.json())
  //     .then(ideas => this.ideas = ideas)
  // }
}
</script>

<style scoped>

</style>
