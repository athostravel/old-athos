<template>
    <body :class="{ 'has-overlay': isModalActive }" class="body">
        <RouterView />
    </body>
</template>

<script>
    export default {
        computed: {
            isModalActive () {
                return this.$store.state.overlay.isModalOpen
            }
        },
        updated () {
            // window.Pegasus.init()
        }
    }
</script>
