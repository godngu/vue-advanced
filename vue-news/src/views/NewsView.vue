<template>
    <div>
        <div v-for="item in store.state.news">{{ item.title }}</div>
        <div>news</div>
    </div>
</template>

<script>
import {useStore} from 'vuex';

export default {
    created() {
        this.$store.dispatch('FETCH_NEWS');
    },
    setup() {
        const store = useStore();
        return {
            store,
            news: store.state.news
        }
    }
}
</script>

<style scoped>

</style>