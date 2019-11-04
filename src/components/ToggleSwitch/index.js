import ToggleSwitch from './ToggleSwitch.vue'
import { use, registerComponent } from '../../utils/plugins'

const Plugin = {
    install (Vue) {
        registerComponent(Vue, ToggleSwitch)
    }
}

use(Plugin)

export default Plugin
