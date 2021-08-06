<template>
    <div>
        <list-item></list-item>
    </div>
</template>

<script>
import ListItem from "@/components/ListItem";
import ListMixin from "@/mixins/ListMixin";

export default {
    name: "JobsView",
    components: {ListItem},
    mixins: [ListMixin]
    // created() {
    //     const store = useStore();
    //
    //     this.emitter.emit('start:spinner');
    //     store.dispatch('FETCH_JOBS')
    //     .then(() => {
    //         this.emitter.emit('end:spinner');
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     })
    // },
}
</script>

<style scoped>
</style>