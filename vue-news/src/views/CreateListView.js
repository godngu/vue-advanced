import ListView from "@/views/ListView";
import {useStore} from "vuex";
import {h} from 'vue';

export default function createListView(name) {
    return {
        name,
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
        },
        render() {
            return h(ListView);
        }
    }
}