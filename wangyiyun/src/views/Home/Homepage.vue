<template>
    <div>
        <Header :musiclist="musiclist"></Header>
        <router-view></router-view>
    </div>

</template>
<script>
    import Header from './Header'
    export default {
        props:['musiclist'],
        components:{
            Header
        }
    }

</script>
<style>

</style>