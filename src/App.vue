<template>
  <div>
    <nav>
      <ul>
        <li v-for="route in routes" :key=route.id >
          <router-link :to="route.path ? route.path:'/'">
            {{route.title}}
          </router-link>
        </li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import {routes} from './routes';

export default {
  components:{
  },
  data () {
    return {
      routes
    }
  }
}
</script>

<style>

</style>
