<template>
    <div class="hello">
        <h2>{{ helloMsg }}</h2>
    </div>
</template>

<script type="text/ecmascript-6">
    import {mapGetters} from 'vuex'
    export default {
        name: 'hello',
        computed: {
            ...mapGetters([
                'helloMsg'
            ])
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }
</style>
