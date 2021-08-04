<template>
    <div>
        <section>
            <div class="user-container">
                <div>
                    <i class="fas fa-user"></i>
                </div>
                <div class="user-description">
                    <router-link :to="`/user/${getItem.user}`">
                        {{ getItem.user }}
                    </router-link>
                    <div class="time">
                        {{ getItem.time_ago }}
                    </div>
                </div>
            </div>
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

export default {
    name: "ItemView",
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