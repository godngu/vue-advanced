export default {
    SET_NEWS(state, news) {
        state.news = news;
    },
    SET_JOBS(state, jobs) {
        state.jobs = jobs;
    },
    SET_ASK(state, ask) {
        state.ask = ask;
    },
    SET_USER(state, user) {
        state.user = user;
    },
    SET_ITEM(state, item) {
        state.item = item;
    },
    SET_LIST(state, list) {
        console.log('SET_LIST');
        state.list = list;
    },
    SET_SPINNER_STATUS(state, spinnerStatus) {
        // console.log('SET_SPINNER_STATUS', spinnerStatus);
        state.spinnerStatus = spinnerStatus;
    }
}