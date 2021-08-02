<template>
    <div id="app">
        <tool-bar></tool-bar>
        <router-view></router-view>
    </div>
</template>

<script>
import ToolBar from "@/components/ToolBar";

export default {
    components: {
        ToolBar
    },
}
</script>

<style>
body {
    padding: 0;
    margin: 0;
}
/*#app {*/
/*  font-family: Avenir, Helvetica, Arial, sans-serif;*/
/*  -webkit-font-smoothing: antialiased;*/
/*  -moz-osx-font-smoothing: grayscale;*/
/*  text-align: center;*/
/*  color: #2c3e50;*/
/*  margin-top: 60px;*/
/*}*/
</style>
