<template>
    <div>
        <aplayer autoplay :music=" musiclist[2]" :list=" musiclist" v-if="isShow"></aplayer>
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
                    obj.lrc = elem.lrc;
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