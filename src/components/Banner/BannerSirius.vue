<template>
    <AtBanner
        tag="article"
        class="c-banner--sirius"
        text="Button"
        shadow
        radius
        overlay
        :picture="picture"
    >
        <component :is="textTag" class="c-banner__text">
            <AtText v-bind="meta" class="c-banner__meta" />
            <AtText v-bind="title" class="c-banner__title" />
        </component>
        <AtIconList
            :icons="icons"
            class="c-banner__icons"
        />
        <AtPriceButton
            class="c-banner__price"
            :price="price"
            :button="button"
        />
    </AtBanner>
</template>

<script>
    import AtBanner from '../Banner/Banner.vue'
    import AtPriceButton from '../Price/PriceButton'
    import AtIconList from '../Icon/IconList'
    import AtText from '../Text/Text'

    export default {
        name: 'AtBannerSirius',
        components: {
            AtBanner,
            AtPriceButton,
            AtIconList,
            AtText
        },
        props: {
            textTag: {
                type: String,
                default: 'div'
            },
            title: {
                type: Object,
                default: () => {}
            },
            meta: {
                type: Object,
                default: () => {}
            },
            button: {
                type: Object,
                default: () => {}
            },
            picture: {
                type: Object,
                default: () => {}
            },
            price: {
                type: Object,
                default: () => {}
            },
            icons: {
                type: Array,
                default: () => ['bullet', 'planet']
            }
        }
    }
</script>

<style lang="scss">
  .c-banner {
    $this: &;

    &--sirius {
      --c-banner-overlay: linear-gradient(0deg, #000 0%, transparent 50%);
      --c-banner-content-padding: 1em 1em 1em 0;
      --c-banner-meta-color: #fff;
      --c-banner-meta-background: #c6c6c6;
      --c-banner-meta-padding: 0.5em;
      --c-banner-meta-font-size: 0.875em;
      --c-banner-title-color: #fff;
      --c-banner-title-background: #d6d6d6;
      --c-banner-title-padding: 0.5em;
      --c-banner-title-font-size: 1em;

      #{$this} {
        &__content {
          display: grid;
          grid-template-rows: repeat(3, auto);
          padding: var(--c-banner-content-padding);
          grid-template-areas: "icons" "text" "price";
          height: 100%;
        }

        &__text {
          grid-area: text;
          justify-self: start;
          text-align: left;
        }

        &__icons {
          grid-area: icons;
          align-self: start;
          justify-self: end;
        }

        &__price {
          grid-area: price;
          align-self: end;
          justify-self: end;
        }

        &__button {
          --c-button-text-transform: normal;
          --c-button-font-size: 1.231em;
        }

        &__title {
          --c-text-font-size: var(--c-banner-title-font-size);
          --c-text-background: var(--c-banner-title-background);
          --c-text-padding: var(--c-banner-title-padding);
          --c-text-color: var(--c-banner-title-color);
        }

        &__meta {
          --c-text-font-size: var(--c-banner-meta-font-size);
          --c-text-background: var(--c-banner-meta-background);
          --c-text-padding: var(--c-banner-meta-padding);
          --c-text-color: var(--c-banner-meta-color);

          display: inline-block;
        }
      }
    }
  }
</style>
