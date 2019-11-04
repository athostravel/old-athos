<template>
    <body :class="{ 'has-overlay': isModalActive }" class="body">
        <RouterView />
    </body>
</template>

<script>
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
