<template>
    <div>
        <h1>
            {{$store.state.count}}
            <!--{{$store.state.count}}&lt;!&ndash;//不傳參數必須寫全引用&ndash;&gt;-->
            <button @click="$store.commit('add',2)">add</button><!--//調用add函數並將2傳值給num-->
            <button @click = "$store.commit('reduce')">reduce</button>
        </h1>
        <input type="text" v-model="str">
    </div>
</template>
<script>
    import {mapState,mapMutations} from  "vuex";
    import ComponentsB from "@/views/ComponentsB.vue";
    import ComponentsC from "@/views/ComponentsC.vue";
    export default {
            data(){
                return {
                    str:'ssss'
                }
            },
        computed: {
            // 通過計算書醒來複製
            //         count(){
            //             return this.$store.state.count;
            ...mapState(['count','msg'])
        }
        // },
    //     methods: {
    //         ...mapMutations(["add","reduce"])}
    //
    //
    }
</script>
<style>

</style>