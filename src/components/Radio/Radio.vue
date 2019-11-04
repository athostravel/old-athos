<template>
    <AtCheckbox
        v-bind="$props"
        class="c-checkbox--radio"
        :type="type"
    />
</template>

<script>
    import AtCheckbox from '../Checkbox/Checkbox'
    import formControl from '../../mixins/formControl'

    export default {
        name: 'AtRadio',
        comments: {
            AtCheckbox
        },
        mixins: [formControl],
        props: {
            type: {
                type: String,
                default: 'radio'
            }
        }
    }
</script>

<style lang="scss">
  .c-checkbox {
    &--radio {
      --c-checkbox-input-radius: var(--radius-circle);
    }
  }
</style>
