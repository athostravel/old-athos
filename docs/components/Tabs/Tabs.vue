<template>
    <div class="c-tabs">
        <nav class="c-tabs__nav">
            <button
                v-for="(button, index) in buttons"
                :key="button.id"
                class="c-tabs__nav-item"
                :class="{ [activeClass] : activeItem === index }"
                @click.prevent="activeTab(index)"
            >
                {{ button }}
            </button>
        </nav>
        <slot />
    </div>
</template>

<script>
    export default {
        data () {
            return {
                buttons: [],
                activeItem: 0,
                activeClass: 'is-active'
            }
        },
        mounted () {
            this.buttons = this.getButtons()
            this.activeContent(this.activeItem)
        },
        methods: {
            activeTab (index) {
                this.activeItem = index
                this.activeContent(this.activeItem)
            },
            activeContent (activeItem) {
                this.$children.forEach((child) => child.$el.classList.remove(this.activeClass))
                this.$children[activeItem].$el.classList.add(this.activeClass)
            },
            getButtons () {
                return this.$children.map((item) => item.title)
            }
        }
    }
</script>

<style lang="scss" scoped>
  .c-tabs {
    &__nav {
      border-bottom: #{em(1px)} solid var(--color-border);
      margin-bottom: 2em;
      display: grid;
      grid-auto-flow: column;
      overflow-x: auto;
      grid-gap: 2em;
      justify-content: start;
      align-items: end;

      &-item {
        padding: 1em;
        border-bottom: #{em(1px)} solid transparent;
        transition: all 0.3s;

        &.is-active {
          color: var(--color-secondary);
          border-color: var(--color-secondary);
        }
      }
    }
  }
</style>
