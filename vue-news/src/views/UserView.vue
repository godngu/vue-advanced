<template>
    <div>
        <p>id: {{getUser.id}}</p>
        <p>karma: {{getUser.karma}}</p>
        <p>created: {{getUser.created}}</p>
    </div>
</template>

<script>
import { mapGetters} from 'vuex';

export default {
    name: "UserView",
    computed: {
        ...mapGetters({
            getUser: 'getUser'
        })
    },
    created() {
        const userId = this.$route.params.id;
        this.$store.dispatch('FETCH_USER', userId);
    }
}
</script>

<style scoped>

</style>