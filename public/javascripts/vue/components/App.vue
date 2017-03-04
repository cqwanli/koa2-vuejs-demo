<template>
    <div id="app">
        <img class="bg" src="/images/reason_bg.jpg"/>
        <div class="r-header">
            <img class="cloud" src="/images/cloud.png"/>
            <reasion-header class="title-svg"/>
        </div>
        <div class="item-container">
            <reasion-item class="svg-item svg-item-2" addTurns="2"/>
            <reasion-item class="svg-item svg-item-3" addTurns="3"/>
            <reasion-item class="svg-item svg-item-1" addTurns="1"/>
            <reasion-item class="svg-item svg-item-4" addTurns="4"/>
        </div>
        <div class="btn-container">
            <svg-button  class="my-btn"/>
        </div>
    </div>
</template>
<script>
    import Hello from "./Hello.vue"
    import MyButton from "./MyButton.vue"
    import ReasionHeader from "./ReasionHeader.vue"
    import ReasionItem from "./ReasionItem.vue"
    import SvgButton from "./SvgButton.vue"
    export default {
        name: 'app',
        components: {
            MyButton,
            Hello,
            ReasionHeader,
            ReasionItem,
            SvgButton
        }
    }
</script>

<style lang="less" rel="stylesheet/less">
    @width: 0.01rem;
    @height: 0.01rem;
    * {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .bg {
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: -1;
    }

    .r-header {
        .cloud {
            margin-top: 44*@height;
            margin-left: auto;
            margin-right: auto;
            display: block;
            opacity: 0;
            width: 460*@width;
            animation: cloudAnimationKey 2s ease-in-out .2s forwards;
            z-index: 10;
            position: relative;
        }
        .title-svg {
            position: relative;
            z-index: 20;
            display: block;
            width: 340*@width;
            margin: -75*@height auto;
        }
    }

    .item-container {
        width: 600*@width;
        margin-top: 118*@height;
        margin-left: auto;
        margin-right: auto;
        .svg-item {
            width: 220*@width;
            margin: 0 32*@width;
            display: inline-block;
            opacity: 0;
        }
    }

    .svgItemMaker(@counter) when (@counter<5) {
        .svg-item-@{counter} {
            animation: shineAnimation .5s ease-in-out (2s+0.2*@counter) forwards;
        }
        .svgItemMaker((@counter+1))
    }
    .svgItemMaker(1);

    @keyframes shineAnimation {
        0% {
            opacity: 1;
        }
        25% {
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
        75% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    @keyframes cloudAnimationKey {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
    .btn-container{
        margin-top: 44*@height;
        .my-btn{
            margin: 0 auto;
        }
    }
</style>