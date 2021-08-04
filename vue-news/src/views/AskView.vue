<template>
    <div>
        <div v-for="item in fetchedAsk">{{item.title}}</div>
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