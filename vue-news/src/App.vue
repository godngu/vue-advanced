<template>
    <div id="app">
        <tool-bar></tool-bar>
        <router-view v-slot="{Component}">
            <transition name="page">
                <component :is="Component"></component>
            </transition>
        </router-view>
        <spinner :loading="loadingStatus"></spinner>
    </div>
</template>

<script>
import ToolBar from "@/components/ToolBar";
import Spinner from "@/components/Spinner";

export default {
    components: {
        ToolBar, Spinner
    },
    data() {
        return {
            loadingStatus: false,
        }
    },
    methods: {
        startSpinner() {
            this.loadingStatus = true;
        },
        endSpinner() {
            this.loadingStatus = false;
        }
    },
    created() {
        // bus.$on('start:spinner', this.startSpinner)
        this.emitter.on('start:spinner', this.startSpinner);
        this.emitter.on('end:spinner', this.endSpinner);
    },
    onBeforeUnmount() {
        this.emitter.off('start:spinner', this.startSpinner);
        this.emitter.off('end:spinner', this.endSpinner);
    }
}
</script>

<style>
body {
    padding: 0;
    margin: 0;
}
a {
    color: #34495e;
    text-decoration: none;
}
a:hover {
    color: #42b883;
    text-decoration: underline;
}
a.router-link-exact-active {
    text-decoration: underline;
}

/* Router Transition */
.page-enter-active, .page-leave-active {
    transition: opacity .5s;
}
.page-enter, .page-leave-to /* .page-leave-active below version 2.1.8 */ {
    opacity: 0;
}
</style>
