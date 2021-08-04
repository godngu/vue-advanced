<template>
    <div>
        <p>id: {{getUser.id}}</p>
        <p>karma: {{getUser.karma}}</p>
        <p>created: {{getUser.created}}</p>
    </div>
</template>

<script>
import {useStore, mapGetters} from 'vuex';

export default {
    name: "UserView",
    computed: {
        ...mapGetters({
            getUser: 'getUser'
        })
    },
    created() {
        const id = this.$route.params.id;
        this.$store.dispatch('FETCH_USER', id);
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