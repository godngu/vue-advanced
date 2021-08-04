<template>
    <div>
        <p v-for="item in fetchedAsk" v-bind:key="item.id">
            <router-link :to="`/item/${item.id}`">
                {{ item.title }}
            </router-link>
            <small>{{ item.time_ago }} by {{ item.user }}</small>
        </p>
    </div>
</template>

<script>
import { mapGetters} from 'vuex';

export default {
    name: "AskView",
    computed: {
        ...mapGetters({
            fetchedAsk: 'fetchedAsk'
        })
    },
    created() {
        this.$store.dispatch('FETCH_ASK');
    },
}
</script>

<style scoped>

</style>