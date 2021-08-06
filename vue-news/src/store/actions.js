import {
    fetchAskList, fetchItem,
    fetchJobsList, fetchList,
    fetchNewsList,
    fetchUserInfo
} from "@/api";

export default {
    FETCH_NEWS(response) {
        fetchNewsList()
        .then(({data}) => {
            response.commit('SET_NEWS', data);
            return response;
        })
        .catch(error => {
            console.log(error);
        })
    },
    FETCH_JOBS(response) {
        fetchJobsList()
        .then(({data}) => {
            response.commit('SET_JOBS', data);
            return response;
        })
        .catch(error => {
            console.log(error);
        });
    },
    FETCH_ASK(response) {
        fetchAskList()
        .then(({data}) => {
            response.commit('SET_ASK', data);
            return response;
        })
        .catch(error => {
            console.log(error);
        })
    },
    FETCH_USER({commit}, userId) {
        fetchUserInfo(userId)
        .then(({data}) => {
            commit('SET_USER', data);
        })
        .catch(error => {
            console.log(error);
        })
    },
    FETCH_ITEM({commit}, itemId) {
        fetchItem(itemId)
        .then(({data}) => {
            commit('SET_ITEM', data);
        })
        .catch(error => {
            console.log(error);
        })
    },

    FETCH_LIST(response, pageName) {
        fetchList(pageName)
        .then(({data}) => {
            response.commit('SET_LIST', data);
            return response;
        })
        .catch(error => {
            console.log(error);
        });
    }
}