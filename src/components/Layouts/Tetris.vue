<template>
    <div class="c-layout-tetris">
        <div class="c-layout-tetris__inner">
            <slot />
        </div>
    </div>
</template>

<style lang="scss">
  .c-layout-tetris {
    --c-layout-tetris-gap: 1em;

    &__inner {
      display: grid;
      grid-gap: var(--c-layout-tetris-gap);
      grid-template-columns: repeat(4, 1fr);
    }

    &__item {
      grid-column: span 1;

      &:nth-child(4n + 1) {
        grid-column: span 2;
      }
    }
  }
</style>

<script>
    export default {
        name: 'AtLayoutTetris'
    }
</script>
