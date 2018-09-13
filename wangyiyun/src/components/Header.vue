<template>
    <div>
        <ul class="header">
            <li v-for="val in musiclist">111
                <svg class="icon" aria-hidden="true">
                    <use :xlink:href='val.font'>{{val.font}}</use>
                </svg>
            </li>
        </ul>
    </div>
</template>
<script>
    export  default {
        props:['musiclist']
    }

</script>
<style  lang="scss">
    .icon {
        width: 1em; height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }
</style>