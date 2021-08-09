import {
    fetchAskList, fetchItem,
    fetchJobsList, fetchList,
    fetchNewsList,
    fetchUserInfo
} from "@/api";

export default {
    // promise
    // FETCH_NEWS({commit}) {
    //     return fetchNewsList()
    //         .then(({data}) => {
    //             commit('SET_NEWS', data);
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         })
    // },
    // FETCH_ASK({commit}) {
    //     return fetchAskList()
    //         .then(({data}) => {
    //             commit('SET_ASK', data);
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         })
    // },

    // FETCH_JOBS({commit}) {
    //     return fetchJobsList()
    //         .then(({data}) => {
    //             commit('SET_JOBS', data);
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         });
    // },

    // FETCH_ITEM({commit}, itemId) {
    //     return fetchItem(itemId)
    //         .then(({data}) => {
    //             commit('SET_ITEM', data);
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         });
    // },

    // FETCH_USER({commit}, userId) {
    //     return fetchUserInfo(userId)
    //         .then(({data}) => {
    //             commit('SET_USER', data);
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         })
    // },

    // FETCH_LIST({commit}, pageName) {
    //     console.log('FETCH_LIST');
    //     return fetchList(pageName)
    //         .then(response => {
    //             commit('SET_LIST', response.data);
    //             return response;
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         });
    // },

    // async
    async FETCH_NEWS(context) {
        const response = await fetchNewsList();
        context.commit('SET_NEWS', response.data);
        // 리턴값은 항상 promise가 된다.
        return response;
    },
    async FETCH_ASK({commit}) {
        const response = await fetchAskList();
        commit('SET_ASK', response.data);
        return response;
    },
    async FETCH_JOBS({commit}) {
        const response = await fetchJobsList();
        commit('SET_JOBS', response.data);
        return response;
    },
    async FETCH_LIST(context, pageName) {
        const response = await fetchList(pageName);
        context.commit('SET_LIST', response.data);
        return response;
    },
    async FETCH_ITEM({commit}, itemId) {
        const response = await fetchItem(itemId);
        commit('SET_ITEM', response.data);
        return response;
    },
    async FETCH_USER({commit}, userId) {
        const response = await fetchUserInfo(userId);
        commit('SET_USER', response.data);
        return response;
    },

    TOGGLE_SPINNER({commit}, spinnerStatus) {
        commit('SET_SPINNER_STATUS', spinnerStatus);
    }
}