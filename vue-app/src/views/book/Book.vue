<template>
    <div class="book">
        <swipe class="my-swipe">
            <swipe-item class="slide1"></swipe-item>
            <swipe-item class="slide2"></swipe-item>
            <swipe-item class="slide3"></swipe-item>
        </swipe>
    </div>
</template>
<script>
    import { Swipe, SwipeItem } from 'vue-swipe';
    export default {
        components:{
                Swipe,
            SwipeItem,
        },

    }

</script>
<style scoped>
    .book{
        height: 200px;
    }
    .my-swipe {
        height: 200px;
        color: #fff;
        font-size: 30px;
        text-align: center;

    }

    .slide1 {
        color: #fff;
        background: url("/image/1.jpg") no-repeat center;
        background-size: contain;
    }

    .slide2 {
        color: #000;
        background: url("/image/2.jpg") no-repeat center;
        background-size: contain;
    }

    .slide3 {
        color: #fff;
        background: url("/image/3.jpg") no-repeat center;
        background-size: contain;

    }
</style>