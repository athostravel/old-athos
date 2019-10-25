import Icon from './Icon.vue'
import IconList from './IconList.vue'
import { use, registerComponent } from '../../utils/plugins'

const Plugin = {
    install (Vue) {
        registerComponent(Vue, Icon)
        registerComponent(Vue, IconList)
    }
}

use(Plugin)

export default Plugin
