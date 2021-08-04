import {
    fetchAskList,
    fetchJobsList,
    fetchNewsList,
    fetchUserInfo
} from "@/api";

export default {
    FETCH_NEWS({commit}) {
        fetchNewsList()
        .then(({data}) => {
            commit('SET_NEWS', data);
        })
        .catch(error => {
            console.log(error);
        })
    },
    FETCH_JOBS({commit}) {
        fetchJobsList()
        .then(({data}) => {
            commit('SET_JOBS', data);
        })
        .catch(error => {
            console.log(error);
        });
    },
    FETCH_ASK({commit}) {
        fetchAskList()
        .then(({data}) => {
            commit('SET_ASK', data);
        })
        .catch(error => {
            console.log(error);
        })
    },
    FETCH_USER({commit}, id) {
        fetchUserInfo(id)
        .then(({data}) => {
            console.log(data);
            commit('SET_USER', data);
        })
        .catch(error => {
            console.log(error);
        })
    }
}