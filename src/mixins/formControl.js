export default {
    props: {
        name: {
            type: String,
            default: undefined
        },
        id: {
            type: String,
            default: undefined
        },
        type: {
            type: String,
            default: 'text'
        },
        placeholder: {
            type: String,
            default: undefined
        },
        readonly: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        label: {
            type: String,
            default: undefined
        },
        icon: {
            type: String,
            default: undefined
        },
        iconAlign: {
            type: String,
            default: undefined
        },
        iconDetail: {
            type: Boolean,
            default: false
        },
        value: {
            type: String,
            default: undefined
        }
    }
}
