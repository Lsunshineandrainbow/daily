<template>
    <div>
        <h1>我是組件A</h1>
        <components-b :msg='msg'></components-b>
        <components-c @xx="fn"></components-c>
        {{msg}}
    </div>
</template>
<script>
    import ComponentsB from "@/views/ComponentsB.vue";
    import ComponentsC from "@/views/ComponentsC.vue";
    export  default {

        data(){
            return {
                msg:0,
            }
        },
        components:{
            ComponentsB,
            ComponentsC,
        },
        methods:{
            fn(a){
               this.msg +=a
            }
        }
    }
</script>