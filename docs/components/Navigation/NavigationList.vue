<template>
    <ul class="c-nav__list">
        <li v-for="item in items" :key="item.id" class="c-nav__item">
            <RouterLink :to="item.url" class="c-nav__link" exact>
                {{ item.title }}
            </RouterLink>
            <NavigationList v-if="item.children" :items="item.children" />
        </li>
    </ul>
</template>

<script>
    export default {
        name: 'NavigationList',
        props: {
            items: {
                type: Array,
                default: undefined
            }
        }
    }
</script>

<style lang="scss" scoped>
  .c-nav {
    $this: &;

    &__list {
      margin-bottom: 2.5rem;

      #{$this}__list {
        margin-bottom: 0;
        padding-left: 1rem;
      }
    }

    &__item {
      #{$this}__item {
        #{$this}__link {
          font-weight: 400;
        }
      }
    }

    &__link {
      line-height: 1.4;
      font-weight: 600;
      padding-top: 0.25rem;
      padding-bottom: 0.25rem;
      display: block;

      &:active,
      &:focus,
      &:hover {
        color: var(--color-primary);
      }

      &.is-active {
        color: var(--color-secondary);
      }
    }
  }
</style>
