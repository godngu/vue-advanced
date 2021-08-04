<template>
    <div>
        <div v-for="item in store.state.news">{{ item.title }}</div>
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
            store
        }
    }
}
</script>

<style scoped>

</style>