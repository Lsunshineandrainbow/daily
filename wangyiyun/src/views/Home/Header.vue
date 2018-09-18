<template>
    <div>
        <ul class="header">
            <p id="nav">
                <router-link to="">
                    <svg class="icon" aria-hidden="true">
                         <use xlink:href='#icon-daohanglanshousuo'></use>
                    </svg>
                </router-link>
            </p>
            <div>
                <li v-for="val in musiclist" class="small">
                <router-link :to='val.path'>
                    <svg class="icon" aria-hidden="true">
                        <use :xlink:href='val.font'></use>
                    </svg>
                </router-link>
                 </li>
            </div>
            <p id="find">
                <router-link to="">
                    <svg class="icon" aria-hidden="true">
                         <use xlink:href='#icon-sousuo'></use>
                    </svg>
                </router-link>
            </p>
        </ul>
    </div>
</template>
<script>
    export  default {
        props:['musiclist']
    }
</script>
<style scoped lang="scss">
    .icon {
        width: 2em;
        height: 2em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
        font-size: .3rem;
        font-weight: 400;
    }
    ul{
        background: #e62f2d;
        height: 1rem;
        div{
            position: fixed;
            top: 0;
            width:3.4rem;
            height:1rem;
            margin: 0 1.5rem;
            display: flex;
            .small{
                flex-grow: 1;
                list-style: none;
                float: left;
                margin-left:20px ;
                margin-top: 10px;
            }
        }
        #nav{
            float: left;
            margin-top: 10px;
            margin-left: 3px;
        }
        #find{
            float: right;
            margin-top: 10px;
            margin-right:3px ;

        }

    }

</style>