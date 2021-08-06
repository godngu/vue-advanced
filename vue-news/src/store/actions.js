import {
    fetchAskList, fetchItem,
    fetchJobsList, fetchList,
    fetchNewsList,
    fetchUserInfo
} from "@/api";

export default {
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
        console.log('FETCH_LIST', pageName);
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