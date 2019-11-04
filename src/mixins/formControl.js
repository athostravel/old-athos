import stringToSlug from '../utils/stringToSlug'

export default {
    data () {
        return {
            idElement: this.setId()
        }
    },
    methods: {
        setId () {
            return !this.id && this.label ? stringToSlug(this.label) : this.id
        }
    },
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
        },
        size: {
            type: String,
            default: undefined
        },
        max: {
            type: String,
            default: undefined
        },
        min: {
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
        required: {
            type: Boolean,
            default: false
        },
        multiple: {
            type: Boolean,
            default: false
        },
        checked: {
            type: Boolean,
            default: true
        },
        autocomplete: {
            type: Boolean,
            default: false
        }
    }
}
