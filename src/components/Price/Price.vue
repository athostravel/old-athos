<template>
    <div
        class="c-price"
        :class="{'c-price--inline' : inline}"
    >
        <div class="c-price__text">
            {{text}}
        </div>
        <div class="c-price__before">
            {{before}}{{currency}}
        </div>
        <div class="c-price__value">
            {{value}}{{currency}}
        </div>
    </div>
</template>

<script>
    export default {
        name: 'AtPrice',
        props: {
            text: {
                type: String,
                default: undefined
            },
            before: {
                type: String,
                default: undefined
            },
            value: {
                type: String,
                default: undefined
            },
            currency: {
                type: String,
                default: '€'
            },
            inline: {
                type: Boolean,
                default: false
            }
        }
    }
</script>

<style lang="scss">
  .c-price {
    $this: &;

    --c-price-gap: 0 4px;
    --c-price-text-align: right;
    --c-price-color: var(--color-shade-1);
    --c-price-text-font-size: 0.875em;
    --c-price-before-font-size: 0.875em;
    --c-price-value-font-size: 1.375em;
    --c-price-value-font-weight: 700;

    color: var(--c-price-color);
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-areas: "text before" "value value";
    grid-gap: var(--c-price-gap);
    text-align: var(--c-price-text-align);

    &__text {
      grid-area: text;
      justify-self: flex-end;
      align-self: center;
      font-size: var(--c-price-text-font-size);
    }

    &__before {
      grid-area: before;
      text-decoration: line-through;
      align-self: center;
      font-size: var(--c-price-before-font-size);
    }

    &__value {
      grid-area: value;
      font-size: var(--c-price-value-font-size);
      font-weight: var(--c-price-value-font-weight);
    }

    &--inline {
      grid-template-rows: 1fr;
      grid-template-areas: "text before value";
    }
  }
</style>
