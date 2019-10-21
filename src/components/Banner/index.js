import Banner from './Banner.vue'
import BannerOrion from './BannerOrion.vue'
import { use, registerComponent } from '../../utils/plugins'

const Plugin = {
    install (Vue) {
        registerComponent(Vue, Banner)
        registerComponent(Vue, BannerOrion)
    }
}

use(Plugin)

export default Plugin
