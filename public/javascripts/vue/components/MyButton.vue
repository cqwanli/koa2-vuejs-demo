<template xmlns:v-on="http://www.w3.org/1999/xhtml">
    <div>
        <button @click="getProjectName()">Click Me !!</button>
    </div>
</template>
<script>
    export default {
        name: "my-button",
        methods: {
            getProjectName(){
                this.$store.dispatch('getProjectName');
            }
        }
    }
</script>
