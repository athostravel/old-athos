import Vue from 'vue'
import Vuex from 'vuex'
import nav from '@/store/nav'
import overlay from '@/store/overlay'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        nav,
        overlay
    }
})
