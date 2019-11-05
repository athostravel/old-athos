<template>
    <div class="c-search">
        <div class="c-search__inner">
            <span class="c-search__icon c-icon c-icon---search"></span>
            <input
                v-model="search"
                class="c-search__element"
                type="text"
                @keyup="onKeyup"
                @keydown.down="onArrowDown"
                @keydown.up="onArrowUp"
                @keydown.enter="onEnter"
            >
        </div>
        <ul class="c-search__list" :class="{ 'is-active': isOpen }">
            <li
                v-for="(item, index) in results"
                :key="item.id"
                class="c-search__item"
                :class="{ 'is-active': index === arrowCounter }"
                @mouseover="onHover(index)"
            >
                <component :is="item.url ? 'RouterLink' : 'div'" :to="item.url" class="c-search__link">
                    <span v-if="item.parent" class="c-search__parent">{{ item.parent }}</span>
                    <span class="c-search__text">
                        <span v-if="item.parent">></span>
                        {{ item.title }}
                    </span>
                </component>
            </li>
        </ul>
    </div>
</template>

<script>
    import config from '@/config.js'

    export default {
        data () {
            return {
                search: '',
                results: [],
                navigation: config.navigation,
                arrowCounter: -1,
                isOpen: false
            }
        },
        created () {
            window.addEventListener('click', this.close)
        },

        beforeDestroy () {
            window.removeEventListener('click', this.close)
        },
        methods: {
            onKeyup () {
                this.results = []
                this.search ? this.filterResults(this.navigation) : this.arrowCounter = -1
                this.results.length ? this.isOpen = true : this.isOpen = false
            },
            onArrowDown () {
                if (this.arrowCounter < (this.results.length - 1)) this.arrowCounter = this.arrowCounter + 1
            },
            onArrowUp () {
                if (this.arrowCounter > 0) this.arrowCounter = this.arrowCounter - 1
            },
            onEnter () {
                if (this.arrowCounter >= 0) {
                    const url = this.results[this.arrowCounter].url
                    const currentRoute = this.$router.currentRoute

                    if (currentRoute.name === url.name) {
                        const id = document.querySelector(url.hash)
                        this.isOpen = false
                        this.search = ''
                        if (url.hash && id) id.scrollIntoView()
                    } else {
                        this.$router.push(url)
                    }
                }
            },
            onHover (index) {
                this.arrowCounter = index
            },
            close (e) {
                if (!this.$el.contains(e.target)) this.isOpen = false
            },
            filterResults (items, parent = undefined) {
                items.forEach(item => {
                    if (item.title) {
                        const match = item.title.toLowerCase().includes(this.search.toLowerCase())
                        if (match) this.results.push({ title: item.title, url: item.url, parent: parent })
                    }

                    if (item.children) this.filterResults(item.children, item.title)
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
  .c-search {
    $this: &;

    border-radius: 0.25em;
    position: relative;
    font-size: 1em;

    &__inner {
      position: relative;
    }

    &__element {
      border: 0.0625rem solid var(--color-border);
      background-color: #fff;
      height: 2.286em;
      border-radius: 1.429em;
      padding-left: 2.857em;
      padding-right: 1.143em;
      font-size: 0.875em;
      color: currentColor;
      outline: none;
      width: 100%;
      transition: all 0.3s;
      padding-bottom: 0.1429em;

      &:focus {
        border-color: var(--color-secondary);
      }
    }

    &__icon {
      pointer-events: none;
      color: var(--color-icons);
      position: absolute;
      top: 50%;
      left: 1em;
      transform: translateY(-50%);
      font-size: 1em;
    }

    &__list {
      padding: 0.25rem;
      border: 0.0625rem solid var(--color-border);
      display: none;
      position: absolute;
      top: calc(100% + 0.25rem);
      left: 50%;
      transform: translateX(-50%);
      background-color: #fff;
      width: 100%;
      max-width: 18rem;
      max-height: 25rem;
      overflow-y: auto;
      border-radius: 0.25rem;

      &.is-active {
        display: block;
      }
    }

    &__item {
      line-height: 1.4;
      border-radius: 0.25em;

      &.is-active {
        background-color: #f2f2f2;
        color: var(--color-secondary);
      }
    }

    &__link {
      display: block;
      font-size: 0.9375em;
      padding: 0.5333em;
    }

    &__parent {
      font-weight: 600;
      display: inline-block;

      & + #{$this}__text {
        font-weight: 400;
        font-size: 0.875em;
        display: inline-block;
      }
    }

    &__text {
      font-weight: 600;
    }
  }
</style>
