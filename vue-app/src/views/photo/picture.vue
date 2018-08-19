<template>
    <div>
        <router-link v-for = '(address,index) in arr' :to="'/photodetail/'+index">
        <img  :src="address.src"><img/>
        </router-link>
    </div>
</template>
<script>
    import Axios from 'axios';
    export default {
        data(){
            return {
                arr : [],
            }
        },

        components:{

        },
        created(){
            Axios.get('data/photodata.json').then((res)=> {
                this.arr = res.data.photoData;
                this.$store.dispatch('changebig',this.arr);
            });
            console.log(1111)
        }
    }

</script>
<style lang="scss" scoped>
    img{
        width: 22%;
        margin: 5px 5px
    }
</style>