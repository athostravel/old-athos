const state = {
    isNavOpen: true
}

const mutations = {
    toggleNav (state, value = !state.isNavOpen) {
        state.isNavOpen = value
    }
}

const actions = {}

const getters = {}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}
