<template>
    <AtBanner
        tag="article"
        class="c-banner--orion"
        valign="bottom"
        align="center"
        text="Button"
        shadow
        radius
        overlay
        :picture="picture"
    >
        <component :is="titleTag" v-if="title" class="c-banner__title">
            {{ title }}
        </component>

        <AtButton
            v-if="button"
            v-bind="button"
            class="c-banner__button"
            size="small"
            casper
        />
    </AtBanner>
</template>

<script>
    import AtBanner from '../Banner/Banner.vue'

    export default {
        name: 'AtBannerOrion',
        components: {
            AtBanner
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
            }
        }
    }
</script>

<style lang="scss">
  .c-banner {
    $this: &;

    &--orion {
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
