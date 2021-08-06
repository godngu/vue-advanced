import {useStore} from "vuex";

export default {

    created() {
        const store = useStore();
        this.emitter.emit('start:spinner');
        store.dispatch('FETCH_LIST', this.$route.name)
        .then(() => {
            this.emitter.emit('end:spinner');
        })
        .catch((error) => {
            console.log(error);
        })
    }
}