const state = {
    isModalOpen: true
}

const mutations = {
    toggleOverlay (state, value = !state.isModalOpen) {
        state.isModalOpen = value
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
