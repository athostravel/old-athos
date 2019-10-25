<template>
    <option
        :disabled="disabled"
        :selected="selected"
        :value="value"
    >
        {{ text }}
    </option>
</template>

<script>
    export default {
        name: 'AtOption',
        props: {
            text: {
                type: String,
                default: undefined
            },
            disabled: {
                type: Boolean,
                default: false
            },
            selected: {
                type: Boolean,
                default: false
            },
            value: {
                type: String,
                default: undefined
            }
        }
    }
</script>
