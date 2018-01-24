<template>
  <div class="imageDiv">
    <img :src='imageLink' />
  </div>
</template>

<script>
  export default {
    name: 'currentphoto',
    data () {
      return {
        imageLink: ""
      }
    },
    props: ['currentImage'],
    methods: {
      extractData: function () {
        var vm = this
        if(vm.currentImage){
          $('.imageDiv').transition({
            animation: 'fade',
            onComplete: function() {
              vm.imageLink = vm.currentImage.images.standard_resolution.url
              $('.imageDiv').transition('fade')
            }
          })
          
        }
      }
    },
    watch: {
      currentImage: function () {
        this.extractData()
      }
    }
  }
</script>


<style scoped>

</style>