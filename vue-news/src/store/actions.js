import {
    fetchAskList, fetchItem,
    fetchJobsList, fetchList,
    fetchNewsList,
    fetchUserInfo
} from "@/api";

export default {
    FETCH_NEWS({commit}) {
        return fetchNewsList()
            .then(({data}) => {
                commit('SET_NEWS', data);
            })
            .catch(error => {
                console.log(error);
            })
    },
    FETCH_ASK({commit}) {
        return fetchAskList()
            .then(({data}) => {
                commit('SET_ASK', data);
            })
            .catch(error => {
                console.log(error);
            })
    },
    FETCH_JOBS({commit}) {
        return fetchJobsList()
            .then(({data}) => {
                commit('SET_JOBS', data);
            })
            .catch(error => {
                console.log(error);
            });
    },
    FETCH_USER({commit}, userId) {
        return fetchUserInfo(userId)
            .then(({data}) => {
                commit('SET_USER', data);
            })
            .catch(error => {
                console.log(error);
            })
    },
    FETCH_ITEM({commit}, itemId) {
        return fetchItem(itemId)
            .then(({data}) => {
                commit('SET_ITEM', data);
            })
            .catch(error => {
                console.log(error);
            });
    },

    FETCH_LIST({commit}, pageName) {
        console.log('FETCH_LIST');
        return fetchList(pageName)
            .then(response => {
                commit('SET_LIST', response.data);
                return response;
            })
            .catch(error => {
                console.log(error);
            });
    },

    TOGGLE_SPINNER({commit}, spinnerStatus) {
        commit('SET_SPINNER_STATUS', spinnerStatus);
    }
}