import {useStore} from "vuex";

export default {

    mounted() {
        const store = useStore();
        store.commit('SET_SPINNER_STATUS', false);
    },

    // created() {
    //     const store = useStore();
    //     store.commit('SET_SPINNER_STATUS', true);
    //     store.dispatch('FETCH_LIST', this.$route.name)
    //     .then(() => {
    //         console.log('5');
    //         console.log('fetched');
    //         store.commit('SET_SPINNER_STATUS', false);
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     })
    // }
}