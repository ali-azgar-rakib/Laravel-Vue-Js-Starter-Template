import Axios from "axios"

export default {
    state: {
        users: []
    },
    getters: {
        getUsers(state) {
            return state.users
        }

    },
    actions: {
        getUsers({ commit }) {
            axios.get('api/user').then(res => commit('users', res.data))
        }

    },
    mutations: {
        users(state, payload) {
            state.users = payload
        }

    }


}