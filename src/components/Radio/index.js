import Radio from './Radio.vue'
import { use, registerComponent } from '../../utils/plugins'

const Plugin = {
    install (Vue) {
        registerComponent(Vue, Radio)
    }
}

use(Plugin)

export default Plugin
