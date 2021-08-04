<template>
    <div>
        <div v-for="item in store.state.ask">{{item.title}}</div>
    </div>
</template>

<script>
import {useStore} from 'vuex';

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
    }
}
</script>

<style scoped>

</style>