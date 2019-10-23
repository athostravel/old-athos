<template>
    <div class="c-tabs__content">
        <slot />
    </div>
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
                default: 'Tab'
            }
        }
    }
</script>

<style lang="scss" scoped>
  .c-tabs {
    &__content {
      &:not(.is-active) {
        display: none;
      }
    }
  }
</style>
