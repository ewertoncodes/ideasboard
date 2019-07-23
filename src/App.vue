<template>
  <div>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
        
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
        </a>
        <div id="navbarBasicExample" class="navbar-menu">
          <a v-for="route in routes" :key=route.id class="navbar-item">
            <router-link :to="route.path ? route.path:'/'">
              {{route.title}}
            </router-link>
          </a>
        </div>
      </div>
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
      routes: routes.filter(route => route.menu)
    }
  }
}
</script>

<style>

</style>
