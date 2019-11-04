import CheckBox from './Checkbox'
import { use, registerComponent } from '../../utils/plugins'

const Plugin = {
    install (Vue) {
        registerComponent(Vue, CheckBox)
    }
}

use(Plugin)

export default Plugin
