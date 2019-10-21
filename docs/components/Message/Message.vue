<template>
    <div
        class="c-msg"
        :class="{
            'c-msg--info' : state === 'info',
            'c-msg--warning' : state === 'warning',
            'c-msg--success' : state === 'success'
        }"
    >
        <slot />
    </div>
</template>

<script>
    export default {
        props: {
            state: {
                type: String,
                default: 'info'
            }
        }
    }
</script>

<style lang="scss" scoped>
  .c-msg {
    --background-color: var(--color-info);
    --color: var(--color-info-darken);
    --color-text: var(--color);
    --border-color: var(--color-info-dark);

    background-color: var(--background-color);
    border-left: 0.25rem solid var(--border-color);
    color: var(--color);
    padding: 1.5rem;
    border-radius: 0.25rem;
    position: relative;
    margin-top: calc(var(--space-between-tags) * 1.2);
    margin-bottom: calc(var(--space-between-tags) * 1.2);
  }

  .c-msg--warning {
    --background-color: var(--color-warning);
    --color: var(--color-warning-darken);
    --border-color: var(--color-warning-dark);
  }

  .c-msg--success {
    --background-color: var(--color-success);
    --color: var(--color-success-darken);
    --border-color: var(--color-success-dark);
  }

</style>
