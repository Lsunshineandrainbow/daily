<template>
<div>
    <div id="aplayer"></div>
</div>
</template>
<script>
    import 'APlayer/dist/APlayer.min.css';
    import APlayer from 'APlayer';
    var ap = new APlayer({

    });
export default {
    data(){},
    created(){
        Axios.get('./data/musicdata.json').then((res)=>{
            var data = res.data;
            console.log(data);
            console.log(111)
        })
    }

}

</script>
<style  lang="scss">
div{

}
</style>