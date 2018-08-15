<template>
<div class="movie">
    <h1>電視劇詳情</h1>
    {{msg}}
</div>
</template>
<script>
        export default {
            data(){
                return {
                    msg:this.$route.params.avg
                }
            }
        }
</script>
<style>

</style>