<template>
    <component
        :is="tag"
        class="c-button"
        :href="tag === 'a' && href"
        :class="{
            'c-button--outlined' : outlined,
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
    #{$this}--is-active:not(:disabled):not(&--is-disabled),
    &:active:not(:disabled):not(&--is-disabled),
    &:focus:not(:disabled):not(&--is-disabled),
    &:hover:not(:disabled):not(&--is-disabled) {
      @content;
    }
  }

  .c-button {
    $this: &;

    --c-button-size: #{em(16px)};
    --c-button-text-align: center;
    --c-button-background-color: var(--color-shade-800);
    --c-button-color: var(--color-shade-0);
    --c-button-font-size: #{em(16px)};
    --c-button-font-weight: 400;
    --c-button-text-transform: uppercase;
    --c-button-padding: #{em(8px) em(16px)};
    --c-button-border-radius: #{em(2px)};
    --c-button-border-style: solid;
    --c-button-border-width: #{em(1px)};
    --c-button-border-color: var(--c-button-background-color);
    --c-button-min-height: #{em(48px)};
    --c-button-icon-size: #{em(16px)};

    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    cursor: pointer;
    text-align: var(--c-button-text-align);
    background-color: var(--c-button-background-color);
    color: var(--c-button-color);
    font-size: var(--c-button-size);
    text-transform: var(--c-button-text-transform);
    border-radius: var(--c-button-border-radius);
    border-style: var(--c-button-border-style);
    border-width: var(--c-button-border-width);
    border-color: var(--c-button-border-color);
    padding: var(--c-button-padding);
    min-height: var(--c-button-min-height);
    transition: all 0.3s;

    &__text {
      font-size: var(--c-button-font-size);
      font-weight: var(--c-button-font-weight);
    }

    &__icon {
      font-size: var(--c-button-icon-size);
      display: flex;

      &--left {
        margin-right: 0.5em;
      }

      &--right {
        margin-left: 0.5em;
        order: 3;
      }
    }

    @include c-button-hover($this) {
      --c-button-background-color: var(--color-shade-500);
    }

    &--outlined {
      --c-button-background-color: transparent;
      --c-button-color: var(--color-shade-800);
      --c-button-border-color: var(--color-shade-800);

      @include c-button-hover($this) {
        --c-button-color: var(--color-shade-0);
        --c-button-border-color: var(--color-shade-500);
      }
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
