<template>
    <component
        :is="tag"
        class="c-button"
        :href="tag === 'a' && href"
        :class="{
            'c-button--outlined' : outlined,
            'c-button--casper' : casper,
            'c-button--tiny' : size && size === 'tiny',
            'c-button--small' : size && size === 'small',
            'c-button--medium' : size && size === 'medium',
            'c-button--large' : size && size === 'large',
            'c-button--is-disabled' : disabled
        }"
        :disabled="tag === 'button' && disabled"
    >
        <span
            v-if="icon"
            class="c-button__icon"
            :class="{
                'c-button__icon--left': iconAlign === 'left' && text,
                'c-button__icon--right': iconAlign === 'right' && text
            }"
        >
            <AtIcon :icon="icon" />
        </span>
        <span v-if="text" class="c-button__text">{{ text }}</span>
    </component>
</template>

<script>
    import AtIcon from '../Icon/Icon.vue'

    export default {
        name: 'AtButton',
        components: {
            AtIcon
        },
        props: {
            tag: {
                type: String,
                default: 'a'
            },
            text: {
                type: String,
                default: undefined
            },
            href: {
                type: String,
                default: '#'
            },
            icon: {
                type: [String, Boolean],
                default: false
            },
            iconAlign: {
                type: String,
                default: 'left'
            },
            outlined: {
                type: Boolean,
                default: false
            },
            casper: {
                type: Boolean,
                default: false
            },
            size: {
                type: String,
                default: undefined
            },
            disabled: {
                type: Boolean,
                default: false
            }
        }
    }
</script>

<style lang="scss">
  @mixin c-button-hover($this) {
    #{$this}--is-active:not(:disabled):not(#{$this}--is-disabled),
    &:active:not(:disabled):not(#{$this}--is-disabled),
    &:focus:not(:disabled):not(#{$this}--is-disabled),
    &:hover:not(:disabled):not(#{$this}--is-disabled) {
      @content;
    }
  }

  .c-button {
    $this: &;

    --c-button-size: #{em(16px)};
    --c-button-text-align: center;
    --c-button-background-color: currentColor;
    --c-button-color: var(--color-shade-0);
    --c-button-font-size: #{em(16px)};
    --c-button-font-weight: 400;
    --c-button-text-transform: uppercase;
    --c-button-padding: #{em(8px) em(16px)};
    --c-button-border-radius: #{em(2px)};
    --c-button-border-style: solid;
    --c-button-border-width: 0;
    --c-button-border-color: currentColor;
    --c-button-min-height: #{em(48px)};
    --c-button-icon-size: #{em(16px)};
    --c-button-overlay-opacity: 0.25;
    --c-button-overlay-color: #fff;

    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    cursor: pointer;
    overflow: hidden;
    text-align: var(--c-button-text-align);
    background-color: var(--c-button-background-color);
    font-size: var(--c-button-size);
    text-transform: var(--c-button-text-transform);
    border-radius: var(--c-button-border-radius);
    padding: var(--c-button-padding);
    min-height: var(--c-button-min-height);
    border-style: var(--c-button-border-style);
    border-width: var(--c-button-border-width);
    border-color: var(--c-button-border-color);
    transition: all 0.6s;

    &::before {
      content: "";
      display: block;
      left: 50%;
      top: 50%;
      width: 1px;
      height: 1px;
      transform: translate(-50%, -50%);
      position: absolute;
      opacity: 1;
      z-index: 1;
      transition: all 0.6s;
      border-radius: 50%;
    }

    &__text {
      font-size: var(--c-button-font-size);
      font-weight: var(--c-button-font-weight);
      color: var(--c-button-color);
      z-index: 2;
    }

    &__icon {
      font-size: var(--c-button-icon-size);
      display: flex;
      color: var(--c-button-color);
      z-index: 2;

      &--left {
        margin-right: 0.5em;
      }

      &--right {
        margin-left: 0.5em;
        order: 3;
      }
    }

    @include c-button-hover($this) {
      &::before {
        background-color: var(--c-button-overlay-color);
        opacity: var(--c-button-overlay-opacity);
        width: 110%;
        height: 110%;
        border-radius: var(--c-button-border-radius);
      }
    }

    &--outlined {
      --c-button-background-color: transparent;
      --c-button-overlay-color: currentColor;
      --c-button-color: currentColor;
      --c-button-border-width: 1px;
      --c-button-overlay-opacity: 1;

      @include c-button-hover($this) {
        --c-button-color: var(--color-shade-0);
      }
    }

    &--casper {
      --c-button-background-color: transparent;
      --c-button-overlay-color: currentColor;
      --c-button-color: currentColor;
      --c-button-border-width: 1px;
    }

    &--is-disabled,
    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }

    &--tiny {
      --c-button-size: 0.6668em;
    }

    &--small {
      --c-button-size: 0.8336em;
    }

    &--medium {
      --c-button-size: 1.1668em;
    }

    &--large {
      --c-button-size: 1.3334em;
    }
  }
</style>
