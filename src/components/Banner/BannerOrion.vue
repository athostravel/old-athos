<template>
    <AtBanner
        class="c-banner--orion"
        valign="bottom"
        align="center"
        text="Button"
        shadow
        radius
    >
        <div class="c-banner__title">
            asdadasd
        </div>
        <AtButton class="c-banner__button" text="Leer más" outlined size="small" />
    </AtBanner>
</template>

<script>
    import AtBanner from '../Banner/Banner.vue'

    export default {
        name: 'AtBannerOrion',
        components: {
            AtBanner
        }
    }
</script>

<style lang="scss">
  .c-banner--orion {

  }
</style>
