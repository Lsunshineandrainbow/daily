<template>
    <div class="about">
        <ul class="movielist">
            <li v-for="moviemenu in movie">
        <div class="movieimage">
            <img :src="moviemenu.img" alt="">
        </div>
        <div class="movietext">
            <p>
                片名:{{moviemenu.tCn}}
            </p>
            主演: <span>{{moviemenu.actors}}</span>
        </div>
            </li>
        </ul>
    </div>
</template>
<script>
    import Axios from 'axios';
    export default {
        data(){
         return{movie:[]}
        },
        created(){
            Axios.get('https://bird.ioliu.cn/v1?url=https://api-m.mtime.cn/Showtime/LocationMovies.api?locationId=290').then((res)=>{
                          this.movie = res.data.ms ;
                          console.log(this.movie)
            })
        }
    }
</script>
<style lang="scss">
     li{
        display: flex;
      .movieimage{
          flex-grow: 1;
          width: 0;
      }
        .movietext{
            flex-grow: 3;
            width: 0;
        }
    }
</style>