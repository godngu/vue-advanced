<template>
    <div>Item</div>
    <p>{{ getItem.title }}</p>
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

</style>