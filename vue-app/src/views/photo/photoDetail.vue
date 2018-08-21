<template>
    <div class="bigimage">
        <div class="backimg" :style="{'background-image':'url('+photoDetail[index].src+')'}"></div>
    </div>
</template>
<script>
    import {mapState} from 'vuex';
    export default {
        data(){
            return {
                index:this.$route.params.index
            }
        },
        computed:mapState(['photoDetail']),
    }
</script>
<style lang="scss" scoped>
  .backimg{

          /*background-image: url('/img/1.jpg');*/
          background-repeat: no-repeat;
          background-size: contain;
          background-color: #000;
          background-position: center;
          position: absolute;
          top:0;
          bottom:0;
          left:0;
          right:0;





  }
</style>