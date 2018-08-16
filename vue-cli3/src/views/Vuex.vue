<template>
    <div>
        <h1>
            <!--{{$store.state.count}}-->
            <!--{{count}}         &lt;!&ndash;//<1>&ndash;&gt;-->
            {{count1}}
            <!--{{$store.state.count}}&lt;!&ndash;//不傳參數必須寫全引用&ndash;&gt;-->
            <button @click="$store.commit('add',2)">add</button><!--//調用add函數並將2傳值給num       mapState/-->
            <!--<button @click = "$store.commit('reduce')">reduce</button>-->
            <button @click="$store.commit('reduce')">reduce</button>
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
        // computed: {count(){return this.$store.state.count},   }                // 通過計算書醒來複製            <1>
        computed:mapState({
            count1:state=> {return state.count++}           //定義了一個計算屬性count1，count1依賴state，state返回什麽count1就是什麽
        })

    //     methods: {
    //         ...mapMutations(["add","reduce"])}
    //
    //
    }
</script>
<style>

</style>