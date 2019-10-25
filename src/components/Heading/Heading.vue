<template>
    <div
        class="c-heading"
        :class="{
            'c-heading--has-icon': icon,
            'c-heading--align-center': align === 'center',
            'c-heading--align-right': align === 'right'
        }"
    >
        <span
            v-if="icon"
            class="c-heading__icon"
        >
            <AtIcon :icon="icon" />
        </span>
        <component
            :is="titleTag"
            class="c-heading__title"
        >
            {{ title }}
        </component>
        <p
            v-for="txt in text"
            :key="txt.id"
            class="c-heading__paragraph"
        >
            <span class="c-heading__paragraph-text">
                {{ txt }}
            </span>
        </p>
    </div>
</template>

<style lang="scss">
  .c-heading {
    $this: &;

    --c-heading-padding-bottom: #{em(32px)};
    --c-heading-title-font-size: #{em(32px)};
    --c-heading-title-line-height: 1.4;
    --c-heading-paragraph-margin-top: #{em(16px)};
    --c-heading-paragraph-margin-bottom: #{em(8px)};

    padding-bottom: var(--c-heading-padding-bottom);

    &--align {
      &-right {
        text-align: right;
      }

      &--center {
        text-align: center;
      }
    }

    &__title {
      font-size: var(--c-heading-title-font-size);
      line-height: var(--c-heading-title-line-height);
    }

    &__paragraph {
      &:not(:last-of-type) {
        margin-bottom: var(--c-heading-paragraph-margin-bottom);
      }

      &:first-of-type {
        margin-top: var(--c-heading-paragraph-margin-top);
      }
    }
  }
</style>

<script>

    import AtIcon from '../Icon/Icon.vue'

    export default {
        name: 'AtHeading',
        components: {
            AtIcon
        },
        props: {
            title: {
                type: String,
                default: undefined
            },
            text: {
                type: Array,
                default: () => []
            },
            titleTag: {
                type: String,
                default: 'h3'
            },
            icon: {
                type: [String, Boolean],
                default: false
            },
            align: {
                type: String,
                default: undefined
            }
        }
    }
</script>
