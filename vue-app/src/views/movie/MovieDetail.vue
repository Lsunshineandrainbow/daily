<template>
    <div>
        <img :src="moviedetail.bImg" alt="">
        <p>特別内殊榮：{{moviedetail.commonSpecial}}</p>
        <div>類型：</div>
    </div>
</template>
<script>
    import Axios from 'axios'

export default {
        data(){
            return {
                moviedetail:{},
                show:false
            }

        },
    mounted(){
        var movieId = this.$route.params.id;
         Axios.get('https://bird.ioliu.cn/v1?url=https://ticket-api-m.mtime.cn/movie/detail.api?locationId=?&movieId='+ movieId+'').then((res)=>{
             this.moviedetail= res.data;
             this.show = true;
             console.log(res.data);
             console.log(1111)
         })

        }
    }

</script>