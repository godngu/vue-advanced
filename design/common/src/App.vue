<template>
    <app-header :title="title"></app-header>
    <app-content :items="items" @renew="renewItems"></app-content>
</template>

<script>
import AppHeader from "@/components/AppHeader";
import AppContent from "@/components/AppContent";

export default {
    name: 'App',
    components: {
        AppContent,
        AppHeader
    },
    data() {
        return {
            title: 'Common Approach',
            items: [10, 20, 30],
        }
    },
    methods: {
        renewItems() {
            this.items = [40, 50, 60]
        }
    }
}
</script>

<style>
</style>
