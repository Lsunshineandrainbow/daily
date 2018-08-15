<template>
    <div class="movie">
        <ul>
            <li v-for="list in arr">
                <router-link :to="'/movieavg/'+list.avg">  {{list.name}}{{list.id}} </router-link>

            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                arr:[
                    {
                        id:1,
                name:'扶搖',
                avg:'1.2',
            },{
                        id:2,
                name:'香蜜',
                avg:'8.2',
            },{
                        id:3,
                name:'皇權',
                avg:'1.2',
            }]}
        }
    }
</script>
<style>
    li{
        list-style: none;
    }

</style>