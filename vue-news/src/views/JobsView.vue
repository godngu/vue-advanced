<template>
    <div>
        <div v-for="job in fetchedJobs">{{job.title}}</div>
    </div>
</template>

<script>
import {useStore, mapGetters} from 'vuex';

export default {
    name: "JobsView",
    computed: {
        ...mapGetters({
            fetchedJobs: 'fetchedJobs'
        })
    },
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