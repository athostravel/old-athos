<template>
    <div class="c-checkbox">
        <input
            :id="idElement"
            class="c-checkbox__input"
            :type="type"
            :name="name"
        >
        <label v-if="label" class="c-checkbox__label" :for="idElement">
            <span class="c-checkbox__label-text">
                {{ label }}
            </span>
        </label>
    </div>
</template>

<script>
    import formControl from '../../mixins/formControl'

    export default {
        name: 'AtCheckbox',
        mixins: [formControl],
        props: {
            type: {
                type: String,
                default: 'checkbox'
            }
        }
    }
</script>

<style lang="scss">
  .c-checkbox {
    --c-checkbox--font-size: 1em;
    --c-checkbox-input-border: 1px solid #dfe0e4;
    --c-checkbox-input-background: #fff;
    --c-checkbox-input-radius: var(--radius-s);
    --c-checkbox-input-checked-background: #000;
    --c-checkbox-input-checked-border: 1px solid #000;

    display: flex;
    align-items: center;
    cursor: pointer;

    &__input {
      position: absolute;
      opacity: 0;

      &:checked {
        & + label {
          &::before {
            background: var(--c-checkbox-input-checked-background);
            border: var(--c-checkbox-input-checked-border);
            content: 'ok';
            font-family: var(--font-family-icons);
            color: #fff;
          }
        }
      }
    }

    &__label {
      display: flex;
      align-items: center;

      &::before {
        transition: all 0.3s;
        content: "";
        border: var(--c-checkbox-input-border);
        background: var(--c-checkbox-input-background);
        border-radius: var(--c-checkbox-input-radius);
        min-height: 20px;
        min-width: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        margin-right: 8px;
      }

      &-text {
        font-size: var(--c-checkbox--font-size);
      }
    }
  }
</style>
