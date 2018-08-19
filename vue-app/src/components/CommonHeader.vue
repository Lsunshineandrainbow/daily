<template>
<!--<div class="header" :style="{background:indexBg}">-->
    <div class="header" :style="{background:Bgcolor}">
    <span>首頁</span>
    <h1 class="header-title">{{title}}</h1>
</div>
</template>
<script>
    import {mapState} from 'vuex';
export default {
    // computed:mapState(['indexBg','title']),
    props:['Bgcolor','title'],
}
</script>
<style lang="scss">
    .header{
        height: 1rem;
        background:rgb(33, 150, 243);
        color: #fff;
        position: fixed;
        width: 100%;
        line-height: 1rem;
        top: 0;
        &-title{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
        }
        &-home{
            font-size: 16px;
        }

    }
</style>