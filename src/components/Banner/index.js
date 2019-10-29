import Banner from './Banner.vue'
import BannerOrion from './BannerOrion.vue'
import BannerSirius from './BannerSirius.vue'
import { use, registerComponent } from '../../utils/plugins'

const Plugin = {
    install (Vue) {
        registerComponent(Vue, Banner)
        registerComponent(Vue, BannerOrion)
        registerComponent(Vue, BannerSirius)
    }
}

use(Plugin)

export default Plugin
