<template>
    <h1>{{msg}}</h1>
</template>
<script>
  export  default {
              props:["msg"],
      data(){
                  return{}
      },
      computed:{
                  count(){
                      return this.$store.count
                  }
      }
  }


</script>
<style>

</style>