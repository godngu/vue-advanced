<template>
    <div>
        <div v-for="job in jobs">{{job.title}}</div>
    </div>
</template>

<script>
import {fetchJobsList} from "@/api";

export default {
    name: "JobsView",
    data() {
        return {
            jobs: []
        }
    },
    created() {
        fetchJobsList()
        .then(response => this.jobs = response.data)
        .catch()
    }

}
</script>

<style scoped>

</style>