<template>
    <div id="app">
        <img class="bg" src="/images/reason_bg.jpg"/>
        <img class="cloud" src="/images/cloud.png"/>
    </div>
</template>
<script>
    import Hello from "./Hello.vue"
    import MyButton from "./MyButton.vue"
    export default {
        name: 'app',
        components: {
            MyButton,
            Hello
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

    .cloud {
        margin-top: 44*@height;
        margin-left: auto;
        margin-right: auto;
        display: block;
        opacity: 0;
        width: 460*@width;
        animation:cloudAnimationKey 1s ease-in-out .5s forwards;
    }

    @keyframes cloudAnimationKey {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
</style>