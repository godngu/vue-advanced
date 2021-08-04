<template>
    <div>
        <p v-for="item in fetchedNews" v-bind:key="item.id">
            <a v-bind:href="item.url">
                {{ item.title }}
            </a>
            <small>{{ item.time_ago }} by {{ item.user }}</small>
        </p>
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