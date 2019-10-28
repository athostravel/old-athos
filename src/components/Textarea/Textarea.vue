<template>
    <AtInput class="c-input--textarea" v-bind="$props">
        <textarea
            :id="idElement"
            class="c-input__element"
            :name="name"
            :disabled="disabled"
            :readonly="readonly"
            :required="required"
            :placeholder="placeholder"
            :rows="rows"
            :cols="cols"
        ></textarea>
    </AtInput>
</template>

<script>
    import formControl from '../../mixins/formControl'
    import AtInput from '../Input/Input.vue'

    export default {
        name: 'AtTextarea',
        components: {
            AtInput
        },
        mixins: [formControl],
        props: {
            rows: {
                type: Number,
                default: 6
            },
            cols: {
                type: Number,
                default: undefined
            }
        }
    }
</script>

<style lang="scss">
  .c-input {
    $this: &;

    &--textarea {
      --c-input-padding-top: 1em;
      --c-input-padding-bottom: 1em;

      #{$this}__element {
        resize: none;
      }

      &#{$this}--has-label {
        #{$this}__element {
          &:not(:placeholder-shown) {
            padding-top: 1.5em;
          }
        }
      }

      #{$this}__label {
        --c-input-label-padding-bottom: 0.5em;

        &::before {
          content: "";
          background-color: var(--c-input-background-color);
          width: calc(100% - 0.125em);
          left: 0.0625em;
          top: 0.0625em;
          position: absolute;
          display: block;
          height: 100%;
          z-index: 1;
          border-top-left-radius: var(--c-input-radius);
          border-top-right-radius: var(--c-input-radius);
          pointer-events: none;
        }

        &-text {
          position: relative;
          z-index: 2;
        }
      }
    }
  }
</style>
