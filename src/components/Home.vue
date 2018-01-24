<template>
  <div v-if="signedIn">
    <currentphoto :current-image='currentImage'></currentphoto>
  </div>
  <div v-else>
    Login with Instagram:
      <button class="ui icon button" type="button" @click="instaLogin">
        <i class="instagram icon"></i>
      </button>
  </div>
</template>

<script>
import currentphoto from './CurrentPhoto'

export default {
  name: 'home',
  components: {
    currentphoto
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      response: "",
      images: [],
      currentImage: {}
    }
  },
  methods: {
    instaLogin: function(event) {
      var redirectURL = encodeURI("http://127.0.0.1:8080/auth");
      console.log(redirectURL);
      var clientID = 'f747337def5640c996d1183059e265a1'
      window.location = "https://api.instagram.com/oauth/authorize/?client_id="+clientID+"&response_type=token&redirect_uri="+redirectURL;
    },
    getData: function() {
      var vm = this
      if (vm.signedIn){
        this.axios.get("https://api.instagram.com/v1/users/self/media/recent/?access_token="+this.accessToken).then(function(response){
          vm.response = response
          vm.images = vm.response.data.data
          if (vm.images.length != 0) {
            vm.shuffleImages()
          }
        })
      }
    },
    shuffleImages: function() {
      var n = this.images.length, temp, i;
      while (n) {
        i = Math.floor(Math.random() * n--)
        temp = this.images[n]
        this.images[n] = this.images[i]
        this.images[i] = temp
      }
      this.getCurrentImage()
    },
    getCurrentImage: function () {
      console.log("getting image")
      var n = this.images.length
      var i = 0;
      this.currentImage = this.images[i];
      for(i = 1; i < n-1; i++){
        setInterval(function() {
          this.currentImage = this.images[i]
        }, 120000)
      }
    }
  },
  computed: {
    accessToken () {
      return this.$store.getters.theToken
    },
    signedIn () {
      return this.$store.getters.signedIn
    }
  },
  mounted: function() {
    this.getData()
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
currentphoto {
  width: 100%;
  height: 100%
}
</style>
