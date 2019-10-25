import Option from './Option.vue'
import { use, registerComponent } from '../../utils/plugins'

const Plugin = {
    install (Vue) {
        registerComponent(Vue, Option)
    }
}

use(Plugin)

export default Plugin
