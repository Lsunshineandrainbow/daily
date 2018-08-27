<template>
    <router-link to="/picture">
        <div class="bigimage">
        <v-touch class="backimg" :style="{'background-image':'url('+photoDetail[index].src+')'}"
                 @swipeleft="left" @swiperight="right"></v-touch>
        </div>
    </router-link>

</template>
<script>
    import {mapState} from 'vuex';
    export default {
        data(){
            return {
                index:this.$route.params.index
            }
        },
        methods:{
            left(){
                this.index--;
                console.log(222)
            },
            right(){
                this.index++;
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