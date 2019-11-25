<template>
    <aside class="c-sidebar" :class="{ 'is-active' : isPanelOpen }">
        <div class="c-sidebar__toggle">
            <Hamburger />
        </div>
        <div class="c-sidebar__inner">
            <div class="c-sidebar__box">
                <img class="c-sidebar__logo" src="@/assets/images/logos/avoris.svg" alt="Logo">
                <Search class="c-sidebar__search" />
            </div>
            <Navigation />
        </div>
    </aside>
</template>

<script>
    import Navigation from '@/components/Navigation/Navigation.vue'
    import Search from '@/components/Search/Search.vue'
    import Hamburger from '@/components/Hamburger/Hamburger.vue'

    export default {
        components: {
            Navigation,
            Search,
            Hamburger
        },
        computed: {
            isPanelOpen () {
                return this.$store.state.nav.isNavOpen
            }
        }
    }
</script>

<style lang="scss" scoped>
  .c-sidebar {
    $this: &;

    border-right: 0.0625rem solid var(--color-border);
    background-color: #fff;
    position: relative;
    color: var(--color-text);

    &__toggle {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      z-index: 3;
    }

    &:not(.is-active) {
      #{$this}__toggle {
        right: -1rem;
        left: auto;
        transform: translateY(-50%) rotate(180deg);
      }
    }

    &__inner {
      max-height: 100vh;
      overflow-y: auto;
      overflow-x: hidden;
    }

    &__box {
      padding: 2rem 1rem;
      position: sticky;
      top: 0;
      background-color: #fff;
      min-width: 19.94rem;
    }

    &__logo {
      margin-bottom: 2rem;
    }
  }
</style>
