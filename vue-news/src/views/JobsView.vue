<template>
    <div>
        <div v-for="job in store.state.jobs">{{job.title}}</div>
    </div>
</template>

<script>
import {useStore} from 'vuex';

export default {
    name: "JobsView",
    created() {
        this.$store.dispatch('FETCH_JOBS');
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