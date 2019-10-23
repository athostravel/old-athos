import * as components from './components'

const Athos = {
    install (Vue, options = {}) {
        for (const componentName in components) {
            const component = components[componentName]
            Vue.use(component)
        }
    }
}

export * from './components'
export default Athos

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(Athos)
}
