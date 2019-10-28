<template>
    <component :is="tag" class="c-tip" :class="{
        'c-tip--has-img': img !== undefined,
        'c-tip--has-icon': icon !== undefined,
        'c-tip--reverse': reverse !== undefined
    }">
        <div class="c-tip__media">
            <AtIcon
                v-if="icon"
                class="c-tip__icon"
                :icon="icon"
            />
            <AtPicture
                v-if="img"
                class="c-tip__picture"
                v-bind="picture"
                src="https://source.unsplash.com/random/40x40"
                alt="text"
                title="title"
            />
        </div>
        <div class="c-tip__info">
            <span class="c-tip__title">{{title}}</span>
            <span class="c-tip__text">{{text}}</span>
        </div>
    </component>
</template>

<script>
    export default {
        name: 'AtTip',
        props: {
            tag: {
                type: String,
                default: 'div'
            },
            icon: {
                type: [String, Boolean],
                default: undefined
            },
            reverse: {
                type: [String, Boolean],
                default: undefined
            },
            img: {
                type: [String, Boolean],
                default: undefined
            },
            title: {
                type: String,
                default: ''
            },
            text: {
                type: String,
                default: ''
            }
        }
    }
</script>

<style lang="scss">
    .c-tip {
        $this: &;

        display: inline-flex;
        align-items: center;

        &--reverse {
            flex-direction: row-reverse;

            #{$this}__media {
                margin-right: 0;
                margin-left: 1.2rem;
            }
        }

        &__media {
            align-items: center;
            display: flex;
            flex-shrink: 0;
            justify-content: center;
            margin-right: 1.2rem;
            min-height: 40px;
            min-width: 40px;
            position: relative;
        }

        &__icon {
            font-size: var(--c-input-icon-font-size, 1.8em);
            color: var(--color-secondary);
        }

        &__info {
            display: flex;
            flex-direction: column;
        }

        &__title {
            color: var(--color-primary);
            font-size: var(--font-size-m);
            line-height: var(--line-height-xl);
            font-weight: 700;
        }

        &__text {
            color: var(--color-primary);
            font-size: var(--font-size-xs);
            line-height: var(--line-height-m);
        }
    }
</style>