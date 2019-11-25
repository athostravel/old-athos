import Vue from 'vue'
import VueMeta from 'vue-meta'
import App from '@/App.vue'
import router from '@/router'
import globals from '@/mixins/globals'
import Athos from '@lib/index.js'
import store from '@/store'

Vue.use(Athos)

Vue.mixin({
    mixins: [globals]
})

Vue.use(VueMeta, {
    refreshOnceOnNavigation: true
})

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount(document.body)
