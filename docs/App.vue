<template>
    <body :class="{ 'has-overlay': isModalActive }" class="body">
        <RouterView />
    </body>
</template>

<script>
    import '@/assets/js/icons.js'
    import '@/assets/js/fontawesome.js'
    import { store as storeOverlay } from '@/store/overlay.js'

    export default {
        computed: {
            isModalActive () {
                return storeOverlay.isModalOpen
            }
        },
        updated () {
            // window.Pegasus.init()
        }
    }
</script>
