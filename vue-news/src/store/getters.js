export default {
    getUser(state) {
        return state.user;
    },
    getItem(state) {
        return state.item;
    },
    fetchedItems(state) {
        return state.list;
    },
    getSpinnerStatus(state) {
        return state.spinnerStatus;
    }
}