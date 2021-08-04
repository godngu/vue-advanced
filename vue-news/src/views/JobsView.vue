<template>
    <div>
        <p v-for="item in fetchedJobs" v-bind:key="item.id">
            <a :href="item.url">
                {{ item.title }}
            </a>
            <small>{{ item.time_ago }}, {{ item.domain }}</small>
        </p>
    </div>
</template>

<script>
import { mapGetters} from 'vuex';

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

}
</script>

<style scoped>

</style>