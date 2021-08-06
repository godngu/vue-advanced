<template>
    <div>
        <list-item></list-item>
    </div>
</template>

<script>
import {useStore} from 'vuex';
import ListItem from "@/components/ListItem";

export default {
    name: "JobsView",
    components: {ListItem},
    created() {
        const store = useStore();

        this.emitter.emit('start:spinner');
        store.dispatch('FETCH_JOBS')
        .then(() => {
            this.emitter.emit('end:spinner');
        })
        .catch((error) => {
            console.log(error);
        })
    },
}
</script>

<style scoped>
</style>