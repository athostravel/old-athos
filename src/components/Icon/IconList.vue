<template>
    <div class="c-icon-list" :class="{'c-icon-list--vertical' : vertical}">
        <Icon
            v-for="icon in icons"
            :key="icon.id"
            class="c-icon-list__icon"
            :icon="icon"
        />
    </div>
</template>

<style lang="scss">
  .c-icon-list {
    display: flex;
    align-items: center;

    &__icon:not(:last-child) {
      margin-right: #{em(8px)};
    }
  }
</style>

<script>

    import Icon from '../Icon/Icon'

    export default {
        name: 'AtIconList',
        components: {
            Icon
        },
        props: {
            vertical: {
                type: Boolean,
                default: false
            },
            icons: {
                type: Array,
                default: () => ['arrow-down', 'arrow-down']
            }
        }
    }
</script>
