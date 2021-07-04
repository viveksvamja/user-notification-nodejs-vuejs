<template>
  <div id="app">
    <Notifications/>
  </div>
</template>

<script>
import Notifications from './components/Notifications.vue'

export default {
  name: 'App',
  components: {
    Notifications
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 60px;
}
</style>
