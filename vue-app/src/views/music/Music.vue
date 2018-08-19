<template>
    <div>
        <aplayer autoplay :music=" musiclist[2]" :list=" musiclist" v-if="isShow" :showLrc="true" listMaxHeight="200px" ></aplayer>
    </div>
</template>
<script>
    import Aplayer from 'vue-aplayer';
    import Axios   from 'axios';
    export default{

        data(){
          return{
              musiclist:[],
              isShow:false
          }
        },
        created(){
            Axios.get('./data/musicdata.json').then((res)=>{
                var data= res.data.musicData;
                data.forEach((elem)=> {
                    var obj ={};
                    obj.src = elem.src;
                    obj.artist = elem.author;
                    obj.lrc = 'http://localhost:8080/'+elem.lrc;     //歌詞的設置只能接受絕對路徑
                    obj.pic = elem.musicImgSrc;
                    obj.title = elem.title;
                    this.musiclist.push (obj)
                });
                this.isShow = true;
            })
        },
        components:{
            Aplayer
        },

    }
</script>