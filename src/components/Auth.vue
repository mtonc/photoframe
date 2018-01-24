<template>
  <div>
    Authorization Page
    <div v-if="haveToken">
      Token is: {{token}}
    </div>
  </div>
  
</template>

<script>

export default {
  name: 'auth',
  data () {
    return {
      haveToken: false
    }
  },
  methods: {
    parseToken: function () {
      var url = new URL(window.location.href);
      this.$store.commit('GET_TOKEN', url.hash.slice(14))
      if(this.token && this.token != "" && this.token != null && this.token != undefined)
        this.haveToken = true
        this.$store.commit('SIGN_IN')
      }
  },
  watch: {
    haveToken: function() {
      this.$router.push({name: 'Home'})
    }
  },
  computed: {
    token () {
      return this.$store.getters.theToken
    }
  },
  mounted() {
    this.parseToken()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>