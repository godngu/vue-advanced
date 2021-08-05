<template>
    <div>
        <section>
            <!-- 사용자 정보 -->
            <user-profile :info="getItem">
                <template v-slot:username>
                    <div>{{ getItem.user }}</div>
                </template>
                <template v-slot:time>{{ getItem.time_ago }}</template>
            </user-profile>
        </section>
        <section>
            <h2>{{ getItem.title }}</h2>
        </section>
        <section>
            <!-- 질문 댓글-->
            <div v-html="getItem.content"></div>
        </section>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
import UserProfile from "@/components/UserProfile";

export default {
    name: "ItemView",
    components: {UserProfile},
    computed: {
        ...mapGetters({
            getItem: 'getItem'
        })
    },
    created() {
        const itemId = this.$route.params.id;
        this.$store.dispatch('FETCH_ITEM', itemId);
    }
}
</script>

<style scoped>
.user-container {
    display: flex;
    align-items: center;
    padding: 0.5rem;
}
.fa-user {
    font-size: 2.5rem;
}
.user-description {
    padding-left: 8px;
}
.time {
    font-size: 0.78rem;
}
</style>