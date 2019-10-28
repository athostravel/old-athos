<template>
    <AtInput class="c-input--select" v-bind="$props" :icon="icon ? icon : 'angle-down'">
        <select
            :id="idElement"
            class="c-input__element"
            :disabled="disabled"
            :required="required"
            :multiple="multiple"
            :name="name"
        >
            <slot />
            <AtOption
                v-for="option in options"
                :key="option.id"
                :text="option.text"
                :disabled="option.disabled"
                :selected="option.selected"
                :value="option.value"
            >
                {{ option.text }}
            </AtOption>
        </select>
    </AtInput>
</template>

<script>
    import formControl from '../../mixins/formControl'
    import AtInput from '../Input/Input.vue'
    import AtOption from '../Option/Option.vue'

    export default {
        name: 'AtSelect',
        components: {
            AtInput,
            AtOption
        },
        mixins: [formControl],
        props: {
            options: {
                type: Array,
                default: () => []
            }
        }
    }
</script>

<style lang="scss">
  .c-input {
    $this: &;

    &--select {
      #{$this}__element {
        cursor: pointer;
      }

      option {
        padding: 0;
        color: var(--c-input-color, currentColor);
      }
    }
  }
</style>
