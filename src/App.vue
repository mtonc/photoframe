<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
const inBrowser = typeof window !== 'undefined'
if (inBrowser) {
   var semantic = require('../semantic/dist/semantic.js')
}

export default {
  name: 'app'
}
</script>


<style>
@import '../semantic/dist/semantic.css';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>