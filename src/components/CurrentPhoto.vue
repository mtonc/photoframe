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
        this.imageLink = this.currentImage.images.standard_resolution.url
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