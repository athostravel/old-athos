import PictureSource from './PictureSource.vue'
import { use, registerComponent } from '../../utils/plugins'

const Plugin = {
    install (Vue) {
        registerComponent(Vue, PictureSource)
    }
}

use(Plugin)

export default Plugin
