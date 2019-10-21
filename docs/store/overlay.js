import Vue from 'vue'

export const store = Vue.observable({
    isModalOpen: false
})

export const mutations = {
    toggleOverlay () {
        store.isModalOpen = !store.isModalOpen
    }
}
