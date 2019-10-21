<template>
    <button
        id="burger"
        class="c-hamburger"
        :class="{ 'is-active' : isBurgerActive }"
        @click.prevent="toggle"
    >
        <span class="c-hamburger__icon fas fa-angle-left"></span>
    </button>
</template>

<script>
    import { store, mutations } from '@/store/nav.js'

    export default {
        computed: {
            isBurgerActive () {
                return store.isNavOpen
            }
        },
        methods: {
            toggle () {
                mutations.toggleNav()
            }
        }
    }
</script>

<style lang="scss" scoped>
  .c-hamburger {
    $this: &;

    background-color: #f2f2f2;
    color: #bfbfbf;
    width: 1em;
    height: 6em;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    border-top-left-radius: 1.4em;
    border-bottom-left-radius: 1.4em;
    transition: background-color 0.3s, color 0.3s;

    &:active,
    &:focus,
    &:hover {
      background-color: var(--color-secondary);
      color: #fff;
    }

    &__box {
      width: 1em;
      height: 6em;
      position: relative;
      display: block;
      z-index: 1;
    }

    &__top,
    &__center,
    &__bottom {
      display: block;
      height: 0;
      border-top: 0.125em solid currentColor;
      transition: all 0.3s;
      position: absolute;
      left: 0;
      top: 0;
      width: 1.4em;
      transform-origin: center;
    }

    &__center {
      top: 50%;
      transform: translateY(-50%);
    }

    &__bottom {
      top: auto;
      bottom: 0;
    }

    &.is-active {
      #{$this}__top {
        top: 50%;
        transform: translateY(-50%) rotate(45deg);
      }

      #{$this}__center {
        transform: translateX(-100%);
      }

      #{$this}__bottom {
        bottom: 50%;
        transform: translateY(50%) rotate(-45deg);
      }
    }
  }
</style>
