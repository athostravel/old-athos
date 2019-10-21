<template>
    <component :is="tag" class="c-icon" :class="icon && `c-icon--${icon}`">
        <slot />
    </component>
</template>

<script>
    export default {
        name: 'AtIcon',
        props: {
            icon: {
                type: [String, Boolean],
                default: undefined
            },
            tag: {
                type: String,
                default: 'span'
            }
        }
    }
</script>

<style lang="scss">
  .c-icon {
    display: inline-block;
  }
</style>
