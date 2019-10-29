<template>
    <div
        class="c-input"
        :class="{
            'c-input--has-icon': icon,
            'c-input--has-icon-left': icon && iconAlign === 'left',
            'c-input--has-icon-detail': iconDetail,
            'c-input--has-label': label,
            'c-input--is-disabled': disabled,
            'c-input--tiny' : size && size === 'tiny',
            'c-input--small' : size && size === 'small',
            'c-input--medium' : size && size === 'medium',
            'c-input--large' : size && size === 'large',
        }"
    >
        <div class="c-input__inner">
            <slot>
                <input
                    :id="idElement"
                    class="c-input__element"
                    :type="type"
                    :name="name"
                    :placeholder="placeholder"
                    :readonly="readonly"
                    :disabled="disabled"
                    :value="value"
                    :required="required"
                    :autocomplete="autocomplete"
                    :checked="checked"
                    :max="max"
                    :min="min"
                    :multiple="multiple"
                >
            </slot>

            <label v-if="label" class="c-input__label" :for="idElement">
                <span class="c-input__label-text">
                    {{ label }}
                </span>
            </label>

            <AtIcon
                v-if="icon"
                class="c-input__icon"
                :icon="icon"
            />
        </div>
    </div>
</template>

<script>
    import formControl from '../../mixins/formControl'
    import AtIcon from '../Icon/Icon.vue'

    export default {
        name: 'AtInput',
        components: {
            AtIcon
        },
        mixins: [formControl]
    }
</script>

<style lang="scss">
  @mixin c-input-focus($this) {
    &:active:not(:disabled):not(&--is-disabled):not(:read-only),
       &:focus:not(:disabled):not(&--is-disabled):not(:read-only) {
      @content;
    }
  }

  @mixin c-input-hover($this) {
    &:hover:not(:disabled):not(&--is-disabled):not(:read-only) {
      @content;
    }
  }

  .c-input {
    $this: &;

    --c-input-size: 1em;
    --c-input-font-size: 1em;
    --c-input-min-height: 3em;
    --c-input-padding-top: 0;
    --c-input-padding-right: 1em;
    --c-input-padding-bottom: 0;
    --c-input-padding-left: 1em;
    --c-input-font-weight: 400;
    --c-input-background-color: var(--color-shade-0);
    --c-input-radius: var(--radius-s);
    --c-input-border-width: 0.0625em;
    --c-input-border-style: solid;
    --c-input-border-color: var(--color-shade-400);
    --c-input-border-color-focus: var(--color-primary);
    --c-input-border-color-hover: var(--color-shade-500);
    --c-input-placeholder-color: var(--color-shade-500);

    // Label
    --c-input-label-color: currentColor;
    --c-input-label-padding-top: 0.25em;
    --c-input-label-padding-right: var(--c-input-padding-right);
    --c-input-label-padding-bottom: 0.25em;
    --c-input-label-padding-left: var(--c-input-padding-left);
    --c-input-label-font-size: 0.625em;
    --c-input-label-text-transform: uppercase;

    // Icon
    --c-input-icon-background-color: transparent;
    --c-input-icon-color: var(--color-primary);
    --c-input-icon-detail: none;
    --c-input-icon-detail-color: var(--c-input-border-color);

    font-size: var(--c-input-size);

    &__inner {
      display: grid;
      grid-template-columns: 1fr;
      position: relative;
    }

    &__element {
      font-size: var(--c-input-font-size);
      min-height: var(--c-input-min-height);
      padding: var(--c-input-padding-top) var(--c-input-padding-right) var(--c-input-padding-bottom) var(--c-input-padding-left);
      font-weight: var(--c-input-font-weight);
      background-color: var(--c-input-background-color);
      border-radius: var(--c-input-radius);
      border: var(--c-input-border-width) var(--c-input-border-style) var(--c-input-border-color);
      color: var(--c-input-color, currentColor);
      outline: none;
      appearance: none;
      transition: all 0.3s;
      grid-row: 1/3;
      grid-column: 1/3;
      position: relative;
      z-index: 1;
      margin: 0;
      width: 100%;

      &:not(:placeholder-shown) {
        & + #{$this}__label {
          transform: translateY(0);
          opacity: 1;
        }
      }

      @include c-input-hover($this) {
        --c-input-border-color: var(--c-input-border-color-hover);
      }

      @include c-input-focus($this) {
        --c-input-border-color: var(--c-input-border-color-focus);
      }

      &::placeholder {
        color: var(--c-input-placeholder-color);
      }
    }

    &__label {
      color: var(--c-input-label-color);
      text-transform: var(--c-input-label-text-transform);
      padding: var(--c-input-label-padding-top) var(--c-input-label-padding-right) var(--c-input-label-padding-bottom) var(--c-input-label-padding-left);
      grid-row: 1/2;
      grid-column: 1/2;
      display: block;
      transition: all 0.3s;
      opacity: 0;
      transform: translateY(0.25em);
      white-space: nowrap;
      overflow-x: hidden;
      text-overflow: ellipsis;
      position: relative;
      z-index: 2;
      pointer-events: none;

      &-text {
        font-size: var(--c-input-label-font-size);
      }
    }

    &__icon {
      font-size: var(--c-input-icon-font-size, 1em);
      border-top-right-radius: var(--c-input-radius);
      border-bottom-right-radius: var(--c-input-radius);
      background-color: var(--c-input-icon-background-color);
      color: var(--c-input-icon-color);
      min-width: var(--c-input-min-height);
      grid-row: 1/3;
      grid-column: 2/3;
      pointer-events: none;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      z-index: 2;

      &::after {
        display: var(--c-input-icon-detail);
        content: "";
        height: 2em;
        width: 0.0625em;
        background-image: linear-gradient(to bottom, transparent, var(--c-input-icon-detail-color), transparent);
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
      }
    }

    &--has-icon {
      #{$this}__element {
        padding-right: var(--c-input-min-height);
      }
    }

    &--has-icon-left {
      #{$this}__inner {
        grid-template-columns: auto 1fr;
      }

      #{$this}__element {
        padding-right: var(--c-input-padding-right);
        padding-left: var(--c-input-min-height);
      }

      #{$this}__label {
        grid-column: 2/3;
      }

      &:not(#{$this}--has-icon-detail) {
        #{$this}__label {
          --c-input-label-padding-left: 0;
        }
      }

      #{$this}__icon {
        grid-column: 1/2;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        border-top-left-radius: var(--c-input-radius);
        border-bottom-left-radius: var(--c-input-radius);

        &::after {
          left: auto;
          right: 0;
        }
      }
    }

    &--has-icon-detail {
      --c-input-icon-detail: block;

      #{$this}__element {
        padding-right: calc(var(--c-input-min-height) + var(--c-input-padding-right));
      }

      &#{$this}--has-icon-left {
        #{$this}__element {
          padding-right: var(--c-input-padding-right);
          padding-left: calc(var(--c-input-min-height) + var(--c-input-padding-left));
        }
      }
    }

    &--has-label {
      #{$this}__element {
        &:not(:placeholder-shown) {
          padding-top: calc(var(--c-input-label-font-size) + var(--c-input-label-padding-bottom) + var(--c-input-label-padding-top) - 0.1em);
        }
      }
    }

    &--is-disabled,
    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;

      #{$this}__element,
      #{$this}__label {
        cursor: not-allowed;
      }
    }

    &--tiny {
      --c-input-size: 0.6668em;
    }

    &--small {
      --c-input-size: 0.8336em;
    }

    &--medium {
      --c-input-size: 1.1668em;
    }

    &--large {
      --c-input-size: 1.3334em;
    }
  }
</style>
