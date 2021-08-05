<template>
    <div>
        <user-profile :info="getUser">
            <template v-slot:username>
                <div>{{ getUser.id }}</div>
            </template>
            <template v-slot:time>{{ getUser.created }}</template>
            <template v-slot:karma>
                <div>{{ getUser.karma }}</div>
            </template>
        </user-profile>
    </div>
</template>

<script>
import { mapGetters} from 'vuex';
import UserProfile from "@/components/UserProfile";

export default {
    name: "UserView",
    components: {UserProfile},
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