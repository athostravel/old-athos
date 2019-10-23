import Picture from './Picture.vue'
import { use, registerComponent } from '../../utils/plugins'

const Plugin = {
    install (Vue) {
        registerComponent(Vue, Picture)
    }
}

use(Plugin)

export default Plugin
