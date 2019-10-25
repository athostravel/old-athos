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

    --c-price-color: var(--color-shade-1);

    color: var(--c-price-color);
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "text before" "... value";
    grid-gap: 8px 4px;

    &__text {
      grid-area: text;
      justify-self: flex-end;
    }

    &__before {
      grid-area: before;
      text-decoration: line-through;
    }

    &__value {
      grid-area: value;
    }

    &--inline {
      grid-template-columns: 1fr;
      grid-template-areas: "text before value";
    }
  }
</style>
