<template>
    <source
        :srcset="!lazy && srcset"
        :data-srcset="lazy && srcset"
        :media="`(min-width: ${media})`"
        :type="type"
    >
</template>

<script>
    export default {
        name: 'AtPictureSource',
        props: {
            srcset: {
                type: String,
                default: ''
            },
            media: {
                type: String,
                default: undefined
            },
            type: {
                type: String,
                default: undefined
            },
            lazy: {
                type: Boolean,
                default: true
            }
        }
    }
</script>
