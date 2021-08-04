<template>
    <div>
        <p v-for="item in fetchedAsk" v-bind:key="item.id">
            <a :href="item.url">
                {{ item.title }}
            </a>
            <small>{{ item.time_ago }} by {{ item.user }}</small>
        </p>
    </div>
</template>

<script>
import {useStore, mapGetters} from 'vuex';

export default {
    name: "AskView",
    created() {
        this.$store.dispatch('FETCH_ASK');
    },
    setup() {
        const store = useStore();
        return {
            store
        }
    },
    computed: {
        // ...mapState({
        //     ask: state => state.ask
        // })
        ...mapGetters({
            fetchedAsk: 'fetchedAsk'
        })
    }
}
</script>

<style scoped>

</style>