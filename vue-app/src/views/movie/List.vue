<template>
    <li>
        <div class="movieimage">
            <img :src="moviemenu.img" alt="">
        </div>
        <div class="movietext">
            <p>
                片名:{{moviemenu.tCn}}
            </p>
            主演: <span>{{moviemenu.actors}}</span>
        </div>
    </li>
</template>
<script>
    export  default {
        props:['moviemenu']
    }
</script>