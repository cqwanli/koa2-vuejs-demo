<template>
    <div id="app">
        <img src="/images/logo.png">
        <my-button></my-button>
        <hello></hello>
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

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>