<template>
    <AtBanner
        tag="article"
        class="c-banner--sirius"
        valign="center"
        align="center"
        text="Button"
        shadow
        radius
        overlay
        :picture="picture"
    >
        <AtIconList />
        <AtPriceButton
            :price="price"
            :button="button"
        />
    </AtBanner>
</template>

<script>
    import AtBanner from '../Banner/Banner.vue'
    import AtPriceButton from '../Price/PriceButton'
    import AtIconList from '../Icon/IconList'

    export default {
        name: 'AtBannerSirius',
        components: {
            AtBanner,
            AtPriceButton,
            AtIconList
        },
        props: {
            title: {
                type: String,
                default: undefined
            },
            titleTag: {
                type: String,
                default: 'div'
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
            }
        }
    }
</script>

<style lang="scss">
  .c-banner {
    $this: &;

    &--sirius {
      --c-banner-overlay: linear-gradient(0deg, #000 0%, transparent 50%);

      #{$this} {
        &__button {
          --c-button-text-transform: normal;
          --c-button-font-size: 1.231em;
        }
      }
    }
  }
</style>
