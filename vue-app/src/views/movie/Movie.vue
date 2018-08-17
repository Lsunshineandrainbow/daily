<template>
    <div class="about">
        <ul class="movielist">
           <MList v-for="val in movie"  :moviemenu="val"></MList>
        </ul>
        <div>
            <img src="./img/load.jpg" alt="" class="load" v-show="isshow">
        </div>
        <div v-show="issEnd">我跑不動啦！！！</div>
    </div>
</template>
<script>
    import Axios from 'axios';
    import MList from '@/views/movie/List.vue'
    export default {
        data(){
         return{
             movie:[],
             isshow:false,
             issEnd:false
         }
        },
        components:{
            MList
        },
        created(){
            this.getData();
            window.onscroll= ()=> {
                var scrollTop = document.documentElement.scrollTop;
                var scrollHeight = document.documentElement.scrollHeight;
                var clientHeight = document.documentElement.clientHeight;
                // console.log(scrollTop,scrollHeight,clientHeight)    //滾動條距頂端的距離    滾動條高度    屏幕高度
                if(scrollTop == scrollHeight - clientHeight&& !this.issEnd){

                    this.isshow=true;
                    this.getData();
                }
            }

        },
        methods:{
            getData(){
                Axios.get('https://bird.ioliu.cn/v1?url=https://api-m.mtime.cn/Showtime/LocationMovies.api?locationId=290').then((res)=>{
                    var arr=res.data.ms.slice(this.movie.length,this.movie.length+5);
                    this.movie = [...this.movie,...arr] ;
                    this.isshow=false;
                    console.log(arr.length)
                    console.log(this.movie)
                    if(arr.length<5){
                        this.issEnd = true
                    }
                });
            }
        }
    }
</script>
<style lang="scss">
     li{
        display: flex;
      .movieimage{
          flex-grow: 1;
          width: 0;
          margin-bottom: 10px;
          margin-right: 15px;
      }
        .movietext{
            flex-grow: 3;
            width: 0;
        }
    }
     .load{
         width: 1rem;
         text-align: center;

     }
</style>