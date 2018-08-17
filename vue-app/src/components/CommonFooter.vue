<template>
<!--<div class="footer"></div>-->
    <!--<ul class="footer" :style="{background:indexBg}">-->
        <ul class="footer" :style="{background:BgColor}">
        <li v-for="menu in menuList">
            <!--<router-link :to="menu.path" @click.native="changeBg(menu)">{{menu.name}}</router-link>-->

            <router-link :to="menu.path" @click.native="changeBg(menu)">{{menu.name}}</router-link>
        </li>
    </ul>
</template>
<script>
    import {mapState} from 'vuex';
    export default {
        props:['menuList'],
        data(){
            return {
                BgColor:'rgb(33, 150, 243)'}
        },
        methods:{
            // changeBg(menu){
            //     this.$store.dispatch('changeBg',menu)
            // },

            changeBg(menu){
                this.BgColor= menu.color;
               this.$emit('xxx',menu)
            }
    } ,
        computed:mapState(['indexBg'])
    }
</script>
<style lang="scss">
    .footer{
        height: 1rem;
        background:rgb(33, 150, 243);
        color: #fff;
        position: fixed;
        width: 100%;
        bottom: 0;
        line-height: 1rem;
        display: flex;
        li{
            flex-grow: 1;
            text-align: center;
        }
        a{
            outline: none;
            color: #ccc;
        }
        a.router-link-active{
            color: #fff;
            outline: none;
        }
    }

</style>