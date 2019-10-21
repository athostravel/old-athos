<template>
    <div class="c-layout">
        <div class="c-layout__inner">
            <Sidebar class="c-layout__sidebar" />

            <div class="c-layout__content">
                <slot />

                <Footer />
            </div>
        </div>
    </div>
</template>

<script>
    import Sidebar from '@/components/Sidebar/Sidebar.vue'
    import Footer from '@/components/Footer/Footer.vue'

    export default {
        components: {
            Sidebar,
            Footer
        }
    }
</script>

<style lang="scss" scoped>
  .c-layout {
    min-height: 100vh;
    display: flex;
    flex-direction: column;

    &__inner {
      display: flex;
      flex-grow: 1;
    }

    &__sidebar {
      transition: all 0.3s;
      z-index: 2;
      width: 20rem;
      flex-shrink: 0;
      max-height: 100vh;
      position: sticky;
      top: 0;
      will-change: width;

      @include breakpoint(l down) {
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
      }

      &:not(.is-active) {
        width: 0;
      }
    }

    &__content {
      flex-grow: 1;
      padding: 1rem;
      z-index: 1;
      min-width: 0.0625rem;

      @include breakpoint(m) {
        padding: 2.5rem;
      }
    }
  }

</style>
