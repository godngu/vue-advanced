<template>
    <div>
        <div v-for="item in fetchedNews">{{ item.title }}</div>
    </div>
</template>

<script>
import {useStore, mapGetters} from 'vuex';

export default {
    name: "NewsView",
    computed: {
        ...mapGetters({
            fetchedNews: 'fetchedNews'
        })
    },
    created() {
        this.$store.dispatch('FETCH_NEWS');
    },
    setup() {
        const store = useStore();
        return {
            store
        }
    }
}
</script>

<style scoped>

</style>