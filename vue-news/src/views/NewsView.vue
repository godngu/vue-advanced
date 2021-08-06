<template>
    <div>
        <list-item></list-item>
    </div>
</template>

<script>
import ListItem from "@/components/ListItem";

export default {
    name: "NewsView",
    components: {ListItem},
    created() {
        // bus.$emit('start:spinner');
        this.emitter.emit('start:spinner');
        this.$store.dispatch('FETCH_NEWS');
        this.emitter.emit('end:spinner');
    }
}
</script>

<style scoped>
</style>