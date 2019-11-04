import Tetris from './Tetris'

import { use, registerComponent } from '../../utils/plugins'

const Plugin = {
    install (Vue) {
        registerComponent(Vue, Tetris)
    }
}

use(Plugin)

export default Plugin
